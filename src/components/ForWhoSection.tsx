import { useState } from "react";
import { Link } from "react-router-dom";
import { Hammer, Building, Briefcase } from "lucide-react";

const audiences = [
  {
    id: "tpe-artisans",
    icon: Hammer,
    title: "TPE Artisans",
    description: "Vous travaillez seul ou avec une petite équipe. Ce logiciel de gestion vous aide à créer vos devis et factures, suivre vos interventions et organiser votre activité simplement.",
    benefits: ["Logiciel devis facture intégré", "Suivi des interventions", "Gestion quotidienne simplifiée"],
  },
  {
    id: "pme-artisans",
    icon: Building,
    title: "PME Artisans",
    description: "Vous avez plusieurs équipes terrain et avez besoin d'un outil de centralisation fiable. Coordonnez les missions, suivez vos employés en temps réel grâce à l'application mobile terrain.",
    benefits: ["Gestion équipe complète", "Application mobile intervention", "Vision globale de l'activité"],
  },
  {
    id: "entreprises-services",
    icon: Briefcase,
    title: "Entreprises de services (TPE – PME)",
    description: "Vous intervenez régulièrement chez vos clients. Ce logiciel gestion entreprise centralise vos clients, devis, factures et équipes dans un seul espace accessible partout.",
    benefits: ["Gestion clients centralisée", "Devis et factures en un clic", "Équipes terrain coordonnées"],
  },
];

export const ForWhoSection = () => {
  const [active, setActive] = useState("tpe-artisans");
  const activeAudience = audiences.find((a) => a.id === active)!;

  return (
    <section id="pour-qui" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="glow-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Un logiciel de gestion pensé pour <span className="text-gradient-orange">vous</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Provia BASE s'adresse aux dirigeants de TPE et PME qui gèrent des équipes terrain. Artisans, entreprises de services, professionnels du bâtiment : si vous avez besoin d'un outil pour centraliser votre activité, du bureau jusqu'au terrain, vous êtes au bon endroit.
          </p>
          <Link
            to="/pour-les-artisans"
            className="inline-block mt-4 text-primary hover:underline font-medium"
          >
            Plus de détails
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide snap-x snap-mandatory">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActive(audience.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl whitespace-nowrap transition-all snap-start ${
                  active === audience.id
                    ? "glass-card border-primary/50 bg-primary/5"
                    : "hover:bg-muted/30"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  active === audience.id ? "bg-primary/20" : "bg-muted/30"
                }`}>
                  <audience.icon className={`w-5 h-5 ${active === audience.id ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <span className={`font-medium ${active === audience.id ? "text-foreground" : "text-muted-foreground"}`}>
                  {audience.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="glass-card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <activeAudience.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{activeAudience.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg">
                {activeAudience.description}
              </p>

              <ul className="space-y-3">
                {activeAudience.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-provia-teal/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-provia-teal" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
