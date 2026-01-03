import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Receipt,
  CheckCircle2,
  ArrowRight,
  Euro,
  Bell,
  FileCheck,
  PieChart,
  Shield,
  Send
} from "lucide-react";

const Facturation = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de facturation - Facturez en quelques clics"
        description="Facturez rapidement et professionnellement avec Provia BASE. Création de factures, suivi des paiements, relances automatiques, conformité légale. Solution de facturation pour TPE et PME."
        keywords="logiciel facturation, créer facture, facturation en ligne, logiciel facture, suivi paiements, relance impayés, facturation TPE PME"
        canonical="/fonctionnalites/facturation"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Facturation</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel de <span className="text-gradient-orange">facturation</span> pour TPE et PME
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Le logiciel de facturation Provia BASE simplifie tout le processus : de la création de la facture jusqu'au suivi du paiement. Factures conformes, envoi automatique, relances programmées. Concentrez-vous sur votre métier, pas sur la paperasse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir le module facturation
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
                  <Euro className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Les problèmes de la <span className="text-gradient-orange">facturation manuelle</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                La facturation est essentielle à votre trésorerie, mais elle est souvent reléguée au second plan. Résultat : retards, oublis et impayés qui impactent directement votre entreprise.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Factures envoyées en retard, après l'intervention",
                  "Numérotation manuelle source d'erreurs",
                  "Oubli de certaines prestations à facturer",
                  "Impayés non relancés, argent perdu",
                  "Difficultés à retrouver les factures anciennes",
                  "Non-conformité aux obligations légales"
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
                Une <span className="text-gradient-orange">facturation</span> sans friction
              </h2>
              <p className="text-muted-foreground text-lg">
                Provia BASE automatise les tâches répétitives pour que vous puissiez facturer sereinement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: "Création instantanée",
                  description: "Créez une facture en partant de zéro ou transformez un devis accepté. Numérotation automatique et conforme."
                },
                {
                  icon: Shield,
                  title: "Conformité garantie",
                  description: "Mentions légales obligatoires, format conforme aux exigences fiscales. Vos factures sont toujours en règle."
                },
                {
                  icon: Send,
                  title: "Envoi automatique",
                  description: "Envoyez la facture par email directement depuis l'application. Le client la reçoit en PDF instantanément."
                },
                {
                  icon: Bell,
                  title: "Relances automatiques",
                  description: "Programmez des relances à J+7, J+15, J+30... Le système envoie les rappels à votre place."
                },
                {
                  icon: Euro,
                  title: "Suivi des paiements",
                  description: "Marquez les factures comme payées, visualisez le solde client, suivez votre trésorerie en temps réel."
                },
                {
                  icon: PieChart,
                  title: "Tableaux de bord",
                  description: "CA mensuel, factures en attente, taux de recouvrement... Tous vos indicateurs en un coup d'œil."
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
                <Receipt className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les bénéfices pour votre <span className="text-gradient-orange">trésorerie</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Facturation plus rapide = paiement plus rapide",
                  "Moins d'impayés grâce aux relances automatiques",
                  "Vision claire de votre chiffre d'affaires",
                  "Zéro risque d'erreur de numérotation",
                  "Conformité fiscale assurée",
                  "Historique complet pour chaque client",
                  "Export des données simplifié",
                  "Moins de stress administratif"
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
                { title: "Devis", href: "/fonctionnalites/devis", desc: "Créez des devis transformables en factures" },
                { title: "Gestion clients", href: "/fonctionnalites/gestion-clients", desc: "Suivez l'historique facturation" },
                { title: "Archivage", href: "/fonctionnalites/archivage", desc: "Conservez toutes vos factures" }
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
              Optimisez votre <span className="text-gradient-orange">facturation</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut améliorer votre trésorerie grâce à une facturation plus efficace. Démonstration gratuite.
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

export default Facturation;
