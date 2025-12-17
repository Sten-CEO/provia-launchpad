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
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="glow-orange top-0 left-1/4 w-[600px] h-[600px]" />
      <div className="glow-teal bottom-0 right-1/4 w-[500px] h-[500px]" />

      <div className="w-full max-w-4xl relative z-10">
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-10">
            <img src={proviaLogo} alt="Provia" className="h-10 mx-auto mb-6" />

            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-orange-500" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Abonnement requis
            </h1>

            <p className="text-muted-foreground max-w-lg mx-auto">
              Pour accéder à Provia BASE et à toutes ses fonctionnalités,
              vous devez souscrire à un abonnement.
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3 max-w-lg mx-auto">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-6 rounded-xl border ${
                  plan.popular
                    ? "border-primary bg-primary/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Le plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-provia-teal" />
                    Accès complet au CRM
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-provia-teal" />
                    Support personnalisé
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-provia-teal" />
                    Migration des données incluse
                  </li>
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={isLoading !== null}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "btn-primary"
                      : "border border-white/20 hover:bg-white/5"
                  } disabled:opacity-50`}
                >
                  {isLoading === plan.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Chargement...
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
