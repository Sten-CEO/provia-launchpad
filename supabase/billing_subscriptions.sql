-- ============================================
-- SCRIPT SQL: Table billing_subscriptions
-- À exécuter dans Supabase Dashboard > SQL Editor
-- ============================================

-- 1. Créer la table billing_subscriptions
CREATE TABLE IF NOT EXISTS public.billing_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  stripe_subscription_item_id TEXT,
  plan TEXT CHECK (plan IN ('monthly', '12m', '24m')),
  status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'trialing', 'past_due', 'canceled', 'unpaid', 'incomplete', 'inactive')),
  quantity INT DEFAULT 1,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Index pour les recherches rapides
CREATE INDEX IF NOT EXISTS idx_billing_subscriptions_user_id ON public.billing_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_billing_subscriptions_stripe_customer_id ON public.billing_subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_billing_subscriptions_status ON public.billing_subscriptions(status);

-- 3. Activer Row Level Security (RLS)
ALTER TABLE public.billing_subscriptions ENABLE ROW LEVEL SECURITY;

-- 4. Policy : Les utilisateurs peuvent voir leur propre abonnement
CREATE POLICY "Users can view own subscription"
  ON public.billing_subscriptions
  FOR SELECT
  USING (auth.uid() = user_id);

-- 5. Policy : Les utilisateurs peuvent créer leur propre abonnement
CREATE POLICY "Users can insert own subscription"
  ON public.billing_subscriptions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 6. Policy : Les utilisateurs peuvent mettre à jour leur propre abonnement
CREATE POLICY "Users can update own subscription"
  ON public.billing_subscriptions
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 7. Policy : Service role peut tout faire (pour les webhooks)
-- Note: Le service role bypass automatiquement RLS, donc pas besoin de policy spéciale

-- 8. Trigger pour updated_at
DROP TRIGGER IF EXISTS update_billing_subscriptions_updated_at ON public.billing_subscriptions;
CREATE TRIGGER update_billing_subscriptions_updated_at
  BEFORE UPDATE ON public.billing_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Fonction helper pour vérifier si un utilisateur a un abonnement actif
-- ============================================
CREATE OR REPLACE FUNCTION public.is_subscription_active(check_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.billing_subscriptions
    WHERE user_id = check_user_id
    AND status IN ('active', 'trialing')
    AND current_period_end > NOW()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
