import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Wifi,
  Camera,
  FileSignature,
  MapPin,
  Bell,
  Download
} from "lucide-react";

const ApplicationMobile = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Application mobile terrain - Vos équipes connectées partout"
        description="L'application mobile Provia BASE connecte vos équipes terrain au bureau. Accès aux missions, fiches clients, rapports d'intervention, photos, signature. Fonctionne hors ligne."
        keywords="application mobile terrain, app technicien, application intervention, mobile professionnel, app équipe terrain, rapport mobile"
        canonical="/fonctionnalites/application-mobile"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Application mobile terrain</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              L'<span className="text-gradient-orange">application mobile</span> qui connecte bureau et terrain
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Équipez vos techniciens d'une application intuitive et complète. Accès aux missions, fiches clients, rapports d'intervention, photos et signature client... Tout ce dont ils ont besoin dans leur poche, même sans connexion internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir l'application en démo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pour-les-equipes-terrain"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Équipes terrain
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
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Le quotidien sans <span className="text-gradient-orange">outil mobile adapté</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Vos techniciens passent leurs journées sur le terrain. Sans application dédiée, ils perdent du temps et vous perdez des informations précieuses.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Appels incessants au bureau pour obtenir des infos",
                  "Rapports remplis le soir, après les interventions",
                  "Photos stockées dans les téléphones personnels",
                  "Informations client inaccessibles sur place",
                  "Signature client sur papier à scanner ensuite",
                  "Pas de preuve horodatée du travail effectué"
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
                Une <span className="text-gradient-orange">app complète</span> pour le terrain
              </h2>
              <p className="text-muted-foreground text-lg">
                Tout ce dont vos techniciens ont besoin pour travailler efficacement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Download,
                  title: "Accès aux missions",
                  description: "Les techniciens voient leur planning, les détails de chaque intervention, l'adresse et l'itinéraire. Tout est à jour en temps réel."
                },
                {
                  icon: Smartphone,
                  title: "Fiches clients complètes",
                  description: "Historique des interventions, équipements installés, notes importantes... Toutes les infos utiles avant d'arriver sur place."
                },
                {
                  icon: Camera,
                  title: "Photos et documents",
                  description: "Prenez des photos avant/après, joignez-les au rapport. Tout est automatiquement horodaté et centralisé."
                },
                {
                  icon: FileSignature,
                  title: "Signature sur écran",
                  description: "Le client signe directement sur le téléphone ou la tablette. Plus besoin de papier, tout est enregistré."
                },
                {
                  icon: Bell,
                  title: "Notifications push",
                  description: "Nouvelles missions, modifications de planning, messages urgents... Les techniciens sont informés instantanément."
                },
                {
                  icon: Wifi,
                  title: "Mode hors ligne",
                  description: "Pas de réseau ? L'application fonctionne quand même. Les données se synchronisent dès que la connexion revient."
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
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les avantages de l'<span className="text-gradient-orange">application mobile</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Techniciens autonomes et mieux informés",
                  "Rapports disponibles immédiatement au bureau",
                  "Preuves photo horodatées en cas de litige",
                  "Fin des ressaisies et de la paperasse",
                  "Signature client légalement valide",
                  "Moins d'erreurs et d'oublis",
                  "Communication fluide bureau/terrain",
                  "Fonctionne même dans les zones blanches"
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

      {/* Compatibility */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              <span className="text-gradient-orange">Compatible</span> avec tous les appareils
            </h2>
            <div className="glass-card p-6 lg:p-8">
              <p className="text-muted-foreground text-lg mb-6">
                L'application Provia BASE fonctionne sur smartphones et tablettes, iOS et Android. Pas besoin d'investir dans du matériel spécifique.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["iPhone", "iPad", "Android Phone", "Tablette Android"].map((device, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 rounded-full text-foreground font-medium">
                    {device}
                  </span>
                ))}
              </div>
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
                { title: "Planning d'interventions", href: "/fonctionnalites/planning-interventions", desc: "Missions synchronisées" },
                { title: "Suivi des interventions", href: "/fonctionnalites/suivi-interventions", desc: "Temps réel pour le bureau" },
                { title: "Gestion des équipes", href: "/fonctionnalites/gestion-equipes", desc: "Coordination optimale" }
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
              Équipez vos <span className="text-gradient-orange">équipes terrain</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez l'application mobile Provia BASE en action. Démonstration gratuite avec simulation terrain.
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

export default ApplicationMobile;
