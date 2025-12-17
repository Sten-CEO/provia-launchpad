import { supabase } from '@/lib/supabase';
import type { SubscriptionPlan } from './auth';

export interface BillingStatus {
  hasPaid: boolean;
  plan: SubscriptionPlan | null;
  activatedAt: string | null;
}

export interface PaymentResult {
  success: boolean;
  error?: string;
}

/**
 * Récupère le statut de paiement de l'utilisateur connecté
 */
export async function getBillingStatus(): Promise<BillingStatus | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    const { data: company, error } = await supabase
      .from('companies')
      .select('has_paid, subscription_plan, activated_at')
      .eq('owner_id', user.id)
      .single();

    if (error || !company) {
      console.warn('Could not fetch billing status:', error?.message);
      return {
        hasPaid: false,
        plan: null,
        activatedAt: null,
      };
    }

    return {
      hasPaid: company.has_paid || false,
      plan: company.subscription_plan as SubscriptionPlan,
      activatedAt: company.activated_at,
    };
  } catch (error) {
    console.error('Error fetching billing status:', error);
    return null;
  }
}

/**
 * Simule un paiement réussi et met à jour le statut dans Supabase
 */
export async function simulatePayment(plan: SubscriptionPlan): Promise<PaymentResult> {
  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return {
        success: false,
        error: 'Vous devez être connecté pour effectuer un paiement.',
      };
    }

    // Simuler un délai de traitement (1-2 secondes)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mettre à jour le statut de paiement dans la table companies
    const { error } = await supabase
      .from('companies')
      .update({
        has_paid: true,
        subscription_status: 'active',
        subscription_plan: plan,
        activated_at: new Date().toISOString(),
      })
      .eq('owner_id', user.id);

    if (error) {
      console.error('Payment update failed:', error);
      return {
        success: false,
        error: 'Erreur lors de la validation du paiement. Veuillez réessayer.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Unexpected payment error:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue. Veuillez réessayer.',
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
