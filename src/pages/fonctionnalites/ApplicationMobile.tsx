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
  Download,
  AlertTriangle,
  Check,
  FileText,
  Clock
} from "lucide-react";
import heroImageApp from "@/assets/application-mobile.png";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

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

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-[100dvh] flex flex-col max-sm:justify-start justify-center max-sm:py-0 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Mobile Hero Image - App mockup on right, top section only - LARGER for this page */}
        <div className="sm:hidden absolute top-0 -right-4 w-[50%] h-[65%] z-0">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageApp})` }}
          />
          {/* Gradient fade to left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          {/* Mobile: Badge + Headline only at top left */}
          <div className="sm:hidden space-y-4 animate-fade-in max-w-[65%] mb-8">
            <span className="inline-block text-primary font-medium text-xs px-3 py-1.5 border border-primary/40 rounded-full bg-primary/5">Application mobile terrain</span>
            <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight">
              <span className="text-gradient-orange">App mobile</span> pour techniciens terrain
            </h1>
          </div>

          {/* Mobile: Centered content below */}
          <div className="sm:hidden text-center space-y-6 animate-fade-in">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Missions, fiches clients, rapports et signature. Fonctionne même sans connexion internet.
            </p>

            <div className="flex flex-col gap-3 items-center">
              <Link to="/demo" className="btn-primary text-center text-sm px-6 py-3 w-full max-w-xs">
                Voir le module en démo
              </Link>
              <a href="/#tarifs" className="text-primary underline underline-offset-4 text-sm font-medium">
                Voir les tarifs
              </a>
            </div>

            <p className="text-xs text-muted-foreground flex flex-wrap items-center justify-center gap-3">
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-provia-teal" /> Sans engagement</span>
              <span className="flex items-center gap-1"><Check className="w-3 h-3 text-provia-teal" /> Support France</span>
            </p>
          </div>

          {/* Desktop: Original 2-column layout */}
          <div className="hidden sm:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte */}
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-primary font-medium text-lg">Application mobile terrain</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                <span className="text-gradient-orange">Application mobile terrain</span> pour techniciens en intervention
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Équipez vos techniciens d'une application intuitive et complète. Accès aux missions, fiches clients, rapports et signature, même sans connexion internet.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Download, text: "Accès aux missions en temps réel" },
                  { icon: Camera, text: "Photos et signature sur place" },
                  { icon: Wifi, text: "Fonctionne hors ligne" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-row gap-4">
                <Link to="/demo" className="btn-primary text-center text-lg px-8 py-4">
                  Voir l'application en démo
                </Link>
                <a href="/#tarifs" className="btn-secondary text-center text-lg px-8 py-4">
                  Voir les tarifs
                </a>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Support France</span>
              </p>
            </div>

            {/* Colonne B - Mockup Mobile */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">App mobile terrain</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Mobile Screen Preview */}
                <div className="glass-card p-4 mb-4 bg-background/50">
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Mes missions du jour</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-bold text-foreground">3 interventions</span>
                    </div>
                  </div>

                  {/* Mission Cards */}
                  <div className="space-y-2">
                    {[
                      { time: "09:00", client: "Dupont SARL", status: "En cours", color: "provia-teal" },
                      { time: "14:00", client: "Martin & Co", status: "À venir", color: "provia-yellow" },
                      { time: "16:30", client: "Société ABC", status: "Planifié", color: "muted" },
                    ].map((mission, i) => (
                      <div key={i} className={`p-3 rounded-lg bg-${mission.color}/10 border-l-2 border-${mission.color}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <p className="text-xs font-medium text-foreground">{mission.client}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">{mission.time}</span>
                          <span className={`text-xs px-2 py-0.5 rounded bg-${mission.color}/20`}>
                            {mission.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="glass-card p-3 text-center">
                    <Camera className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">Photo</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <FileSignature className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-muted-foreground">Signature</p>
                  </div>
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
                    { icon: Bell, text: "Appels incessants au bureau", color: "destructive" },
                    { icon: FileText, text: "Rapports remplis le soir", color: "destructive" },
                    { icon: Camera, text: "Photos dans téléphones perso", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Mes techniciens m'appelaient 10 fois par jour pour les infos..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Dirigeant TPE, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Le quotidien sans <span className="text-gradient-orange">outil mobile adapté</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Vos techniciens passent leurs journées sur le terrain. Sans application dédiée, ils perdent du temps et vous perdez des informations précieuses.
              </p>

              <ul className="space-y-3">
                {[
                  "Appels au bureau pour obtenir des infos",
                  "Rapports remplis le soir, après les interventions",
                  "Photos stockées dans téléphones personnels",
                  "Informations client inaccessibles sur place",
                  "Signature client sur papier à scanner",
                  "Pas de preuve horodatée du travail",
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
                Une <span className="text-gradient-orange">app complète</span> pour le terrain
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                L'application mobile Provia BASE met toutes les informations dans la poche de vos techniciens. Planning, fiches clients, rapports, photos et signature : tout est centralisé.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Download, text: "Accès aux missions avec détails et itinéraires" },
                  { icon: Smartphone, text: "Fiches clients avec historique complet" },
                  { icon: Camera, text: "Photos horodatées avant/après" },
                  { icon: FileSignature, text: "Signature client sur écran tactile" },
                  { icon: Bell, text: "Notifications push instantanées" },
                  { icon: Wifi, text: "Mode hors ligne avec synchro auto" },
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
              <div className="glass-card p-4 sm:p-6 lg:p-6 border-primary/20 max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Intervention en cours</p>
                      <p className="text-xs text-muted-foreground">Dupont SARL</p>
                    </div>
                  </div>

                  {/* Intervention Details */}
                  <div className="space-y-3 mb-4">
                    <div className="glass-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">Adresse</p>
                      <p className="text-sm font-medium text-foreground">12 rue de la Paix, 75001 Paris</p>
                      <button className="text-xs text-primary mt-1">Voir l'itinéraire →</button>
                    </div>

                    <div className="glass-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">Description</p>
                      <p className="text-sm text-foreground">Maintenance préventive - Climatisation</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    {[
                      { label: "Prendre une photo", icon: Camera, done: true },
                      { label: "Faire signer client", icon: FileSignature, done: false },
                      { label: "Terminer intervention", icon: Check, done: false },
                    ].map((action, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 glass-card">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${action.done ? 'bg-provia-teal/20' : 'bg-primary/10'}`}>
                          <action.icon className={`w-4 h-4 ${action.done ? 'text-provia-teal' : 'text-primary'}`} />
                        </div>
                        <span className={`text-sm ${action.done ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                          {action.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div className="mt-4 p-3 glass-card bg-provia-teal/5 border-provia-teal/20 text-center">
                    <p className="text-sm font-medium text-provia-teal">Synchro automatique active</p>
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
              Les avantages de l'<span className="text-gradient-orange">application mobile</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Autonomie pour les techniciens, sérénité pour le bureau, satisfaction pour les clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Smartphone, title: "Autonomie terrain", desc: "Techniciens mieux informés" },
              { icon: Clock, title: "Rapports instantanés", desc: "Disponibles au bureau en temps réel" },
              { icon: Camera, title: "Preuves photo", desc: "Horodatées en cas de litige" },
              { icon: CheckCircle2, title: "Zéro ressaisie", desc: "Fin de la paperasse" },
              { icon: FileSignature, title: "Signature valide", desc: "Légalement reconnue" },
              { icon: Bell, title: "Moins d'erreurs", desc: "Communication fluide" },
              { icon: Wifi, title: "Mode hors ligne", desc: "Fonctionne partout" },
              { icon: Download, title: "iOS & Android", desc: "Compatible tous appareils" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-3 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-sm:hidden">{benefit.desc}</p>
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
              Équipez vos <span className="text-gradient-orange">équipes terrain</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez l'application mobile Provia BASE en action. Démonstration gratuite avec simulation terrain.
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

export default ApplicationMobile;
