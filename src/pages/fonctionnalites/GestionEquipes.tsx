import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Users,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  Shield,
  BarChart3,
  Calendar,
  MessageSquare,
  Eye
} from "lucide-react";

const GestionEquipes = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion d'équipes - Coordonnez vos collaborateurs"
        description="Gérez vos équipes efficacement avec Provia BASE. Attribution des missions, suivi des interventions, droits d'accès personnalisés. Solution de gestion d'équipes pour TPE et PME."
        keywords="logiciel gestion équipes, gestion équipe terrain, coordination équipes, planning équipe, suivi collaborateurs, gestion ressources humaines"
        canonical="/fonctionnalites/gestion-equipes"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Gestion des équipes</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-orange">Coordonnez</span> vos équipes sans effort
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Votre entreprise compte plusieurs collaborateurs ? Le module de gestion d'équipes Provia BASE vous permet d'organiser le travail, de suivre les interventions et de maintenir une coordination fluide entre le bureau et le terrain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir la gestion d'équipes en démo
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
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  La complexité de <span className="text-gradient-orange">gérer plusieurs personnes</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Plus votre équipe grandit, plus la coordination devient un défi. Qui fait quoi ? Où en est cette intervention ? Comment partager les informations efficacement ?
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Difficultés à savoir qui est disponible",
                  "Informations client dispersées entre les personnes",
                  "Manque de visibilité sur l'avancement des tâches",
                  "Temps perdu en réunions de synchronisation",
                  "Risque de doublons ou d'oublis",
                  "Pas de traçabilité des actions"
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
                Organisez votre <span className="text-gradient-orange">équipe</span> efficacement
              </h2>
              <p className="text-muted-foreground text-lg">
                Des outils simples pour une coordination optimale au quotidien.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: UserPlus,
                  title: "Gestion des utilisateurs",
                  description: "Créez des comptes pour chaque collaborateur. Chacun accède à l'application avec ses propres identifiants."
                },
                {
                  icon: Shield,
                  title: "Droits d'accès personnalisés",
                  description: "Définissez ce que chaque personne peut voir et faire. Les techniciens n'ont pas accès aux mêmes infos que les managers."
                },
                {
                  icon: Calendar,
                  title: "Attribution des missions",
                  description: "Assignez les interventions aux bons collaborateurs. Ils reçoivent leurs missions directement sur l'application mobile."
                },
                {
                  icon: Eye,
                  title: "Suivi en temps réel",
                  description: "Visualisez l'avancement des interventions de chaque membre. Savez toujours où en est votre équipe."
                },
                {
                  icon: MessageSquare,
                  title: "Communication intégrée",
                  description: "Notes sur les interventions, commentaires, historique... L'information circule naturellement."
                },
                {
                  icon: BarChart3,
                  title: "Indicateurs de performance",
                  description: "Suivez le nombre d'interventions, les temps de réponse, la charge de travail de chaque équipe."
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
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les avantages pour votre <span className="text-gradient-orange">organisation</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Meilleure répartition de la charge de travail",
                  "Moins de temps perdu en coordination",
                  "Information accessible à tous, au bon moment",
                  "Responsabilisation de chaque collaborateur",
                  "Visibilité totale pour le management",
                  "Réactivité accrue face aux imprévus",
                  "Traçabilité des actions pour chaque intervention",
                  "Scalabilité : ajoutez des collaborateurs facilement"
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
                { title: "Planning d'interventions", href: "/fonctionnalites/planning-interventions", desc: "Planifiez les missions de l'équipe" },
                { title: "Application mobile", href: "/fonctionnalites/application-mobile", desc: "Équipez vos collaborateurs terrain" },
                { title: "Suivi des interventions", href: "/fonctionnalites/suivi-interventions", desc: "Suivez l'avancement en temps réel" }
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
              Simplifiez la gestion de votre <span className="text-gradient-orange">équipe</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut améliorer la coordination de vos collaborateurs. Démonstration gratuite adaptée à la taille de votre équipe.
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

export default GestionEquipes;
