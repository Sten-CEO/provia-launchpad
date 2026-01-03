import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Bell,
  Repeat,
  LayoutGrid
} from "lucide-react";

const PlanningInterventions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Planning d'interventions - Planifiez et optimisez vos missions"
        description="Planifiez vos interventions efficacement avec Provia BASE. Vue calendrier, assignation aux équipes, optimisation des déplacements, rappels automatiques. Solution de planning pour TPE et PME."
        keywords="planning interventions, logiciel planning, gestion planning, planification interventions, calendrier interventions, planning techniciens"
        canonical="/fonctionnalites/planning-interventions"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Planning</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de <span className="text-gradient-orange">planning d'interventions</span> pour équipes terrain
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Visualisez, planifiez et optimisez toutes vos interventions depuis un calendrier intuitif. Assignez les missions aux bons techniciens, évitez les conflits d'agenda et informez vos clients automatiquement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir le planning en démo
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
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Le casse-tête du <span className="text-gradient-orange">planning quotidien</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Organiser les interventions de manière optimale demande du temps et de la rigueur. Sans outil adapté, c'est une source constante de stress et d'inefficacité.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Planning sur papier ou tableur difficile à mettre à jour",
                  "Conflits d'agenda découverts au dernier moment",
                  "Déplacements non optimisés, temps perdu sur la route",
                  "Techniciens mal informés des changements",
                  "Oubli d'interventions récurrentes",
                  "Clients non prévenus en cas de retard"
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
                Un <span className="text-gradient-orange">planning intelligent</span> à votre service
              </h2>
              <p className="text-muted-foreground text-lg">
                Des fonctionnalités pensées pour simplifier la planification au quotidien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: LayoutGrid,
                  title: "Vue calendrier intuitive",
                  description: "Jour, semaine, mois : visualisez vos interventions selon la vue qui vous convient. Glissez-déposez pour réorganiser."
                },
                {
                  icon: Users,
                  title: "Planning par technicien",
                  description: "Affichez le planning de chaque collaborateur, identifiez les disponibilités, équilibrez la charge de travail."
                },
                {
                  icon: MapPin,
                  title: "Optimisation géographique",
                  description: "Visualisez les adresses des interventions sur la carte. Regroupez les missions par secteur pour limiter les déplacements."
                },
                {
                  icon: Bell,
                  title: "Notifications automatiques",
                  description: "Techniciens et clients sont informés automatiquement des rendez-vous et des modifications de planning."
                },
                {
                  icon: Repeat,
                  title: "Interventions récurrentes",
                  description: "Programmez les visites périodiques (maintenance, entretien...). Elles apparaissent automatiquement dans le planning."
                },
                {
                  icon: Clock,
                  title: "Gestion des imprévus",
                  description: "Un technicien malade ? Une urgence ? Réassignez en quelques clics, l'équipe est immédiatement informée."
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
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les bénéfices d'un <span className="text-gradient-orange">planning optimisé</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Plus d'interventions réalisées par jour",
                  "Moins de kilomètres parcourus",
                  "Zéro conflit d'agenda ou double réservation",
                  "Meilleure ponctualité, clients satisfaits",
                  "Réactivité face aux urgences",
                  "Charge de travail équilibrée entre les équipes",
                  "Historique des interventions planifiées",
                  "Synchronisation parfaite bureau / terrain"
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
                { title: "Gestion des équipes", href: "/fonctionnalites/gestion-equipes", desc: "Gérez vos collaborateurs" },
                { title: "Suivi des interventions", href: "/fonctionnalites/suivi-interventions", desc: "Suivez l'avancement" },
                { title: "Application mobile", href: "/fonctionnalites/application-mobile", desc: "Planning accessible partout" }
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
              Optimisez votre <span className="text-gradient-orange">planning</span> dès aujourd'hui
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut transformer l'organisation de vos interventions. Démonstration gratuite et personnalisée.
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

export default PlanningInterventions;
