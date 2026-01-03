import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Briefcase,
  Target,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Calendar,
  ClipboardList,
  RefreshCw,
  MessageSquare,
  History
} from "lucide-react";

const PourLesEntreprisesDeServices = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour entreprises de services - Optimisez vos interventions"
        description="Provia BASE est le logiciel de gestion pour entreprises de services : gestion clients, planning interventions, devis, factures. Optimisez chaque prestation chez vos clients."
        keywords="logiciel entreprise services, gestion interventions, logiciel prestation services, CRM services, planning interventions, suivi clients"
        canonical="/pour-les-entreprises-de-services"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Logiciel pour entreprises de services</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de gestion pour <span className="text-gradient-orange">entreprises de services</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Maintenance, dépannage, installation, SAV... Votre métier vous amène régulièrement chez vos clients. Provia BASE vous aide à planifier, suivre et facturer vos prestations de services avec une efficacité maximale.
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

      {/* Problem Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 lg:p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Les enjeux des <span className="text-gradient-orange">entreprises de services</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Quand votre activité repose sur des interventions chez le client, la qualité de votre organisation fait toute la différence. Chaque détail compte : historique du client, pièces à prévoir, temps de trajet, facturation rapide...
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Difficultés à retrouver l'historique d'un client",
                  "Interventions mal préparées (pièces manquantes...)",
                  "Planning difficile à optimiser",
                  "Retours terrain non centralisés",
                  "Délais de facturation trop longs",
                  "Clients qui doivent répéter leur problème"
                ].map((problem, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg">
                    <span className="text-destructive font-bold">✗</span>
                    <span className="text-foreground">{problem}</span>
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
                Une <span className="text-gradient-orange">solution complète</span> pour les métiers du service
              </h2>
              <p className="text-muted-foreground text-lg">
                Provia BASE couvre l'intégralité du cycle de vie de vos interventions, de la demande initiale à la facturation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: UserCheck,
                  title: "Fiche client complète",
                  description: "Historique des interventions, équipements installés, contrats en cours, préférences... Tout est accessible en un instant."
                },
                {
                  icon: Calendar,
                  title: "Planning intelligent",
                  description: "Visualisez la charge de travail, assignez les interventions aux bons techniciens, optimisez les déplacements."
                },
                {
                  icon: ClipboardList,
                  title: "Bons d'intervention numériques",
                  description: "Vos techniciens remplissent les rapports sur mobile, avec photos et signature client. Plus de paperasse perdue."
                },
                {
                  icon: RefreshCw,
                  title: "Contrats de maintenance",
                  description: "Gérez les contrats récurrents, programmez les visites préventives, suivez les renouvellements."
                },
                {
                  icon: MessageSquare,
                  title: "Communication fluide",
                  description: "Notes internes, commentaires sur les interventions : l'information circule entre le bureau et le terrain."
                },
                {
                  icon: History,
                  title: "Traçabilité totale",
                  description: "Chaque action est horodatée. Retrouvez qui a fait quoi, quand, pour une transparence complète."
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
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les résultats pour votre <span className="text-gradient-orange">entreprise</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Interventions mieux préparées, clients plus satisfaits",
                  "Réduction du temps administratif pour chaque prestation",
                  "Facturation plus rapide après chaque intervention",
                  "Moins d'oublis grâce aux rappels automatiques",
                  "Image professionnelle renforcée",
                  "Techniciens autonomes grâce à l'application mobile",
                  "Données exploitables pour améliorer votre activité",
                  "Fidélisation clients grâce à un suivi personnalisé"
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
              Exemples de <span className="text-gradient-orange">métiers</span> concernés
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Maintenance & SAV",
                  examples: "Maintenance industrielle, SAV électroménager, entretien ascenseurs"
                },
                {
                  title: "Installation & pose",
                  examples: "Climatisation, alarmes, fibre optique, cuisines équipées"
                },
                {
                  title: "Services réguliers",
                  examples: "Nettoyage, espaces verts, sécurité, contrôles réglementaires"
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
              Optimisez chaque <span className="text-gradient-orange">intervention</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut transformer votre gestion des interventions clients. Démonstration personnalisée pour votre secteur d'activité.
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

export default PourLesEntreprisesDeServices;
