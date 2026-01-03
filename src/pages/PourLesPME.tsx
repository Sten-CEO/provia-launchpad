import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Building2,
  Users,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Settings,
  Smartphone,
  Shield,
  Network,
  Zap
} from "lucide-react";

const PourLesPME = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour PME - Pilotez votre croissance efficacement"
        description="Provia BASE est le logiciel de gestion pour PME qui centralise équipes, clients, devis et factures. Gagnez en productivité et pilotez votre activité avec précision."
        keywords="logiciel gestion PME, logiciel PME, gestion moyenne entreprise, ERP PME, CRM PME, gestion équipes PME"
        canonical="/pour-les-pme"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Logiciel de gestion pour PME</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de gestion pour <span className="text-gradient-orange">PME</span> avec équipes terrain
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Votre entreprise grandit et la complexité augmente ? Provia BASE vous offre les outils pour coordonner vos équipes, suivre votre activité et prendre les bonnes décisions. Un logiciel de gestion PME complet, sans la lourdeur des ERP traditionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/fonctionnalites"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Voir les fonctionnalités
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
      </div>

      {/* Challenges Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 lg:p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Network className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Les défis de la <span className="text-gradient-orange">croissance</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                À mesure que votre PME se développe, les processus qui fonctionnaient "à la main" deviennent des freins. La coordination entre services, le suivi des projets et la visibilité sur les performances deviennent critiques.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Informations dispersées entre plusieurs outils",
                  "Difficultés à coordonner plusieurs équipes",
                  "Manque de visibilité sur la rentabilité par projet",
                  "Temps perdu en réunions de synchronisation",
                  "Retards dans la facturation et le suivi des paiements",
                  "Difficultés à déléguer sans perdre le contrôle"
                ].map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Une <span className="text-gradient-orange">plateforme unifiée</span> pour toute votre activité
              </h2>
              <p className="text-muted-foreground text-lg">
                Provia BASE centralise toutes les informations dont vous avez besoin pour piloter votre PME efficacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Gestion multi-équipes",
                  description: "Créez des équipes, assignez des responsables, suivez les interventions de chaque collaborateur avec des droits d'accès adaptés."
                },
                {
                  icon: BarChart3,
                  title: "Tableaux de bord avancés",
                  description: "Visualisez en temps réel le chiffre d'affaires, les devis en cours, les interventions planifiées et les indicateurs clés de performance."
                },
                {
                  icon: Settings,
                  title: "Workflows personnalisables",
                  description: "Adaptez Provia BASE à vos processus métier : statuts personnalisés, champs additionnels, modèles de documents."
                },
                {
                  icon: Smartphone,
                  title: "Application mobile terrain",
                  description: "Vos techniciens accèdent aux missions, consultent les fiches clients et remontent les informations depuis le terrain."
                },
                {
                  icon: Shield,
                  title: "Données sécurisées",
                  description: "Hébergement sécurisé, sauvegardes automatiques, gestion fine des droits utilisateurs pour protéger vos informations."
                },
                {
                  icon: Zap,
                  title: "Intégrations possibles",
                  description: "Connectez Provia BASE à vos outils existants : agenda, email, CRM pour un écosystème cohérent."
                }
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les bénéfices pour votre <span className="text-gradient-orange">PME</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Vision 360° de votre activité en temps réel",
                  "Coordination fluide entre bureau et équipes terrain",
                  "Réduction des erreurs grâce à la centralisation",
                  "Accélération du cycle devis → facture → paiement",
                  "Décisions éclairées grâce aux indicateurs de performance",
                  "Scalabilité : l'outil grandit avec votre entreprise",
                  "Déploiement rapide sans projet informatique lourd",
                  "Accompagnement personnalisé pour votre mise en place"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-provia-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Adapté à tous les <span className="text-gradient-orange">secteurs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Bâtiment & travaux",
                  examples: "Entreprises générales, corps d'état, maintenance immobilière"
                },
                {
                  title: "Services techniques",
                  examples: "Maintenance, dépannage, installation, SAV"
                },
                {
                  title: "Prestations intellectuelles",
                  examples: "Conseil, formation, expertise, bureaux d'études"
                }
              ].map((sector, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{sector.title}</h3>
                  <p className="text-muted-foreground text-sm">{sector.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Donnez à votre <span className="text-gradient-orange">PME</span> les outils de sa croissance
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut transformer la gestion de votre entreprise. Démonstration personnalisée et conseil sur mesure inclus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/#tarifs"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourLesPME;
