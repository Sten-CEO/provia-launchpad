import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { createCheckoutSession, type StripePlan } from "@/services/billing";

const plans: { id: StripePlan; name: string; price: string; description: string; popular?: boolean }[] = [
  {
    id: "monthly",
    name: "Mensuel",
    price: "31,99 €",
    description: "par utilisateur/mois • Sans engagement",
  },
  {
    id: "12m",
    name: "12 mois",
    price: "28 €",
    description: "par utilisateur/mois • Économisez 12%",
    popular: true,
  },
  {
    id: "24m",
    name: "24 mois",
    price: "24 €",
    description: "par utilisateur/mois • Économisez 25%",
  },
];

const BillingRequired = () => {
  const [isLoading, setIsLoading] = useState<StripePlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (plan: StripePlan) => {
    setIsLoading(plan);
    setError(null);

    const result = await createCheckoutSession(plan);

    if (result.success && result.url) {
      window.location.href = result.url;
    } else {
      setError(result.error || "Une erreur est survenue.");
      setIsLoading(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px] opacity-40 sm:opacity-100" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px] opacity-40 sm:opacity-100" />

      <div className="w-full max-w-4xl relative z-10">
        <div className="glass-card p-5 sm:p-8 md:p-12">
          <div className="text-center mb-8 sm:mb-10">
            <img src={proviaLogo} alt="Provia" className="h-10 sm:h-12 mx-auto mb-6" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold sm:font-bold mb-4">
              Abonnement requis
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              Pour accéder à Provia BASE et à toutes ses fonctionnalités,
              vous devez souscrire à un abonnement.
            </p>
          </div>

          {error && (
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2 sm:gap-3 max-w-lg mx-auto">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-4 sm:p-6 rounded-xl border ${
                  plan.popular
                    ? "border-primary bg-primary/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2">
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" />
                    Accès complet au CRM
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" />
                    Support personnalisé
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" />
                    Migration des données incluse
                  </li>
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isLoading !== null}
                  className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "btn-primary"
                      : "border border-white/20 hover:bg-white/5"
                  } disabled:opacity-50`}
                >
                  {isLoading === plan.id ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                      <span className="text-xs sm:text-sm">Chargement...</span>
                    </>
                  ) : (
                    "S'abonner"
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingRequired;
