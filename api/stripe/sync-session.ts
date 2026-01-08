import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

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
    const { sessionId } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: "sessionId is required" });
    }

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["subscription", "subscription.default_payment_method"],
    });

    if (!session.subscription) {
      return res.status(400).json({ error: "No subscription found in session" });
    }

    const subscription = session.subscription as Stripe.Subscription;
    const userId = subscription.metadata?.user_id || session.metadata?.user_id;

    if (!userId) {
      return res.status(400).json({ error: "No user_id found in metadata" });
    }

    const item = subscription.items.data[0];
    const priceId = item?.price?.id;
    const plan = priceId ? PRICE_TO_PLAN[priceId] || null : null;
    const periodEnd = (subscription as unknown as { current_period_end: number }).current_period_end;

    // Sync to Supabase
    const { error: upsertError } = await supabaseAdmin
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
          current_period_end: new Date(periodEnd * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

    if (upsertError) {
      console.error("Failed to sync subscription:", upsertError);
      return res.status(500).json({ error: "Failed to sync subscription" });
    }

    return res.status(200).json({
      success: true,
      subscription: {
        id: subscription.id,
        status: subscription.status,
        plan: plan,
        current_period_end: periodEnd,
      },
    });
  } catch (error) {
    console.error("Sync session error:", error);
    return res.status(500).json({ error: "Failed to sync session" });
  }
}
