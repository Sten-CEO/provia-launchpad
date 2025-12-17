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

// Plan mapping from price IDs
const PRICE_TO_PLAN: Record<string, string> = {
  "price_1SfJvt2O0pumL026j1PuX6CX": "monthly",
  "price_1SfJCt2O0pumL026oIztNMRe": "12m",
  "price_1SfJD82O0pumL026QBHCcO5e": "24m",
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
  const userId = subscription.metadata?.user_id;
  if (!userId) {
    console.warn("No user_id in subscription metadata:", subscription.id);
    return;
  }

  const item = subscription.items.data[0];
  const priceId = item?.price?.id;
  const plan = priceId ? PRICE_TO_PLAN[priceId] || null : null;

  await supabaseAdmin
    .from("billing_subscriptions")
    .upsert(
      {
        user_id: userId,
        stripe_customer_id: subscription.customer as string,
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

  console.log(`Synced subscription ${subscription.id} for user ${userId}, status: ${subscription.status}`);
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
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`Subscription ${event.type}:`, subscription.id);
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
