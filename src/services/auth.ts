import { supabase } from '@/lib/supabase';

export type SubscriptionPlan = 'mensuel' | 'annuel' | 'biennal';

export interface SignupResult {
  success: boolean;
  error?: string;
  userId?: string;
  emailConfirmationRequired?: boolean;
}

interface SignupParams {
  email: string;
  password: string;
  plan: SubscriptionPlan;
}

/**
 * Traduit les erreurs Supabase en messages français compréhensibles
 */
function translateSupabaseError(error: string): string {
  const errorMap: Record<string, string> = {
    'User already registered': 'Un compte existe déjà avec cette adresse email.',
    'Invalid login credentials': 'Email ou mot de passe incorrect.',
    'Email not confirmed': 'Veuillez confirmer votre email avant de vous connecter.',
    'Password should be at least 6 characters': 'Le mot de passe doit contenir au moins 6 caractères.',
    'Unable to validate email address: invalid format': 'Format d\'email invalide.',
    'Signup requires a valid password': 'Veuillez entrer un mot de passe valide.',
    'Email rate limit exceeded': 'Trop de tentatives. Veuillez réessayer dans quelques minutes.',
    'For security purposes, you can only request this once every 60 seconds':
      'Pour des raisons de sécurité, veuillez attendre 60 secondes avant de réessayer.',
  };

  // Cherche une correspondance partielle si pas de correspondance exacte
  for (const [key, value] of Object.entries(errorMap)) {
    if (error.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }

  // Message par défaut si l'erreur n'est pas reconnue
  console.error('Supabase signup error:', error);
  return 'Une erreur est survenue lors de la création du compte. Veuillez réessayer.';
}

/**
 * Crée un nouveau compte utilisateur et la company associée
 */
export async function signUp({ email, password, plan }: SignupParams): Promise<SignupResult> {
  try {
    // Vérification des variables d'environnement
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      console.error('Supabase environment variables are not configured');
      return {
        success: false,
        error: 'Configuration Supabase manquante. Contactez le support.',
      };
    }

    // 1. Création de l'utilisateur dans Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          plan: plan,
          subscription_status: 'pending',
        },
      },
    });

    if (authError) {
      return {
        success: false,
        error: translateSupabaseError(authError.message),
      };
    }

    if (!authData.user) {
      return {
        success: false,
        error: 'Erreur lors de la création du compte. Veuillez réessayer.',
      };
    }

    // 2. Vérifier si l'email nécessite confirmation
    // Dans Supabase, si email confirmation est activé, user.identities sera vide
    const emailConfirmationRequired = authData.user.identities?.length === 0;

    // 3. Création de la company associée
    // Note: Cette opération nécessite que la table 'companies' existe dans Supabase
    // et que les RLS permettent l'insertion après signup
    const { data: companyData, error: companyError } = await supabase.from('companies').insert({
      owner_id: authData.user.id,
      owner_email: email,
      subscription_plan: plan,
      subscription_status: 'pending',
      created_at: new Date().toISOString(),
    }).select('id').single();

    if (companyError) {
      // Log l'erreur mais ne bloque pas - la company peut être créée plus tard
      console.warn('Company creation failed (table may not exist yet):', companyError.message);
    }

    // 4. Création du rôle utilisateur (nécessaire pour le CRM)
    // Le user est 'owner' de sa company par défaut
    const { error: roleError } = await supabase.from('user_roles').insert({
      user_id: authData.user.id,
      company_id: companyData?.id || null,
      role: 'owner',
      created_at: new Date().toISOString(),
    });

    if (roleError) {
      console.warn('User role creation failed:', roleError.message);
    }

    return {
      success: true,
      userId: authData.user.id,
      emailConfirmationRequired,
    };

  } catch (error) {
    console.error('Unexpected signup error:', error);
    return {
      success: false,
      error: 'Une erreur inattendue est survenue. Veuillez réessayer.',
    };
  }
}

/**
 * Déconnecte l'utilisateur actuel
 */
export async function signOut(): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, error: 'Erreur lors de la déconnexion.' };
  }
}
