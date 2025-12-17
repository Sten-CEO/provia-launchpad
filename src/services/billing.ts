import { supabase } from '@/lib/supabase';

export type StripePlan = 'monthly' | '12m' | '24m';

export interface SubscriptionStatus {
  isActive: boolean;
  status: string | null;
  plan: StripePlan | null;
  quantity: number;
  currentPeriodEnd: string | null;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
}

export interface CheckoutResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Récupère le statut d'abonnement de l'utilisateur connecté
 */
export async function getSubscriptionStatus(): Promise<SubscriptionStatus | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    const { data: subscription, error } = await supabase
      .from('billing_subscriptions')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error || !subscription) {
      return {
        isActive: false,
        status: null,
        plan: null,
        quantity: 0,
        currentPeriodEnd: null,
        stripeCustomerId: null,
        stripeSubscriptionId: null,
      };
    }

    // Check if subscription is active
    const isActive =
      (subscription.status === 'active' || subscription.status === 'trialing') &&
      subscription.current_period_end &&
      new Date(subscription.current_period_end) > new Date();

    return {
      isActive,
      status: subscription.status,
      plan: subscription.plan as StripePlan,
      quantity: subscription.quantity || 1,
      currentPeriodEnd: subscription.current_period_end,
      stripeCustomerId: subscription.stripe_customer_id,
      stripeSubscriptionId: subscription.stripe_subscription_id,
    };
  } catch (error) {
    console.error('Error fetching subscription status:', error);
    return null;
  }
}

/**
 * Vérifie si l'utilisateur a un abonnement actif
 */
export async function hasActiveSubscription(): Promise<boolean> {
  const status = await getSubscriptionStatus();
  return status?.isActive || false;
}

/**
 * Crée une session Stripe Checkout
 */
export async function createCheckoutSession(plan: StripePlan): Promise<CheckoutResult> {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: 'Vous devez être connecté pour souscrire à un abonnement.',
      };
    }

    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan,
        userId: user.id,
        email: user.email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Erreur lors de la création de la session de paiement.',
      };
    }

    return {
      success: true,
      url: data.url,
    };
  } catch (error) {
    console.error('Checkout session error:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue. Veuillez réessayer.',
    };
  }
}

/**
 * Synchronise la session Stripe après paiement
 */
export async function syncCheckoutSession(sessionId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/stripe/sync-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Erreur lors de la synchronisation.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Sync session error:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue.',
    };
  }
}

/**
 * Met à jour le nombre de sièges actifs
 */
export async function updateActiveSeats(activeSeats: number): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: 'Vous devez être connecté.',
      };
    }

    const response = await fetch('/api/seats/set', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        activeSeats,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Erreur lors de la mise à jour des sièges.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Update seats error:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue.',
    };
  }
}

/**
 * Vérifie si l'utilisateur est connecté
 */
export async function isAuthenticated(): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  return !!user;
}

/**
 * Récupère l'utilisateur connecté
 */
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// ============================================
// LEGACY: Fonctions de compatibilité (à supprimer après migration)
// ============================================

export interface BillingStatus {
  hasPaid: boolean;
  plan: string | null;
  activatedAt: string | null;
}

/**
 * @deprecated Utilisez getSubscriptionStatus() à la place
 */
export async function getBillingStatus(): Promise<BillingStatus | null> {
  const status = await getSubscriptionStatus();
  if (!status) return null;

  return {
    hasPaid: status.isActive,
    plan: status.plan,
    activatedAt: status.currentPeriodEnd,
  };
}
