import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  Copy,
  Send,
  BarChart,
  Palette,
  Clock
} from "lucide-react";

const Devis = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de devis professionnel - Créez des devis en 2 minutes"
        description="Créez des devis professionnels en quelques clics avec Provia BASE. Modèles personnalisables, calcul automatique, envoi par email, suivi et relances. Solution de devis pour TPE et PME."
        keywords="logiciel devis, créer devis, devis professionnel, devis en ligne, logiciel devis gratuit, devis TPE PME, modèle devis"
        canonical="/fonctionnalites/devis"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Devis</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Créez des <span className="text-gradient-orange">devis professionnels</span> en 2 minutes
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Fini les heures passées sur Word ou Excel. Avec le logiciel de devis Provia BASE, créez des devis élégants, précis et personnalisés à votre image en quelques clics. Envoyez, suivez et transformez-les en factures automatiquement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir le module devis en démo
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
                  Pourquoi perdre du temps sur vos <span className="text-gradient-orange">devis</span> ?
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Le devis est souvent le premier document que votre client voit de votre entreprise. Pourtant, sa création est chronophage et source d'erreurs quand elle est faite manuellement.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ressaisie des mêmes informations à chaque devis",
                  "Risque d'erreurs de calcul ou de TVA",
                  "Documents non uniformes, image peu professionnelle",
                  "Difficultés à retrouver les anciens devis",
                  "Pas de suivi : le client a-t-il ouvert le devis ?",
                  "Transformation en facture fastidieuse"
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
                Un <span className="text-gradient-orange">module devis</span> complet et intuitif
              </h2>
              <p className="text-muted-foreground text-lg">
                Tout ce dont vous avez besoin pour créer, envoyer et gérer vos devis efficacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Création ultra-rapide",
                  description: "Sélectionnez un client, ajoutez vos prestations depuis votre catalogue, le devis est prêt. Calculs automatiques, TVA incluse."
                },
                {
                  icon: Palette,
                  title: "Personnalisation complète",
                  description: "Ajoutez votre logo, choisissez vos couleurs, personnalisez les mentions. Vos devis reflètent votre identité."
                },
                {
                  icon: Copy,
                  title: "Modèles et duplication",
                  description: "Créez des modèles pour vos prestations récurrentes. Dupliquez un ancien devis en un clic pour gagner du temps."
                },
                {
                  icon: Send,
                  title: "Envoi direct par email",
                  description: "Envoyez le devis en PDF directement depuis Provia BASE. Le client le reçoit instantanément, vous êtes notifié."
                },
                {
                  icon: BarChart,
                  title: "Suivi des devis",
                  description: "Visualisez les devis en attente, acceptés, refusés. Programmez des relances automatiques pour ne rien oublier."
                },
                {
                  icon: FileText,
                  title: "Transformation en facture",
                  description: "Devis accepté ? Transformez-le en facture en un clic. Toutes les informations sont conservées."
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les avantages du <span className="text-gradient-orange">logiciel de devis</span> Provia BASE
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Gain de temps : créez un devis en 2 minutes au lieu de 20",
                  "Zéro erreur de calcul grâce à l'automatisation",
                  "Image professionnelle avec des documents soignés",
                  "Suivi commercial amélioré grâce à la visibilité sur les devis",
                  "Catalogue de prestations réutilisable",
                  "Historique complet par client",
                  "Accessible depuis le terrain via l'application mobile",
                  "Intégration parfaite avec la facturation"
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
                { title: "Facturation", href: "/fonctionnalites/facturation", desc: "Transformez vos devis en factures" },
                { title: "Gestion clients", href: "/fonctionnalites/gestion-clients", desc: "Historique devis par client" },
                { title: "Archivage", href: "/fonctionnalites/archivage", desc: "Retrouvez tous vos devis" }
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
              Simplifiez la création de vos <span className="text-gradient-orange">devis</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment Provia BASE peut vous faire gagner des heures chaque semaine sur vos devis. Démonstration gratuite et personnalisée.
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

export default Devis;
