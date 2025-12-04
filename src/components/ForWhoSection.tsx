import { useState } from "react";
import { User, Users, Building2 } from "lucide-react";

const audiences = [
  {
    id: "solo",
    icon: User,
    title: "Artisan solo",
    description: "Vous travaillez seul et gérez tout vous-même. Provia BASE simplifie vos devis, factures et relances pour vous concentrer sur votre métier.",
    benefits: ["Devis professionnels en 2 minutes", "Relances automatiques", "Suivi de trésorerie simplifié"],
  },
  {
    id: "pme",
    icon: Users,
    title: "PME BTP 3–20 personnes",
    description: "Votre équipe grandit et la coordination devient complexe. Provia BASE centralise toutes les informations pour une meilleure organisation.",
    benefits: ["Planning d'équipe partagé", "Gestion des droits utilisateurs", "Tableau de bord centralisé"],
  },
  {
    id: "multi",
    icon: Building2,
    title: "Multi-équipes / multi-chantiers",
    description: "Plusieurs équipes, plusieurs chantiers simultanés. Provia BASE vous donne une vision globale en temps réel.",
    benefits: ["Vue multi-chantiers", "Suivi par équipe et par projet", "Rapports et analyses avancées"],
  },
];

export const ForWhoSection = () => {
  const [active, setActive] = useState("pme");
  const activeAudience = audiences.find((a) => a.id === active)!;

  return (
    <section id="pour-qui" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="glow-teal top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pour <span className="text-gradient-orange">qui</span> est Provia BASE ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Que vous soyez artisan indépendant ou dirigeant d'une PME du BTP, Provia BASE s'adapte à votre réalité.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {audiences.map((audience) => (
              <button
                key={audience.id}
                onClick={() => setActive(audience.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
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
