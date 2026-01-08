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
  Lock,
  AlertTriangle,
  Check,
  FileText,
  Calendar
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

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

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-screen pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="glow-orange top-20 -right-40 animate-pulse-glow" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte */}
            <div className="space-y-8 animate-fade-in">
              <p className="text-primary font-semibold text-sm sm:text-lg">Fonctionnalité Archivage</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold sm:font-bold leading-tight">
                <span className="sm:hidden"><span className="text-gradient-orange">Archivage</span> de documents TPE/PME</span>
                <span className="hidden sm:inline">Logiciel d'<span className="text-gradient-orange">archivage</span> de documents pour artisans et TPE/PME</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl">
                Devis, factures, rapports, photos... Tous vos documents sont automatiquement archivés et retrouvables en quelques secondes. Plus jamais de dossiers perdus.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Archive, text: "Archivage automatique" },
                  { icon: Search, text: "Recherche instantanée" },
                  { icon: Shield, text: "Sécurité maximale" },
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
                  Voir l'archivage en démo
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

            {/* Colonne B - Mockup Archivage */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Archives documents</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Search & Filters */}
                <div className="glass-card p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Rechercher un document..."
                      className="bg-transparent border-none outline-none text-sm text-foreground flex-1"
                      disabled
                    />
                  </div>
                  <div className="flex gap-2">
                    {["Tous", "Devis", "Factures", "Rapports"].map((filter, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${i === 0 ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Documents List */}
                <div className="space-y-2 mb-4">
                  {[
                    { type: "Facture", num: "FAC-2024-0142", date: "15/01/24", client: "Dupont SARL" },
                    { type: "Devis", num: "DEV-2024-0138", date: "12/01/24", client: "Martin & Co" },
                    { type: "Rapport", num: "INT-2024-0245", date: "10/01/24", client: "ABC Corp" },
                  ].map((doc, i) => (
                    <div key={i} className="p-3 glass-card hover:bg-primary/5 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <p className="text-sm font-medium text-foreground">{doc.num}</p>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded bg-provia-teal/20 text-provia-teal">
                          {doc.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{doc.client}</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Documents", value: "1.2k" },
                    { label: "Taille", value: "2.4 Go" },
                    { label: "Sécurisés", value: "100%" },
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
                    { icon: FolderOpen, text: "Documents éparpillés partout", color: "destructive" },
                    { icon: Search, text: "Recherches qui durent des heures", color: "destructive" },
                    { icon: AlertTriangle, text: "Risque de non-conformité", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "J'ai perdu 3 jours à chercher une vieille facture pour le contrôle..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Comptable PME, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                La galère des <span className="text-gradient-orange">documents introuvables</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Un client demande une copie d'une vieille facture. Un contrôle fiscal nécessite des documents d'il y a 3 ans. Un litige sur une intervention passée. Sans système d'archivage, ces situations deviennent des cauchemars.
              </p>

              <ul className="space-y-3">
                {[
                  "Documents éparpillés sur plusieurs ordinateurs",
                  "Dossiers clients non organisés ou perdus",
                  "Recherches qui prennent des heures",
                  "Risque de non-conformité fiscale",
                  "Pas de backup en cas de panne",
                  "Documents papier qui s'abîment",
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
                Un <span className="text-gradient-orange">archivage automatique</span> et intelligent
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE archive automatiquement tous vos documents. Chaque devis, facture ou rapport est classé, sécurisé et retrouvable en quelques secondes.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Archive, text: "Archivage automatique de tous les documents" },
                  { icon: Search, text: "Recherche instantanée par critères multiples" },
                  { icon: Clock, text: "Conservation illimitée et conformité légale" },
                  { icon: Shield, text: "Hébergement sécurisé avec sauvegardes" },
                  { icon: Download, text: "Export PDF facile à tout moment" },
                  { icon: Lock, text: "Contrôle d'accès et traçabilité" },
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
                      <Archive className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Recherche avancée</p>
                      <p className="text-xs text-muted-foreground">Trouvez tout en 5 secondes</p>
                    </div>
                  </div>

                  {/* Search Filters */}
                  <div className="space-y-3 mb-4">
                    {[
                      { label: "Type de document", value: "Facture" },
                      { label: "Client", value: "Dupont SARL" },
                      { label: "Période", value: "2023" },
                    ].map((filter, i) => (
                      <div key={i} className="glass-card p-3">
                        <p className="text-xs text-muted-foreground mb-1">{filter.label}</p>
                        <p className="text-sm font-medium text-foreground">{filter.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="glass-card p-3 mb-4 bg-provia-teal/5 border-provia-teal/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-provia-teal" />
                      <p className="text-sm font-medium text-foreground">8 documents trouvés</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Temps de recherche: 0.3 secondes</p>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Download, label: "Télécharger" },
                      { icon: FileText, label: "Aperçu" },
                    ].map((action, i) => (
                      <div key={i} className="glass-card p-3 text-center hover:bg-primary/5 transition-colors cursor-pointer">
                        <action.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                        <p className="text-xs text-foreground">{action.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Security Badge */}
                  <div className="mt-4 p-3 glass-card bg-provia-teal/5 border-provia-teal/20 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-provia-teal" />
                      <p className="text-sm font-medium text-provia-teal">Archivage sécurisé et conforme</p>
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
              Les bénéfices de l'<span className="text-gradient-orange">archivage numérique</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Sécurisez vos documents et assurez votre conformité légale sans effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Search, title: "Recherche rapide", desc: "Trouvez tout en 5 secondes" },
              { icon: CheckCircle2, title: "Conformité légale", desc: "Obligations respectées" },
              { icon: Shield, title: "Zéro perte", desc: "Sauvegardes automatiques" },
              { icon: Archive, title: "Économies", desc: "Fini le stockage papier" },
              { icon: Download, title: "Accès partout", desc: "Depuis n'importe où" },
              { icon: Clock, title: "Preuves datées", desc: "Horodatage en cas de litige" },
              { icon: FileText, title: "Historique complet", desc: "Toute l'activité archivée" },
              { icon: Lock, title: "Sérénité", desc: "Prêt pour les contrôles" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
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
              Sécurisez vos <span className="text-gradient-orange">documents</span> définitivement
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment Provia BASE peut vous libérer des soucis d'archivage. Démonstration gratuite avec vos propres cas d'usage.
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

export default Archivage;
