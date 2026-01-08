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
  // Reorder plans for mobile: popular first
  const mobilePlans = [plans[1], plans[0], plans[2]];

  return (
    <section id="tarifs" className="relative py-12 sm:py-16 lg:py-32 overflow-x-clip overflow-y-visible">
      <div className="glow-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] opacity-50 sm:opacity-100" />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-2 sm:mb-4">
            <span className="sm:hidden">Tarifs <span className="text-gradient-orange">simples</span></span>
            <span className="hidden sm:inline">Un prix <span className="text-gradient-orange">clair</span>. Pour chaque personne dans votre équipe.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            <span className="sm:hidden">Par utilisateur, par mois.</span>
            <span className="hidden sm:inline">Choisissez la durée qui correspond à votre vision. Simple et transparent.</span>
          </p>
        </div>

        {/* Mobile: horizontal scroll with popular first */}
        <div className="sm:hidden -mx-5 px-5 pt-4">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide">
            {mobilePlans.map((plan) => (
              <div
                key={plan.id}
                className={`flex-shrink-0 w-[75vw] max-w-[280px] snap-center glass-card p-4 relative ${
                  plan.popular ? "border-primary/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="badge-popular whitespace-nowrap text-xs px-2 py-1">Populaire</span>
                  </div>
                )}

                <div className="text-center mb-4 pt-2">
                  <h3 className="text-base font-semibold mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-primary">{plan.subtitle}</p>
                </div>

                <div className="text-center mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-2xl font-bold ml-0.5">€</span>
                  </div>
                  <span className="text-muted-foreground text-xs">{plan.period}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {plan.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-provia-teal/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-provia-teal" />
                      </div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.signupUrl}
                  className={`w-full py-2.5 rounded-lg font-medium transition-all text-center block text-sm ${
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Commencer
                </Link>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1.5 mt-2">
            {plans.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto pt-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card-hover overflow-visible p-5 sm:p-6 lg:p-8 relative ${
                plan.popular ? "border-primary/50 md:scale-105 z-10 md:mt-2" : ""
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

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
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
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Commencer maintenant
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-muted-foreground">
          Besoin d'en parler ?{" "}
          <Link to="/demo" className="text-primary hover:underline">
            Réserver une démo
          </Link>
        </p>
      </div>
    </section>
  );
};
