import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Users,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Camera,
  FileCheck,
  Bell,
  Wifi,
  Clock
} from "lucide-react";

const PourLesEquipesTerrain = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Application pour équipes terrain - Coordination et mobilité optimales"
        description="Provia BASE offre une application mobile pour équipes terrain : accès aux missions, fiches clients, rapports d'intervention. Connectez bureau et terrain en temps réel."
        keywords="application équipe terrain, gestion équipes terrain, app mobile intervention, coordination terrain, logiciel techniciens terrain, application terrain"
        canonical="/pour-les-equipes-terrain"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Application pour équipes terrain</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-orange">Application mobile</span> pour équipes terrain et techniciens
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Vos techniciens interviennent sur le terrain ? Avec l'application mobile Provia BASE, ils accèdent à toutes les informations nécessaires et remontent les données instantanément. Fini les allers-retours inutiles et les informations perdues.
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
                to="/fonctionnalites/application-mobile"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Découvrir l'application mobile
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
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Le quotidien des <span className="text-gradient-orange">équipes terrain</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Vos collaborateurs passent leurs journées en déplacement. Sans les bons outils, ils perdent du temps à chercher des informations, à appeler le bureau, ou à remplir de la paperasse qui sera ressaisie ensuite.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Fiches client sur papier ou inexistantes",
                  "Appels incessants au bureau pour des infos",
                  "Rapports d'intervention remplis a posteriori",
                  "Photos stockées dans les téléphones personnels",
                  "Difficultés à prouver ce qui a été fait",
                  "Retards dans la transmission des informations"
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
                L'<span className="text-gradient-orange">application mobile</span> qui change tout
              </h2>
              <p className="text-muted-foreground text-lg">
                Provia BASE équipe vos techniciens d'une application intuitive qui leur donne tout ce dont ils ont besoin sur le terrain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileCheck,
                  title: "Accès aux missions",
                  description: "Vos collaborateurs voient leur planning, les détails de chaque intervention, l'adresse et l'itinéraire directement sur leur mobile."
                },
                {
                  icon: Users,
                  title: "Fiches clients complètes",
                  description: "Historique des interventions, équipements, notes importantes... Toutes les infos utiles avant d'arriver chez le client."
                },
                {
                  icon: Camera,
                  title: "Photos et documents",
                  description: "Prenez des photos avant/après, joignez-les au rapport. Tout est centralisé et horodaté automatiquement."
                },
                {
                  icon: Smartphone,
                  title: "Rapport d'intervention digital",
                  description: "Remplissez le rapport sur place, faites signer le client sur l'écran. Le bureau reçoit tout instantanément."
                },
                {
                  icon: Bell,
                  title: "Notifications en temps réel",
                  description: "Nouvelles missions, modifications de planning, messages du bureau : vos équipes sont informées immédiatement."
                },
                {
                  icon: Wifi,
                  title: "Mode hors connexion",
                  description: "Pas de réseau dans certaines zones ? L'application fonctionne hors ligne et synchronise dès que la connexion revient."
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

      {/* Two columns: Bureau & Terrain */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Une <span className="text-gradient-orange">coordination parfaite</span> bureau / terrain
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Bureau */}
              <div className="glass-card p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-provia-teal" />
                  </div>
                  <h3 className="text-xl font-semibold">Côté bureau</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Vision en temps réel de l'avancement des interventions",
                    "Réassignation facile en cas d'imprévu",
                    "Rapports disponibles instantanément",
                    "Facturation rapide après validation",
                    "Historique complet et tracé"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-provia-teal flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Terrain */}
              <div className="glass-card p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Côté terrain</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Toutes les infos utiles dans la poche",
                    "Moins de temps passé sur l'administratif",
                    "Preuves photo horodatées automatiquement",
                    "Signature client sur place",
                    "Autonomie totale, même sans réseau"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
              Pour tous les <span className="text-gradient-orange">métiers terrain</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Techniciens",
                  examples: "Maintenance, dépannage, installation, SAV"
                },
                {
                  title: "Artisans",
                  examples: "Plombiers, électriciens, menuisiers, couvreurs"
                },
                {
                  title: "Agents de service",
                  examples: "Nettoyage, espaces verts, sécurité"
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
              Équipez vos <span className="text-gradient-orange">équipes terrain</span> dès maintenant
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment l'application mobile Provia BASE peut améliorer la productivité et la satisfaction de vos techniciens. Démonstration personnalisée disponible.
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

export default PourLesEquipesTerrain;
