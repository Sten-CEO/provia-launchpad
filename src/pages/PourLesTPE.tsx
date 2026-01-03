import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Briefcase,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Smartphone,
  TrendingUp,
  Euro,
  Calendar
} from "lucide-react";

const PourLesTPE = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour TPE - Gestion simplifiée pour petites entreprises"
        description="Provia BASE est le logiciel de gestion pour TPE qui simplifie votre quotidien : devis, factures, clients, équipes terrain. Solution tout-en-un adaptée aux très petites entreprises."
        keywords="logiciel gestion TPE, logiciel TPE, gestion petite entreprise, devis facture TPE, CRM TPE, application TPE"
        canonical="/pour-les-tpe"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Logiciel de gestion pour TPE</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de gestion pour <span className="text-gradient-orange">TPE</span> et artisans indépendants
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Vous êtes artisan, indépendant ou dirigez une très petite entreprise ? Provia BASE centralise devis, factures, clients et planning dans un seul outil intuitif. Consacrez votre énergie à votre métier, pas à l'administratif.
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
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Le défi des <span className="text-gradient-orange">très petites entreprises</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                En tant que dirigeant de TPE, vous jonglez entre plusieurs casquettes : commercial, technicien, gestionnaire, comptable. Chaque minute compte, et pourtant vous perdez un temps précieux sur des tâches administratives répétitives.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Devis créés sur Word ou Excel, jamais uniformes",
                  "Factures envoyées en retard, impayés oubliés",
                  "Historique client éparpillé entre cahiers et mails",
                  "Planning géré de tête ou sur papier",
                  "Pas de vision claire de votre rentabilité",
                  "Temps perdu à chercher des informations"
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
                Provia BASE : le <span className="text-gradient-orange">logiciel de gestion TPE</span> qui vous simplifie la vie
              </h2>
              <p className="text-muted-foreground text-lg">
                Une solution pensée pour les réalités des très petites entreprises, sans complexité inutile.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Devis et factures en 2 minutes",
                  description: "Créez des documents professionnels rapidement grâce aux modèles personnalisables. Transformez un devis en facture en un clic."
                },
                {
                  icon: Users,
                  title: "Gestion clients centralisée",
                  description: "Toutes les informations de vos clients au même endroit : coordonnées, historique, devis, factures, notes."
                },
                {
                  icon: Euro,
                  title: "Suivi des paiements automatique",
                  description: "Visualisez les factures en attente, programmez des relances automatiques, ne laissez plus passer d'impayés."
                },
                {
                  icon: Calendar,
                  title: "Planning simple et visuel",
                  description: "Organisez vos interventions et rendez-vous dans un calendrier clair. Fini les oublis et les doubles réservations."
                },
                {
                  icon: Smartphone,
                  title: "Accessible partout",
                  description: "Application mobile pour consulter vos informations clients et créer des devis directement sur le terrain."
                },
                {
                  icon: TrendingUp,
                  title: "Tableau de bord synthétique",
                  description: "Visualisez votre chiffre d'affaires, vos devis en cours et vos paiements en un coup d'œil."
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
                Ce que Provia BASE apporte à votre <span className="text-gradient-orange">TPE</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Gain de temps significatif sur les tâches administratives",
                  "Image professionnelle avec des documents soignés",
                  "Meilleure trésorerie grâce au suivi des paiements",
                  "Zéro formation complexe : interface intuitive et claire",
                  "Données sécurisées et accessibles depuis n'importe où",
                  "Prix adapté aux budgets des très petites entreprises",
                  "Support réactif en cas de question",
                  "Évolutif : grandit avec votre entreprise"
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
              Provia BASE pour tous les <span className="text-gradient-orange">métiers</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Artisans du bâtiment",
                  examples: "Plombiers, électriciens, peintres, menuisiers, maçons..."
                },
                {
                  title: "Services à domicile",
                  examples: "Jardiniers, piscinistes, dépanneurs, installateurs..."
                },
                {
                  title: "Prestataires de services",
                  examples: "Consultants, formateurs, graphistes, photographes..."
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
              Prêt à simplifier la gestion de votre <span className="text-gradient-orange">TPE</span> ?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Rejoignez les dirigeants de TPE qui ont choisi Provia BASE pour gagner du temps et se concentrer sur leur cœur de métier. Demandez une démonstration gratuite et sans engagement.
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

export default PourLesTPE;
