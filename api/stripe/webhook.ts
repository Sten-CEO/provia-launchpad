import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Plan mapping from price IDs (PRODUCTION)
const PRICE_TO_PLAN: Record<string, string> = {
  "price_1SidK32O0pumL026AJuBZvH5": "monthly",
  "price_1SidKm2O0pumL026uTxvgfsW": "12m",
  "price_1SidLQ2O0pumL0260VbUZ8tn": "24m",
};

// Disable body parsing for raw body access
export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

async function syncSubscription(subscription: Stripe.Subscription) {
  let userId = subscription.metadata?.user_id;
  const stripeCustomerId = typeof subscription.customer === "string"
    ? subscription.customer
    : subscription.customer.id;

  // If no user_id in metadata, try to find it from billing_subscriptions by customer_id
  if (!userId) {
    console.log("No user_id in subscription metadata, looking up by customer_id:", stripeCustomerId);
    const { data: existingRecord } = await supabaseAdmin
      .from("billing_subscriptions")
      .select("user_id")
      .eq("stripe_customer_id", stripeCustomerId)
      .single();

    if (existingRecord?.user_id) {
      userId = existingRecord.user_id;
      console.log("Found user_id from existing record:", userId);
    }
  }

  if (!userId) {
    console.warn("Could not find user_id for subscription:", subscription.id);
    return;
  }

  const item = subscription.items?.data?.[0];
  const priceId = item?.price?.id;
  const plan = priceId ? PRICE_TO_PLAN[priceId] || null : null;

  const { error: upsertError } = await supabaseAdmin
    .from("billing_subscriptions")
    .upsert(
      {
        user_id: userId,
        stripe_customer_id: stripeCustomerId,
        stripe_subscription_id: subscription.id,
        stripe_subscription_item_id: item?.id || null,
        plan: plan,
        status: subscription.status,
        quantity: item?.quantity || 1,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" }
    );

  if (upsertError) {
    console.error("Failed to upsert subscription:", upsertError);
    throw upsertError;
  }

  console.log(`Synced subscription ${subscription.id} for user ${userId}, status: ${subscription.status}, item_id: ${item?.id}`);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return res.status(400).json({ error: "Missing stripe-signature header" });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET not configured");
    return res.status(500).json({ error: "Webhook secret not configured" });
  }

  let event: Stripe.Event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return res.status(400).json({ error: "Webhook signature verification failed" });
  }

  try {
    switch (event.type) {
      // ============================================
      // Checkout completed - Initial subscription creation
      // ============================================
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Checkout session completed:", session.id);

        if (session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
          await syncSubscription(subscription);
        }
        break;
      }

      // ============================================
      // Subscription events
      // ============================================
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subFromEvent = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${event.type}:`, subFromEvent.id);

        // Re-retrieve the full subscription to ensure we have all data (items, etc.)
        const subscription = await stripe.subscriptions.retrieve(subFromEvent.id, {
          expand: ["items.data.price"],
        });
        await syncSubscription(subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription deleted:", subscription.id);

        const userId = subscription.metadata?.user_id;
        if (userId) {
          await supabaseAdmin
            .from("billing_subscriptions")
            .update({
              status: "canceled",
              updated_at: new Date().toISOString(),
            })
            .eq("user_id", userId);
        }
        break;
      }

      // ============================================
      // Invoice events
      // ============================================
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("Invoice paid:", invoice.id);

        if (invoice.subscription) {
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
          await syncSubscription(subscription);
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("Invoice payment failed:", invoice.id);

        if (invoice.subscription) {
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
          await syncSubscription(subscription);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return res.status(500).json({ error: "Webhook handler failed" });
  }
}
