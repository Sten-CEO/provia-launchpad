import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  UserCircle,
  CheckCircle2,
  ArrowRight,
  Database,
  Search,
  FileText,
  History,
  Star,
  Tags
} from "lucide-react";

const GestionClients = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gestion des clients - CRM intégré et centralisé"
        description="Centralisez toutes vos informations clients avec Provia BASE. Fiches clients, historique interventions, devis, factures, notes. Un CRM simple et efficace pour TPE et PME."
        keywords="gestion clients, CRM, fiche client, historique client, base clients, logiciel CRM TPE PME, gestion relation client"
        canonical="/fonctionnalites/gestion-clients"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-primary font-semibold mb-4 text-lg">Fonctionnalité Gestion clients</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Logiciel <span className="text-gradient-orange">CRM</span> et gestion clients pour TPE et PME
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8">
              Fini les informations éparpillées entre carnets, mails et fichiers Excel. Le CRM intégré Provia BASE centralise tout : coordonnées, historique des interventions, devis, factures, notes... Chaque interaction client devient une opportunité de mieux servir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Voir le CRM en démo
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
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Le cauchemar des <span className="text-gradient-orange">infos dispersées</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                Un client appelle. Vous cherchez ses coordonnées dans Outlook, son dernier devis dans un dossier, l'historique de ses interventions dans un carnet... Cette situation vous parle ?
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Coordonnées clients dans plusieurs endroits différents",
                  "Historique des échanges impossible à retrouver",
                  "Nouveau collaborateur qui ne connaît pas le contexte",
                  "Client qui doit répéter son problème à chaque appel",
                  "Opportunités commerciales manquées",
                  "Perte d'information quand quelqu'un quitte l'équipe"
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
                Un <span className="text-gradient-orange">CRM</span> simple et efficace
              </h2>
              <p className="text-muted-foreground text-lg">
                Tout ce dont vous avez besoin pour une relation client de qualité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Database,
                  title: "Fiches clients complètes",
                  description: "Coordonnées, contacts multiples, sites d'intervention, équipements installés, contrats... Toutes les infos clés en un coup d'œil."
                },
                {
                  icon: History,
                  title: "Historique centralisé",
                  description: "Devis envoyés, interventions réalisées, factures émises, appels, notes... Retracez toute la relation avec chaque client."
                },
                {
                  icon: Search,
                  title: "Recherche instantanée",
                  description: "Trouvez un client en une seconde par son nom, adresse, téléphone, ou numéro de dossier. Filtres avancés disponibles."
                },
                {
                  icon: Tags,
                  title: "Catégorisation flexible",
                  description: "Classez vos clients par type, secteur, statut VIP, zone géographique... Créez vos propres critères."
                },
                {
                  icon: FileText,
                  title: "Documents associés",
                  description: "Rattachez des documents à chaque fiche : contrats, plans, photos, manuels... Tout est accessible instantanément."
                },
                {
                  icon: Star,
                  title: "Notes et préférences",
                  description: "Enregistrez les préférences client, les points d'attention, les contacts privilégiés. Personnalisez chaque relation."
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
                <UserCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">
                Les avantages d'un <span className="text-gradient-orange">CRM intégré</span>
              </h2>
            </div>

            <div className="glass-card p-6 lg:p-8">
              <ul className="space-y-4">
                {[
                  "Connaissance client parfaite à chaque interaction",
                  "Techniciens informés avant d'arriver sur site",
                  "Continuité de service même si un collaborateur change",
                  "Détection des opportunités de vente additionnelle",
                  "Fidélisation renforcée grâce à la personnalisation",
                  "Gain de temps sur la recherche d'informations",
                  "Image professionnelle auprès des clients",
                  "Base de données pérenne et sécurisée"
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
                { title: "Devis", href: "/fonctionnalites/devis", desc: "Liés aux fiches clients" },
                { title: "Facturation", href: "/fonctionnalites/facturation", desc: "Historique facturation" },
                { title: "Suivi des interventions", href: "/fonctionnalites/suivi-interventions", desc: "Historique complet" }
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
              Centralisez votre <span className="text-gradient-orange">relation client</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Découvrez comment le CRM Provia BASE peut améliorer votre connaissance client et votre qualité de service. Démonstration gratuite.
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

export default GestionClients;
