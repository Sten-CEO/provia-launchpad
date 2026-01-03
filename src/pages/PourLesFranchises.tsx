import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Store,
  CheckCircle2,
  ArrowRight,
  Building2,
  BarChart3,
  Users,
  Smartphone,
  Shield,
  GitBranch
} from "lucide-react";

const PourLesFranchises = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour franchises et réseaux d'agences"
        description="Provia BASE est le logiciel de gestion pour franchises et réseaux : gestion multi-sites, suivi des équipes terrain, reporting centralisé. Pilotez votre réseau efficacement."
        keywords="logiciel franchise, gestion franchise, logiciel multi-sites, gestion réseau agences, CRM franchise, logiciel réseau"
        canonical="/pour-les-franchises"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Logiciel de gestion pour franchises</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de gestion pour <span className="text-gradient-orange">franchises</span> et réseaux d'agences
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Vous gérez un réseau de franchises ou plusieurs agences ? Provia BASE centralise la gestion de tous vos points de vente. Vision consolidée, autonomie locale, reporting unifié. Gardez le contrôle tout en donnant de la flexibilité à vos franchisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo réseau
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
            <div className="glass-card p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GitBranch className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Les défis de la gestion <span className="text-gradient-orange">multi-sites</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Piloter un réseau de franchises ou d'agences implique de jongler entre vision globale et gestion locale. Sans outil adapté, vous perdez en visibilité et vos franchisés manquent d'autonomie.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Données éparpillées entre les différents sites",
                  "Pas de vision consolidée de l'activité réseau",
                  "Difficultés à comparer les performances",
                  "Processus non harmonisés entre agences",
                  "Formation longue pour chaque nouveau franchisé",
                  "Manque de contrôle sur l'image de marque"
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
                Une <span className="text-gradient-orange">plateforme unifiée</span> pour tout votre réseau
              </h2>
              <p className="text-muted-foreground text-lg">
                Provia BASE s'adapte aux besoins des réseaux de franchises et d'agences multiples.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Gestion multi-sites",
                  description: "Chaque franchise ou agence dispose de son espace, avec ses clients, ses équipes et ses documents. Tout reste cloisonné et sécurisé."
                },
                {
                  icon: BarChart3,
                  title: "Reporting consolidé",
                  description: "Visualisez les performances de l'ensemble du réseau depuis un tableau de bord unique. Comparez les sites, identifiez les meilleures pratiques."
                },
                {
                  icon: Users,
                  title: "Gestion des droits",
                  description: "Définissez précisément ce que chaque franchisé peut voir et faire. Le siège garde la main sur les paramètres stratégiques."
                },
                {
                  icon: Shield,
                  title: "Processus standardisés",
                  description: "Imposez les mêmes modèles de devis, factures et rapports à tout le réseau. Garantissez une image de marque cohérente."
                },
                {
                  icon: Smartphone,
                  title: "Application terrain unifiée",
                  description: "Les techniciens de toutes les agences utilisent la même application. Formation simplifiée, mobilité entre sites facilitée."
                },
                {
                  icon: Store,
                  title: "Déploiement rapide",
                  description: "Ouvrez une nouvelle franchise en quelques clics. Dupliquez les paramètres d'un site existant pour aller plus vite."
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
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les avantages pour votre <span className="text-gradient-orange">réseau</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Vision globale de l'activité de tout le réseau",
                  "Autonomie des franchisés dans un cadre maîtrisé",
                  "Comparaison des performances entre sites",
                  "Processus et documents harmonisés",
                  "Déploiement rapide de nouvelles agences",
                  "Mobilité des équipes entre les sites",
                  "Economies d'échelle sur les licences",
                  "Support et formation mutualisés"
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

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Types de <span className="text-gradient-orange">réseaux</span> concernés
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Franchises artisanales",
                  examples: "Plomberie, électricité, serrurerie, dépannage"
                },
                {
                  title: "Réseaux de services",
                  examples: "Nettoyage, maintenance, sécurité, espaces verts"
                },
                {
                  title: "Agences régionales",
                  examples: "Entreprises multi-sites, filiales, succursales"
                }
              ].map((useCase, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.examples}</p>
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
              Structurez la gestion de votre <span className="text-gradient-orange">réseau</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut accompagner le développement de votre franchise ou réseau d'agences. Démonstration adaptée à votre structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo réseau
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

export default PourLesFranchises;
