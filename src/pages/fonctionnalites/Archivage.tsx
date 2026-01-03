import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Archive,
  CheckCircle2,
  ArrowRight,
  Search,
  Shield,
  Download,
  FolderOpen,
  Clock,
  Lock
} from "lucide-react";

const Archivage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Archivage documents - Devis et factures accessibles à vie"
        description="Archivez et retrouvez tous vos documents avec Provia BASE. Devis, factures, rapports d'intervention conservés et accessibles à vie. Sécurité et conformité garanties."
        keywords="archivage documents, archivage factures, archivage devis, conservation documents, recherche documents, archivage numérique"
        canonical="/fonctionnalites/archivage"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Archivage</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vos documents <span className="text-gradient-orange">archivés</span> et accessibles à vie
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Devis, factures, rapports d'intervention, photos... Tous vos documents sont automatiquement archivés et retrouvables en quelques secondes. Plus jamais de dossiers perdus ou de recherches interminables dans vos fichiers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir l'archivage en démo
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
                  <FolderOpen className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  La galère des <span className="text-gradient-orange">documents introuvables</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Un client demande une copie d'une vieille facture. Un contrôle fiscal nécessite des documents d'il y a 3 ans. Un litige sur une intervention passée. Sans système d'archivage, ces situations deviennent des cauchemars.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Documents éparpillés sur plusieurs ordinateurs",
                  "Dossiers clients non organisés ou perdus",
                  "Recherches qui prennent des heures",
                  "Risque de non-conformité fiscale",
                  "Pas de backup en cas de panne",
                  "Documents papier qui s'abîment ou disparaissent"
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
                Un <span className="text-gradient-orange">archivage automatique</span> et intelligent
              </h2>
              <p className="text-muted-foreground text-lg">
                Vos documents sont organisés et sécurisés sans effort de votre part.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Archive,
                  title: "Archivage automatique",
                  description: "Chaque document créé dans Provia BASE est automatiquement archivé et classé. Aucune action manuelle requise."
                },
                {
                  icon: Search,
                  title: "Recherche instantanée",
                  description: "Retrouvez n'importe quel document en quelques secondes. Recherche par client, date, numéro, montant..."
                },
                {
                  icon: Clock,
                  title: "Conservation illimitée",
                  description: "Vos documents sont conservés aussi longtemps que vous le souhaitez. Conformité avec les obligations légales de conservation."
                },
                {
                  icon: Shield,
                  title: "Sécurité maximale",
                  description: "Hébergement sécurisé, chiffrement des données, sauvegardes quotidiennes. Vos documents sont protégés."
                },
                {
                  icon: Download,
                  title: "Export facile",
                  description: "Téléchargez vos documents au format PDF à tout moment. Export groupé possible pour les besoins comptables."
                },
                {
                  icon: Lock,
                  title: "Contrôle d'accès",
                  description: "Définissez qui peut accéder aux archives. Traçabilité des consultations pour plus de sécurité."
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

      {/* What's archived */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Documents <span className="text-gradient-orange">archivés automatiquement</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Devis",
                "Factures",
                "Avoirs",
                "Bons de commande",
                "Rapports d'intervention",
                "Photos terrain",
                "Signatures clients",
                "Contrats"
              ].map((doc, i) => (
                <div key={i} className="glass-card p-4 text-center">
                  <CheckCircle2 className="w-6 h-6 text-provia-teal mx-auto mb-2" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Archive className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les bénéfices de l'<span className="text-gradient-orange">archivage numérique</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Retrouvez n'importe quel document en 5 secondes",
                  "Conformité fiscale et comptable assurée",
                  "Zéro risque de perte de données",
                  "Économies sur le stockage papier",
                  "Documents accessibles depuis n'importe où",
                  "Preuves horodatées en cas de litige",
                  "Historique complet de l'activité",
                  "Sérénité en cas de contrôle"
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Fonctionnalités <span className="text-gradient-orange">complémentaires</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Devis", href: "/fonctionnalites/devis", desc: "Créez et archivez vos devis" },
                { title: "Facturation", href: "/fonctionnalites/facturation", desc: "Factures conservées à vie" },
                { title: "Gestion clients", href: "/fonctionnalites/gestion-clients", desc: "Documents par client" }
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
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Sécurisez vos <span className="text-gradient-orange">documents</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut vous libérer des soucis d'archivage. Démonstration gratuite avec vos propres cas d'usage.
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

export default Archivage;
