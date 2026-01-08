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
    title: "Logiciel devis facture intégré",
    description: "Créez des devis professionnels en quelques clics et transformez-les en factures automatiquement. Suivez leur statut en temps réel depuis votre tableau de bord."
  },
  {
    icon: Send,
    title: "Envoi de devis en un clic",
    description: "Vos devis partent directement au client depuis le logiciel de gestion, sans manipulation complexe. Signature électronique incluse."
  },
  {
    icon: UserSquare,
    title: "Gestion clients centralisée",
    description: "Centralisez toutes vos informations clients au même endroit : historique, interventions, factures, coordonnées et remarques internes."
  },
  {
    icon: Package,
    title: "Inventaire et catalogue",
    description: "Gérez vos produits, matériaux, prestations et services. L'inventaire reste synchronisé avec vos devis et vos interventions."
  },
  {
    icon: Calendar,
    title: "Planning des interventions",
    description: "Visualisez vos journées, répartissez les missions entre vos équipes et ajustez votre organisation en un coup d'œil."
  },
  {
    icon: Users,
    title: "Gestion équipe complète",
    description: "Chaque membre de l'entreprise possède son propre accès. Le dirigeant contrôle les droits et suit l'activité de chacun."
  },
  {
    icon: Bell,
    title: "Tableau de bord avec alertes",
    description: "Votre tableau de bord remonte automatiquement les éléments urgents : interventions du jour, relances clients, tâches en attente."
  },
  {
    icon: Link2,
    title: "Synchronisation bureau ↔ terrain",
    description: "Chaque action réalisée sur le terrain met à jour le logiciel de gestion en temps réel. Vous suivez votre entreprise minute par minute."
  }
];

const fieldFeatures = [
  {
    icon: ClipboardList,
    title: "Suivi complet de l'intervention",
    description: "L'employé voit sa mission sur l'application mobile intervention, suit les étapes et remplit son rapport de manière fluide."
  },
  {
    icon: PenTool,
    title: "Signature électronique sur mobile",
    description: "Le client signe directement sur le téléphone de l'employé. Simple, rapide et valide juridiquement."
  },
  {
    icon: Clock,
    title: "Pointage en temps réel",
    description: "Début et fin d'intervention automatiquement synchronisés avec le logiciel de gestion au bureau."
  },
  {
    icon: FileCheck,
    title: "Rapport d'intervention automatique",
    description: "L'employé remplit son rapport depuis l'application mobile terrain. Vous recevez les informations instantanément."
  },
  {
    icon: CalendarCheck,
    title: "Planning dédié par employé",
    description: "Chaque membre de l'équipe consulte son planning du jour, de la semaine ou du mois depuis son téléphone."
  },
  {
    icon: UserSearch,
    title: "Accès aux fiches clients",
    description: "L'employé retrouve l'historique du client et les informations importantes avant d'arriver sur place."
  },
  {
    icon: RefreshCw,
    title: "Synchronisation temps réel",
    description: "Chaque action sur le terrain remonte immédiatement dans le logiciel de gestion. Aucun décalage."
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
  <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-4 sm:gap-6 lg:gap-12`}>
    <div className="flex-1">
      <h3 className="text-base sm:text-xl lg:text-2xl font-semibold sm:font-bold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">{description}</p>
    </div>
    <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center shrink-0">
      <Icon className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
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
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold mb-4 sm:mb-6">
              <span className="sm:hidden">Fonctionnalités <span className="text-gradient-orange">Provia BASE</span></span>
              <span className="hidden sm:inline">Fonctionnalités du <span className="text-gradient-orange">logiciel de gestion</span> Provia BASE</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground">
              <span className="sm:hidden">Bureau + terrain, tout est synchronisé.</span>
              <span className="hidden sm:inline">Un outil de centralisation complet pour le dirigeant et une application mobile terrain pour les employés. Gestion clients, devis, factures, équipes : tout au même endroit.</span>
            </p>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Section CRM */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-primary">Côté bureau</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-3 sm:mb-4">
                <span className="sm:hidden">Côté <span className="text-gradient-orange">bureau</span></span>
                <span className="hidden sm:inline">Logiciel gestion entreprise : <span className="text-gradient-orange">côté bureau</span></span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-lg">
                <span className="sm:hidden">Pilotez votre entreprise depuis un seul endroit.</span>
                <span className="hidden sm:inline">Devis, factures, gestion clients et équipes : tout ce dont le dirigeant a besoin pour piloter son entreprise</span>
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {crmFeatures.map((feature, index) => (
                <div key={index}>
                  <FeatureBlock
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    reversed={index % 2 === 1}
                  />
                  {index < crmFeatures.length - 1 && (
                    <div className="mt-6 sm:mt-8">
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
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 border-primary/30 bg-primary/10">
                <span className="text-xs sm:text-sm font-semibold text-primary">Côté terrain</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-3 sm:mb-4">
                <span className="sm:hidden">App <span className="text-gradient-orange">terrain</span></span>
                <span className="hidden sm:inline">Application mobile <span className="text-gradient-orange">intervention</span></span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-lg">
                <span className="sm:hidden">Planning, rapports, synchronisation temps réel.</span>
                <span className="hidden sm:inline">Une application mobile terrain pour vos employés : planning, interventions, rapports et synchronisation en temps réel</span>
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {fieldFeatures.map((feature, index) => (
                <div key={index}>
                  <FeatureBlock
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    reversed={index % 2 === 0}
                  />
                  {index < fieldFeatures.length - 1 && (
                    <div className="mt-6 sm:mt-8">
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
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="glass-card p-5 sm:p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-3 sm:mb-4">
              <span className="sm:hidden">Prêt à centraliser ?</span>
              <span className="hidden sm:inline">Prêt à centraliser votre gestion d'entreprise ?</span>
            </h2>
            <p className="text-muted-foreground mb-5 sm:mb-8 text-sm sm:text-base">
              <span className="sm:hidden">Devis, factures, clients, équipes en un seul outil.</span>
              <span className="hidden sm:inline">Testez Provia BASE : logiciel devis facture, gestion clients, équipes et application mobile terrain réunis en un seul outil.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/demo" className="btn-secondary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">
                Réserver une démo
              </Link>
              <Link to="/#tarifs" className="btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base">
                Commencer
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
