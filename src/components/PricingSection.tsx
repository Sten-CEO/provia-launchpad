import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    id: "monthly",
    name: "Mensuel",
    subtitle: "Sans engagement",
    price: "31,99",
    period: "/utilisateur/mois",
    popular: false,
    signupUrl: "/mensuel",
    features: [
      "Toutes les fonctionnalités Provia BASE",
      "Application terrain Provia FIELD",
      "Résiliable à tout moment",
      "Support par email",
    ],
  },
  {
    id: "yearly",
    name: "Engagement 1 an",
    subtitle: "Économisez 12%",
    price: "28",
    period: "/utilisateur/mois",
    popular: true,
    signupUrl: "/engagement-1-an",
    features: [
      "Toutes les fonctionnalités Provia BASE",
      "Application terrain Provia FIELD",
      "Économisez 12% par rapport au mensuel",
      "Support prioritaire",
    ],
  },
  {
    id: "biennial",
    name: "Engagement 2 ans",
    subtitle: "Économisez 25%",
    price: "24",
    period: "/utilisateur/mois",
    popular: false,
    signupUrl: "/engagement-2-ans",
    features: [
      "Toutes les fonctionnalités Provia BASE",
      "Application terrain Provia FIELD",
      "Économisez 25% par rapport au mensuel",
      "Support VIP dédié",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="tarifs" className="relative py-20 lg:py-32 overflow-x-clip overflow-y-visible">
      <div className="glow-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Un prix <span className="text-gradient-orange">clair</span>. Pour chaque personne dans votre équipe.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choisissez la durée qui correspond à votre vision. Simple et transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card-hover overflow-visible p-6 lg:p-8 relative ${
                plan.popular ? "border-primary/50 scale-105 z-10 mt-2" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="badge-popular whitespace-nowrap">Le plus populaire</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-primary">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl lg:text-4xl font-bold">{plan.price}</span>
                  <span className="text-3xl lg:text-4xl font-bold ml-1">€</span>
                </div>
                <span className="text-muted-foreground text-sm block">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-provia-teal/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-provia-teal" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.signupUrl}
                className={`w-full py-3 rounded-xl font-semibold transition-all text-center block ${
                  plan.popular
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                Commencer maintenant
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          Besoin d'en parler ?{" "}
          <Link to="/demo" className="text-primary hover:underline">
            Réserver une démo
          </Link>
        </p>
      </div>
    </section>
  );
};
