import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2, CreditCard, Shield, CheckCircle, AlertCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { simulatePayment, isAuthenticated } from "@/services/billing";
import type { SubscriptionPlan } from "@/services/auth";

const planDetails: Record<SubscriptionPlan, { name: string; price: string; description: string }> = {
  mensuel: {
    name: "Pack Mensuel",
    price: "31,99 €",
    description: "par utilisateur/mois • Sans engagement",
  },
  annuel: {
    name: "Engagement 1 an",
    price: "28 €",
    description: "par utilisateur/mois • Économisez 12%",
  },
  biennal: {
    name: "Engagement 2 ans",
    price: "24 €",
    description: "par utilisateur/mois • Économisez 25%",
  },
};

const CheckoutSimulated = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") as SubscriptionPlan | null;

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const plan = planParam && planDetails[planParam] ? planParam : "mensuel";
  const currentPlan = planDetails[plan];

  // Vérifier l'authentification au chargement
  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        // Rediriger vers la page de signup correspondante
        const signupRoutes: Record<SubscriptionPlan, string> = {
          mensuel: "/mensuel",
          annuel: "/engagement-1-an",
          biennal: "/engagement-2-ans",
        };
        navigate(signupRoutes[plan]);
        return;
      }
      setIsCheckingAuth(false);
    };
    checkAuth();
  }, [navigate, plan]);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    const result = await simulatePayment(plan);

    if (result.success) {
      navigate("/checkout/merci");
    } else {
      setError(result.error || "Une erreur est survenue.");
      setIsProcessing(false);
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px]" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px]" />

      <div className="w-full max-w-lg relative z-10">
        <Link
          to="/#tarifs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux tarifs
        </Link>

        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <img src={proviaLogo} alt="Provia" className="h-10 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Finaliser votre abonnement</h1>
            <p className="text-muted-foreground">
              Plus qu'une étape pour accéder à Provia BASE
            </p>
          </div>

          {/* Résumé de la commande */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Récapitulatif</h2>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-medium text-lg">{currentPlan.name}</p>
                <p className="text-sm text-muted-foreground">{currentPlan.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{currentPlan.price}</p>
                <p className="text-xs text-muted-foreground">/utilisateur/mois</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total aujourd'hui</span>
                <span className="text-xl font-bold">{currentPlan.price}</span>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0" />
              <span>Accès complet à toutes les fonctionnalités</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0" />
              <span>Migration de vos données incluse</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle className="w-5 h-5 text-provia-teal flex-shrink-0" />
              <span>Support personnalisé par email</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* Bouton de paiement */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="btn-primary w-full py-4 rounded-xl font-semibold text-lg disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                Payer {currentPlan.price}
              </>
            )}
          </button>

          {/* Sécurité */}
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Paiement sécurisé et crypté</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSimulated;
