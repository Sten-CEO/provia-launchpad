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
  Tags,
  AlertTriangle,
  Check,
  Building,
  Phone
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

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

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-screen pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="glow-orange top-20 -right-40 animate-pulse-glow" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte */}
            <div className="space-y-8 animate-fade-in">
              <p className="text-primary font-semibold text-sm sm:text-lg">Fonctionnalité Gestion clients</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold sm:font-bold leading-tight">
                <span className="sm:hidden"><span className="text-gradient-orange">CRM</span> et gestion clients TPE/PME</span>
                <span className="hidden sm:inline">Logiciel <span className="text-gradient-orange">CRM</span> et gestion clients pour TPE et PME</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl">
                Fini les informations éparpillées. Le CRM intégré Provia BASE centralise tout : coordonnées, historique, devis, factures, notes. Chaque interaction devient une opportunité.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Database, text: "Fiches clients complètes" },
                  { icon: History, text: "Historique centralisé" },
                  { icon: Search, text: "Recherche instantanée" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo" className="btn-primary text-center text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  Voir le CRM en démo
                </Link>
                <a href="/#tarifs" className="btn-secondary text-center text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
                  Voir les tarifs
                </a>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Support France</span>
              </p>
            </div>

            {/* Colonne B - Mockup CRM */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Fiche client</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Client Header */}
                <div className="glass-card p-4 mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Dupont SARL</p>
                        <p className="text-xs text-muted-foreground">Client depuis 2021</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-provia-teal/20 text-provia-teal text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" /> VIP
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">01 23 45 67 89</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">12 rue de la Paix, Paris</span>
                    </div>
                  </div>
                </div>

                {/* Activité récente */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Activité récente</p>
                  {[
                    { type: "Intervention", date: "15/01/24", icon: CheckCircle2, color: "provia-teal" },
                    { type: "Devis envoyé", date: "10/01/24", icon: FileText, color: "provia-yellow" },
                    { type: "Facture payée", date: "08/01/24", icon: CheckCircle2, color: "provia-teal" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 glass-card">
                      <div className={`w-6 h-6 rounded-full bg-${activity.color}/20 flex items-center justify-center`}>
                        <activity.icon className={`w-3 h-3 text-${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-foreground">{activity.type}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.date}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Interventions", value: "24" },
                    { label: "Devis", value: "8" },
                    { label: "CA total", value: "12k€" },
                  ].map((stat, i) => (
                    <div key={i} className="glass-card p-2 text-center">
                      <p className="text-lg font-bold text-gradient-orange">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 - Problème (2 colonnes inversées) */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Illustration problème */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="font-semibold text-foreground">Situation actuelle</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Search, text: "Informations dispersées partout", color: "destructive" },
                    { icon: History, text: "Historique impossible à retrouver", color: "destructive" },
                    { icon: UserCircle, text: "Contexte client perdu", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Je cherchais 20 minutes avant chaque appel client..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Commercial TPE, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Le cauchemar des <span className="text-gradient-orange">infos dispersées</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Un client appelle. Vous cherchez ses coordonnées dans Outlook, son dernier devis dans un dossier, l'historique de ses interventions dans un carnet... Cette situation vous parle ?
              </p>

              <ul className="space-y-3">
                {[
                  "Coordonnées clients dans plusieurs endroits",
                  "Historique des échanges impossible à retrouver",
                  "Nouveau collaborateur qui ne connaît pas le contexte",
                  "Client qui doit répéter son problème à chaque appel",
                  "Opportunités commerciales manquées",
                  "Perte d'information quand quelqu'un quitte",
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-destructive font-bold mt-1">✗</span>
                    <span className="text-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3 - Solution (2 colonnes) */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-1/2 -right-40" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte solution */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Un <span className="text-gradient-orange">CRM</span> simple et efficace
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE centralise toute la connaissance client dans des fiches complètes. Coordonnées, historique, documents, notes : tout est accessible en un clic.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Database, text: "Fiches clients complètes et structurées" },
                  { icon: History, text: "Historique centralisé de toute la relation" },
                  { icon: Search, text: "Recherche instantanée multi-critères" },
                  { icon: Tags, text: "Catégorisation flexible sur mesure" },
                  { icon: FileText, text: "Documents associés et centralisés" },
                  { icon: Star, text: "Notes et préférences personnalisées" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne B - Mockup solution */}
            <div className="relative">
              <div className="glass-card p-4 sm:p-6 lg:p-6 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <UserCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Base clients</p>
                      <p className="text-xs text-muted-foreground">248 clients actifs</p>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="glass-card p-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Rechercher un client..."
                        className="bg-transparent border-none outline-none text-sm text-foreground flex-1"
                        disabled
                      />
                    </div>
                  </div>

                  {/* Client List */}
                  <div className="space-y-2 mb-4">
                    {[
                      { name: "Dupont SARL", status: "VIP", interventions: "24" },
                      { name: "Martin & Co", status: "Actif", interventions: "12" },
                      { name: "Société ABC", status: "Nouveau", interventions: "3" },
                    ].map((client, i) => (
                      <div key={i} className="p-3 glass-card hover:bg-primary/5 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                              <Building className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{client.name}</p>
                              <p className="text-xs text-muted-foreground">{client.interventions} interventions</p>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${
                            client.status === 'VIP' ? 'bg-provia-teal/20 text-provia-teal' :
                            client.status === 'Nouveau' ? 'bg-provia-yellow/20 text-provia-yellow' :
                            'bg-primary/10 text-primary'
                          }`}>
                            {client.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="p-3 glass-card bg-provia-teal/5 border-provia-teal/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Taux de fidélisation</span>
                      <span className="text-lg font-bold text-provia-teal">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 - Bénéfices (Cards) */}
      <section className="py-10 sm:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-4">
              Les avantages d'un <span className="text-gradient-orange">CRM intégré</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Centralisez, personnalisez et optimisez votre relation client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: UserCircle, title: "Connaissance parfaite", desc: "À chaque interaction client" },
              { icon: CheckCircle2, title: "Techniciens informés", desc: "Avant d'arriver sur site" },
              { icon: History, title: "Continuité service", desc: "Même si un collaborateur change" },
              { icon: Star, title: "Opportunités détectées", desc: "Vente additionnelle facilitée" },
              { icon: Tags, title: "Fidélisation", desc: "Grâce à la personnalisation" },
              { icon: Search, title: "Gain de temps", desc: "Recherche instantanée" },
              { icon: Database, title: "Image pro", desc: "Auprès des clients" },
              { icon: FileText, title: "Base pérenne", desc: "Sécurisée et accessible" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5 - CTA Final */}
      <section className="py-10 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-6">
              Centralisez votre <span className="text-gradient-orange">relation client</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment le CRM Provia BASE peut améliorer votre connaissance client et votre qualité de service. Démonstration gratuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/#tarifs"
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestionClients;
