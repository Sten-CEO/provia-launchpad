import { FileText, Bell, Calendar, Users, Package, Smartphone } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Devis & Factures",
    description: "Créez des devis professionnels, transformez-les en factures, envoyez par email et suivez les statuts.",
    items: ["Création rapide", "Devis → Facture en 1 clic", "Envoi email intégré", "Suivi des statuts"],
  },
  {
    icon: Bell,
    title: "Relances & Paiements",
    description: "Automatisez vos relances clients et gardez un œil sur votre trésorerie.",
    items: ["Relances programmées", "Suivi des impayés", "Indicateurs de trésorerie", "Historique complet"],
  },
  {
    icon: Calendar,
    title: "Planning Chantiers",
    description: "Organisez vos interventions et dispatchez vos équipes efficacement.",
    items: ["Vue jour/semaine/mois", "Dispatch des équipes", "Notifications", "Synchronisation mobile"],
  },
  {
    icon: Users,
    title: "Gestion Clients",
    description: "Centralisez toutes les informations clients et leur historique d'interventions.",
    items: ["Fiches clients complètes", "Historique interventions", "Documents associés", "Notes et suivis"],
  },
  {
    icon: Package,
    title: "Articles & TVA",
    description: "Gérez vos bibliothèques d'articles, prix et taux de TVA simplement.",
    items: ["Bibliothèque d'articles", "Gestion des prix", "Multi-taux TVA", "Import/Export"],
  },
  {
    icon: Smartphone,
    title: "Appli Mobile Terrain",
    description: "Accédez à Provia BASE depuis le chantier, même hors connexion.",
    badge: "Bientôt",
    items: ["Accès mobile", "Mode hors-ligne", "Photos chantier", "Signature client"],
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="glow-orange top-0 right-0" />
      <div className="glow-green bottom-0 left-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tout ce dont vous avez{" "}
            <span className="text-gradient-orange">besoin</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un logiciel complet pensé pour simplifier le quotidien des artisans et entreprises du BTP.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                {feature.badge && (
                  <span className="badge-soon">{feature.badge}</span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
