import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  FileText, Send, UserSquare, Package, Calendar, Users, Bell, Link2,
  ClipboardList, PenTool, Clock, FileCheck, CalendarCheck, UserSearch, RefreshCw
} from "lucide-react";

const crmFeatures = [
  {
    icon: FileText,
    title: "Création de devis en quelques clics",
    description: "Créez des devis propres et professionnels en quelques secondes, envoyez-les en un clic, et suivez leur statut en temps réel."
  },
  {
    icon: Send,
    title: "Envoi de devis ultra rapide",
    description: "Vos devis partent directement au client depuis Provia BASE, sans email compliqué ni pièce jointe. Simplicité totale."
  },
  {
    icon: UserSquare,
    title: "Fiches clients propres et complètes",
    description: "Centralisez toutes vos informations clients : historique, interventions, factures, coordonnées, remarques internes."
  },
  {
    icon: Package,
    title: "Inventaire",
    description: "Gérez vos produits, matériaux, prestations et services. L'inventaire reste synchronisé avec vos devis, vos interventions et vos employés."
  },
  {
    icon: Calendar,
    title: "Planning des interventions et planning employés",
    description: "Visualisez vos journées, répartissez les missions, attribuez les tâches et ajustez votre organisation en un coup d'œil."
  },
  {
    icon: Users,
    title: "Ajout et gestion de membres dans le CRM",
    description: "Chaque membre de l'entreprise possède son propre accès. Le dirigeant contrôle tout depuis le QG."
  },
  {
    icon: Bell,
    title: "Alertes du tableau de bord",
    description: "Le tableau de bord vous remonte automatiquement les éléments urgents : interventions du jour, retards, tâches en attente, etc."
  },
  {
    icon: Link2,
    title: "Lien CRM → App employé",
    description: "Chaque action réalisée sur le terrain met à jour le CRM en temps réel. Vous suivez l'activité de votre entreprise minute par minute."
  }
];

const fieldFeatures = [
  {
    icon: ClipboardList,
    title: "Gestion complète de l'intervention",
    description: "L'employé voit la mission, suit les étapes, réalise la checklist et remplit le rapport de manière fluide."
  },
  {
    icon: PenTool,
    title: "Signature électronique",
    description: "Le client signe directement sur le téléphone de l'employé. Simple, rapide, légal."
  },
  {
    icon: Clock,
    title: "Pointage en temps réel",
    description: "Début / fin d'intervention instantanément synchronisés avec le CRM."
  },
  {
    icon: FileCheck,
    title: "Rapport d'intervention",
    description: "L'employé remplit son rapport et vous recevez toutes les informations dans le CRM automatiquement."
  },
  {
    icon: CalendarCheck,
    title: "Planning dédié",
    description: "Chaque employé consulte son planning du jour, de la semaine ou du mois."
  },
  {
    icon: UserSearch,
    title: "Historique des clients + fiches",
    description: "L'employé retrouve l'historique du client et les infos importantes avant d'arriver sur place."
  },
  {
    icon: RefreshCw,
    title: "Mise à jour en temps réel avec le CRM",
    description: "Chaque action terrain remonte immédiatement dans Provia BASE. Aucun décalage."
  }
];

const FeatureBlock = ({ 
  icon: Icon, 
  title, 
  description, 
  reversed 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  reversed: boolean;
}) => (
  <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 lg:gap-12`}>
    <div className="flex-1">
      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-base lg:text-lg">{description}</p>
    </div>
    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl glass-card flex items-center justify-center shrink-0">
      <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
    </div>
  </div>
);

const SectionDivider = () => (
  <div className="border-t border-[#dcdcdc]" />
);

const Fonctionnalites = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Toutes les <span className="text-gradient-orange">fonctionnalités</span> de Provia BASE
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Un CRM puissant pour le dirigeant, une application terrain intuitive pour les employés. Découvrez tout ce que Provia BASE peut faire pour vous.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Section CRM */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-primary">Côté bureau</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Fonctionnalités <span className="text-gradient-orange">CRM</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tout ce dont le dirigeant a besoin pour piloter son entreprise
              </p>
            </div>

            <div className="space-y-8">
              {crmFeatures.map((feature, index) => (
                <div key={index}>
                  <FeatureBlock
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    reversed={index % 2 === 1}
                  />
                  {index < crmFeatures.length - 1 && (
                    <div className="mt-8">
                      <SectionDivider />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Section App Terrain */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4 border-primary/30 bg-primary/10">
                <span className="text-sm font-semibold text-primary">Côté terrain</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Fonctionnalités <span className="text-gradient-orange">App Terrain</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tout ce dont vos employés ont besoin pour être efficaces sur le terrain
              </p>
            </div>

            <div className="space-y-8">
              {fieldFeatures.map((feature, index) => (
                <div key={index}>
                  <FeatureBlock
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    reversed={index % 2 === 0}
                  />
                  {index < fieldFeatures.length - 1 && (
                    <div className="mt-8">
                      <SectionDivider />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass-card p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Prêt à centraliser votre activité ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Découvrez Provia BASE et transformez votre façon de travailler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn-secondary">
                Réserver une démo
              </Link>
              <Link to="/#tarifs" className="btn-primary">
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fonctionnalites;
