-- ============================================
-- SCRIPT SQL: Créer la table user_roles
-- À exécuter dans Supabase Dashboard > SQL Editor
-- IMPORTANT: Exécuter ce script pour que le CRM fonctionne
-- ============================================

-- 1. Créer la table user_roles
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'owner' CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, company_id)
);

-- 2. Index pour les recherches rapides
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON public.user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_company_id ON public.user_roles(company_id);

-- 3. Activer Row Level Security (RLS)
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. Policy : Les utilisateurs peuvent voir leurs propres rôles
CREATE POLICY "Users can view own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- 5. Policy : Les utilisateurs peuvent créer leur propre rôle
CREATE POLICY "Users can insert own role"
  ON public.user_roles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 6. Policy : Les utilisateurs peuvent mettre à jour leur propre rôle
CREATE POLICY "Users can update own role"
  ON public.user_roles
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 7. Trigger pour updated_at
DROP TRIGGER IF EXISTS update_user_roles_updated_at ON public.user_roles;
CREATE TRIGGER update_user_roles_updated_at
  BEFORE UPDATE ON public.user_roles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 8. MIGRATION: Ajouter les rôles manquants pour les utilisateurs existants
-- Ceci crée une entrée user_roles pour chaque company existante
-- ============================================
INSERT INTO public.user_roles (user_id, company_id, role, created_at)
SELECT
  c.owner_id,
  c.id,
  'owner',
  c.created_at
FROM public.companies c
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles ur
  WHERE ur.user_id = c.owner_id AND ur.company_id = c.id
)
ON CONFLICT (user_id, company_id) DO NOTHING;

-- ============================================
-- VÉRIFICATION
-- ============================================
-- SELECT * FROM public.user_roles;
