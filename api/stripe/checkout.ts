import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

// Price IDs (TEST MODE)
const PRICE_IDS: Record<string, string> = {
  monthly: "price_1SfJvt2O0pumL026j1PuX6CX",
  "12m": "price_1SfJCt2O0pumL026oIztNMRe",
  "24m": "price_1SfJD82O0pumL026QBHCcO5e",
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL!,
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
    const { plan, userId, email } = req.body;

    // Validate plan
    if (!plan || !PRICE_IDS[plan]) {
      return res.status(400).json({ error: "Invalid plan. Must be monthly, 12m, or 24m" });
    }

    // Validate user
    if (!userId || !email) {
      return res.status(400).json({ error: "userId and email are required" });
    }

    // Check if user has existing subscription record
    const { data: existingSubscription } = await supabaseAdmin
      .from("billing_subscriptions")
      .select("stripe_customer_id")
      .eq("user_id", userId)
      .single();

    let stripeCustomerId = existingSubscription?.stripe_customer_id;

    // Create or retrieve Stripe customer
    if (!stripeCustomerId) {
      // Search for existing customer by email
      const existingCustomers = await stripe.customers.list({
        email: email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        stripeCustomerId = existingCustomers.data[0].id;
      } else {
        // Create new customer
        const customer = await stripe.customers.create({
          email: email,
          metadata: {
            supabase_user_id: userId,
          },
        });
        stripeCustomerId = customer.id;
      }

      // Upsert billing subscription record
      await supabaseAdmin.from("billing_subscriptions").upsert(
        {
          user_id: userId,
          stripe_customer_id: stripeCustomerId,
          status: "inactive",
        },
        { onConflict: "user_id" }
      );
    }

    // Get site URL
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL || "https://proviabase.fr";

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomerId,
      mode: "subscription",
      line_items: [
        {
          price: PRICE_IDS[plan],
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/billing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/billing/cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      metadata: {
        user_id: userId,
        plan: plan,
      },
      subscription_data: {
        metadata: {
          user_id: userId,
          plan: plan,
        },
      },
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}
