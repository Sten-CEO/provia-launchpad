import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { userId, activeSeats } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    if (typeof activeSeats !== "number" || activeSeats < 1) {
      return res.status(400).json({ error: "activeSeats must be a positive number" });
    }

    // Get user's subscription from Supabase
    const { data: subscription, error: fetchError } = await supabaseAdmin
      .from("billing_subscriptions")
      .select("stripe_subscription_id, stripe_subscription_item_id, quantity")
      .eq("user_id", userId)
      .single();

    if (fetchError || !subscription) {
      return res.status(404).json({ error: "No subscription found for user" });
    }

    if (!subscription.stripe_subscription_id || !subscription.stripe_subscription_item_id) {
      return res.status(400).json({ error: "Subscription not properly configured" });
    }

    const currentQuantity = subscription.quantity || 1;
    const isUpgrade = activeSeats > currentQuantity;

    // Update subscription item quantity
    await stripe.subscriptionItems.update(subscription.stripe_subscription_item_id, {
      quantity: activeSeats,
      // For upgrades: create prorations (user pays difference immediately)
      // For downgrades: no immediate change, applies at next billing cycle
      proration_behavior: isUpgrade ? "create_prorations" : "none",
    });

    // If upgrading, create and pay an invoice immediately
    if (isUpgrade) {
      try {
        // Create an invoice for the prorated amount
        const invoice = await stripe.invoices.create({
          customer: (await stripe.subscriptions.retrieve(subscription.stripe_subscription_id)).customer as string,
          subscription: subscription.stripe_subscription_id,
          auto_advance: true, // Automatically finalize and attempt payment
        });

        // If invoice has pending items, finalize and pay
        if (invoice.status === "draft") {
          await stripe.invoices.finalizeInvoice(invoice.id);
          await stripe.invoices.pay(invoice.id);
        }
      } catch (invoiceError) {
        // Log but don't fail - Stripe might auto-handle this
        console.warn("Invoice creation/payment warning:", invoiceError);
      }
    }

    // Update quantity in Supabase
    await supabaseAdmin
      .from("billing_subscriptions")
      .update({
        quantity: activeSeats,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", userId);

    return res.status(200).json({
      success: true,
      previousQuantity: currentQuantity,
      newQuantity: activeSeats,
      isUpgrade,
    });
  } catch (error) {
    console.error("Set seats error:", error);
    return res.status(500).json({ error: "Failed to update seats" });
  }
}
