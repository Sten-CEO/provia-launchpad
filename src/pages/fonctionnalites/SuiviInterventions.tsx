import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  Eye,
  Clock,
  FileText,
  History,
  TrendingUp,
  AlertCircle
} from "lucide-react";

const SuiviInterventions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Suivi des interventions - Suivez l'avancement en temps réel"
        description="Suivez vos interventions en temps réel avec Provia BASE. Statuts, rapports, historique, indicateurs de performance. Gardez le contrôle sur toutes vos opérations terrain."
        keywords="suivi interventions, suivi temps réel, gestion interventions, rapport intervention, historique interventions, tableau de bord interventions"
        canonical="/fonctionnalites/suivi-interventions"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Suivi</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Gardez un <span className="text-gradient-orange">œil</span> sur chaque intervention
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Avec le suivi des interventions Provia BASE, vous savez toujours où en sont vos équipes. Statuts en temps réel, rapports détaillés, historique complet. Plus jamais de "je ne sais pas où ils en sont".
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir le suivi en démo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/fonctionnalites"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Toutes les fonctionnalités
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
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Sans suivi, vous <span className="text-gradient-orange">naviguez à l'aveugle</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Comment répondre à un client qui demande "où en est ma commande ?" si vous n'avez pas de visibilité sur le travail de vos équipes ? Le manque de suivi crée frustration et inefficacité.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Aucune visibilité sur l'avancement des missions",
                  "Clients qui appellent pour savoir où en est le technicien",
                  "Retards découverts trop tard pour réagir",
                  "Impossible de prouver qu'une intervention a eu lieu",
                  "Pas de données pour améliorer les processus",
                  "Managers obligés d'appeler les techniciens"
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

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Un <span className="text-gradient-orange">suivi complet</span> et transparent
              </h2>
              <p className="text-muted-foreground text-lg">
                Toutes les informations dont vous avez besoin pour piloter vos opérations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Statuts en temps réel",
                  description: "Planifié, en cours, terminé, reporté... Visualisez le statut de chaque intervention sur un tableau de bord unique."
                },
                {
                  icon: Clock,
                  title: "Horodatage automatique",
                  description: "Début, fin, durée de l'intervention : tout est enregistré automatiquement. Des données fiables et objectives."
                },
                {
                  icon: FileText,
                  title: "Rapports d'intervention",
                  description: "Chaque intervention génère un rapport complet : travaux effectués, pièces utilisées, photos, observations."
                },
                {
                  icon: History,
                  title: "Historique consultable",
                  description: "Retrouvez l'historique de toutes les interventions : par client, par technicien, par période. Recherche instantanée."
                },
                {
                  icon: TrendingUp,
                  title: "Indicateurs de performance",
                  description: "Temps moyen d'intervention, taux de résolution au premier passage, respect des délais... Pilotez par les chiffres."
                },
                {
                  icon: Activity,
                  title: "Alertes automatiques",
                  description: "Soyez notifié en cas de retard, d'intervention plus longue que prévu, ou de problème signalé par le technicien."
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

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les bénéfices du <span className="text-gradient-orange">suivi en temps réel</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Réponse immédiate aux questions des clients",
                  "Réactivité face aux imprévus et retards",
                  "Preuves en cas de contestation ou litige",
                  "Données objectives pour les évaluations",
                  "Identification des goulots d'étranglement",
                  "Amélioration continue des processus",
                  "Transparence avec les clients et partenaires",
                  "Moins de stress pour les managers"
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

      {/* Related features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Fonctionnalités <span className="text-gradient-orange">complémentaires</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Planning d'interventions", href: "/fonctionnalites/planning-interventions", desc: "Planifiez avant de suivre" },
                { title: "Application mobile", href: "/fonctionnalites/application-mobile", desc: "Mises à jour terrain" },
                { title: "Gestion clients", href: "/fonctionnalites/gestion-clients", desc: "Historique par client" }
              ].map((item, i) => (
                <Link key={i} to={item.href} className="glass-card p-6 text-center hover:shadow-lg transition-shadow group">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Prenez le <span className="text-gradient-orange">contrôle</span> de vos interventions
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment le suivi temps réel Provia BASE peut transformer votre visibilité opérationnelle. Démonstration gratuite.
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

export default SuiviInterventions;
