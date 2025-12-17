-- ============================================
-- MIGRATION: Ajouter les colonnes de facturation
-- À exécuter dans Supabase Dashboard > SQL Editor
-- ============================================

-- 1. Ajouter la colonne has_paid (false par défaut)
ALTER TABLE public.companies
ADD COLUMN IF NOT EXISTS has_paid BOOLEAN NOT NULL DEFAULT false;

-- 2. Ajouter la colonne activated_at (null par défaut, rempli au moment du paiement)
ALTER TABLE public.companies
ADD COLUMN IF NOT EXISTS activated_at TIMESTAMPTZ;

-- 3. Créer un index sur has_paid pour les requêtes de filtrage
CREATE INDEX IF NOT EXISTS idx_companies_has_paid ON public.companies(has_paid);

-- ============================================
-- VÉRIFICATION
-- ============================================
-- Après exécution, vérifiez que les colonnes existent :
-- SELECT column_name, data_type, is_nullable
-- FROM information_schema.columns
-- WHERE table_name = 'companies';
