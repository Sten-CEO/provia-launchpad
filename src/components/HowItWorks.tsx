import { Link } from "react-router-dom";
import { UserPlus, Users, FileText, Smartphone } from "lucide-react";
import sunsetImage from "@/assets/sunset-vision.jpeg";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Créez votre espace Provia BASE",
    description: "Inscrivez-vous en quelques clics et configurez votre entreprise.",
  },
  {
    icon: Users,
    number: "02",
    title: "Invitez vos employés",
    description: "Le CRM leur crée automatiquement un accès terrain personnalisé.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Préparez vos devis, factures et clients",
    description: "Centralisez toutes vos informations métier en un seul endroit.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Suivez vos employés sur Provia FIELD",
    description: "Vos équipes terrain ont leur app, vous avez la visibilité complète.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative min-h-[100dvh] sm:min-h-0 py-10 sm:py-16 lg:py-32 overflow-hidden flex flex-col justify-center max-sm:px-5">
      {/* Subtle background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-cover bg-bottom opacity-0 sm:opacity-10"
        style={{ backgroundImage: `url(${sunsetImage})` }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      {/* Glow - subtle on mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[600px] h-[100px] sm:h-[300px] bg-provia-orange/5 sm:bg-provia-orange/10 rounded-full blur-[50px] sm:blur-[100px]" />

      <div className="container mx-auto px-0 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-[1.5rem] sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-3 sm:mb-4 tracking-tight">
            Comment ça <span className="text-gradient-orange">marche</span> ?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            <span className="sm:hidden">Opérationnel en quelques minutes</span>
            <span className="hidden sm:inline">Provia BASE est conçu pour être opérationnel en quelques minutes, pas en quelques jours.</span>
          </p>
        </div>

        {/* Mobile: Clean vertical timeline */}
        <div className="sm:hidden">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{step.number}</span>
                </div>
                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-sm mb-1 leading-snug">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Desktop: grid */}
          <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card-hover p-4 sm:p-6 text-center h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 relative z-10">
                    <span className="text-primary font-bold text-sm sm:text-base">{step.number}</span>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-muted/30 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                </div>
                {/* Arrow (Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA - simplified on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-16">
          <a href="#tarifs" className="btn-primary text-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Commencer
          </a>
          <Link to="/demo" className="btn-secondary text-center text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-4 max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
            Voir une démo
          </Link>
        </div>
      </div>
    </section>
  );
};
