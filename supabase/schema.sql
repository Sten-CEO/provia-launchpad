-- ============================================
-- SCRIPT SQL POUR PROVIA BASE
-- À exécuter dans Supabase Dashboard > SQL Editor
-- ============================================

-- 1. Créer la table companies
-- Cette table stocke les informations de subscription des utilisateurs
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  owner_email TEXT NOT NULL,
  company_name TEXT,
  subscription_plan TEXT NOT NULL CHECK (subscription_plan IN ('mensuel', 'annuel', 'biennal')),
  subscription_status TEXT NOT NULL DEFAULT 'pending' CHECK (subscription_status IN ('pending', 'active', 'cancelled', 'expired')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Créer un index sur owner_id pour les recherches rapides
CREATE INDEX IF NOT EXISTS idx_companies_owner_id ON public.companies(owner_id);

-- 3. Créer un index sur subscription_status pour filtrer par statut
CREATE INDEX IF NOT EXISTS idx_companies_subscription_status ON public.companies(subscription_status);

-- 4. Activer Row Level Security (RLS)
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;

-- 5. Policy : Les utilisateurs peuvent voir leur propre company
CREATE POLICY "Users can view own company"
  ON public.companies
  FOR SELECT
  USING (auth.uid() = owner_id);

-- 6. Policy : Les utilisateurs peuvent créer leur company lors de l'inscription
-- Note: Cette policy permet l'insertion même si l'utilisateur vient juste d'être créé
CREATE POLICY "Users can insert own company"
  ON public.companies
  FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

-- 7. Policy : Les utilisateurs peuvent mettre à jour leur propre company
CREATE POLICY "Users can update own company"
  ON public.companies
  FOR UPDATE
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- 8. Fonction pour mettre à jour automatiquement updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 9. Trigger pour updated_at
DROP TRIGGER IF EXISTS update_companies_updated_at ON public.companies;
CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON public.companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ALTERNATIVE: Création automatique de company via Database Function
-- Cette fonction peut être appelée par un Database Webhook après signup
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.companies (owner_id, owner_email, subscription_plan, subscription_status)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'plan', 'mensuel'),
    'pending'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Ce trigger crée automatiquement une company quand un nouvel utilisateur s'inscrit
-- Décommentez si vous voulez que la company soit créée automatiquement par Supabase
-- DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
-- CREATE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
