import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Bell,
  Repeat,
  LayoutGrid,
  AlertTriangle,
  Check,
  Zap
} from "lucide-react";
import heroImagePlanning from "@/assets/Planification.jpeg";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PlanningInterventions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Planning d'interventions - Planifiez et optimisez vos missions"
        description="Planifiez vos interventions efficacement avec Provia BASE. Vue calendrier, assignation aux équipes, optimisation des déplacements, rappels automatiques. Solution de planning pour TPE et PME."
        keywords="planning interventions, logiciel planning, gestion planning, planification interventions, calendrier interventions, planning techniciens"
        canonical="/fonctionnalites/planning-interventions"
      />
      <Navbar />

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-[100dvh] flex flex-col max-sm:justify-start justify-center max-sm:py-0 max-sm:pb-4 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Mobile Hero Image - Right side, top section only */}
        <div className="sm:hidden absolute top-0 -right-4 w-[40%] h-[55%] z-0">
          <div
            className="absolute inset-0 bg-contain bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImagePlanning})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          {/* Mobile: Badge + Headline at top left ON the image */}
          <div className="sm:hidden space-y-4 animate-fade-in max-w-[75%] mb-8">
            <span className="inline-block text-primary font-medium text-xs px-3 py-1.5 border border-primary/40 rounded-full bg-primary/5">Fonctionnalité Planning</span>
            <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight">
              <span className="text-gradient-orange">Planning</span> d'interventions terrain
            </h1>
          </div>

          {/* Mobile: Content below image */}
          <div className="sm:hidden text-center space-y-5 animate-fade-in mt-[8vh]">
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Planifiez vos interventions depuis un calendrier intuitif. Assignez les missions et évitez les conflits d'agenda.
            </p>

            {/* Mobile: Icons with descriptions */}
            <ul className="space-y-3 text-left max-w-xs mx-auto">
              {[
                { icon: LayoutGrid, text: "Vue calendrier jour/semaine/mois" },
                { icon: Users, text: "Assignation intelligente aux équipes" },
                { icon: Bell, text: "Notifications automatiques" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

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
              <span className="inline-block text-primary font-medium text-lg">Fonctionnalité Planning</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Logiciel de <span className="text-gradient-orange">planning d'interventions</span> pour équipes terrain
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Visualisez, planifiez et optimisez toutes vos interventions depuis un calendrier intuitif. Assignez les missions aux bons techniciens et évitez les conflits d'agenda.
              </p>

              <ul className="space-y-4">
                {[
                  { icon: LayoutGrid, text: "Vue calendrier jour/semaine/mois" },
                  { icon: Users, text: "Assignation intelligente aux équipes" },
                  { icon: Bell, text: "Notifications automatiques" },
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
                  Voir le planning en démo
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

            {/* Colonne B - Mockup Planning */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Aperçu planning</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Calendar View */}
                <div className="glass-card p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-foreground">Semaine du 15 Jan 2024</p>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">Jour</span>
                      <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">Semaine</span>
                    </div>
                  </div>

                  {/* Interventions */}
                  <div className="space-y-2">
                    {[
                      { time: "09:00", tech: "Jean M.", client: "Dupont SARL", color: "provia-teal" },
                      { time: "14:00", tech: "Marie L.", client: "Martin & Co", color: "provia-yellow" },
                      { time: "16:30", tech: "Jean M.", client: "Société ABC", color: "primary" },
                    ].map((item, i) => (
                      <div key={i} className={`p-2 rounded-lg bg-${item.color}/10 border-l-2 border-${item.color}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                            <p className="text-sm font-medium text-foreground">{item.client}</p>
                          </div>
                          <span className="text-xs px-2 py-0.5 rounded bg-background/50">{item.tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Planifiées", value: "12" },
                    { label: "En cours", value: "3" },
                    { label: "Terminées", value: "8" },
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
                    { icon: Clock, text: "Planning sur papier ou tableur", color: "destructive" },
                    { icon: AlertTriangle, text: "Conflits d'agenda fréquents", color: "destructive" },
                    { icon: MapPin, text: "Déplacements non optimisés", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Je perdais 1h chaque matin à organiser les tournées..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Chef d'équipe maintenance, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Le casse-tête du <span className="text-gradient-orange">planning quotidien</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Organiser les interventions de manière optimale demande du temps et de la rigueur. Sans outil adapté, c'est une source constante de stress et d'inefficacité.
              </p>

              <ul className="space-y-3">
                {[
                  "Planning difficile à mettre à jour",
                  "Conflits d'agenda découverts au dernier moment",
                  "Déplacements non optimisés, temps perdu",
                  "Techniciens mal informés des changements",
                  "Oubli d'interventions récurrentes",
                  "Clients non prévenus en cas de retard",
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
                Un <span className="text-gradient-orange">planning intelligent</span> à votre service
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE automatise et optimise la planification de vos interventions. Glissez-déposez pour réorganiser, assignez aux équipes et tout le monde est informé instantanément.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: LayoutGrid, text: "Vue calendrier intuitive (jour/semaine/mois)" },
                  { icon: Users, text: "Planning par technicien avec disponibilités" },
                  { icon: MapPin, text: "Optimisation géographique des tournées" },
                  { icon: Bell, text: "Notifications automatiques pour tous" },
                  { icon: Repeat, text: "Interventions récurrentes programmables" },
                  { icon: Zap, text: "Réassignation rapide en cas d'imprévu" },
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
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Planification optimisée</p>
                      <p className="text-xs text-muted-foreground">Mardi 16 Janvier 2024</p>
                    </div>
                  </div>

                  {/* Techniciens disponibles */}
                  <div className="space-y-3">
                    {[
                      { tech: "Jean Martin", slots: "2 créneaux", available: true },
                      { tech: "Marie Leroux", slots: "1 créneau", available: true },
                      { tech: "Paul Dubois", slots: "Complet", available: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 glass-card">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.available ? 'bg-provia-teal/20' : 'bg-muted'}`}>
                            {item.available ? (
                              <Check className="w-4 h-4 text-provia-teal" />
                            ) : (
                              <Clock className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.tech}</p>
                            <p className="text-xs text-muted-foreground">{item.slots}</p>
                          </div>
                        </div>
                        {item.available && (
                          <button className="text-xs px-3 py-1 rounded bg-primary/10 text-primary">
                            Assigner
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Optimisation */}
                  <div className="mt-4 p-4 glass-card bg-provia-teal/5 border-provia-teal/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-provia-teal" />
                      <span className="text-sm font-medium text-foreground">Optimisation trajet</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      3 interventions groupées - Économie: 45 min
                    </p>
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
              Les avantages d'un <span className="text-gradient-orange">planning optimisé</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Gagnez en efficacité opérationnelle et améliorez la satisfaction de vos équipes et clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Plus d'interventions", desc: "Optimisez le nombre de missions par jour" },
              { icon: MapPin, title: "Moins de km", desc: "Regroupez par secteur géographique" },
              { icon: CheckCircle2, title: "Zéro conflit", desc: "Évitez les doubles réservations" },
              { icon: Clock, title: "Meilleure ponctualité", desc: "Clients informés en temps réel" },
              { icon: Zap, title: "Réactivité", desc: "Gérez les urgences facilement" },
              { icon: Users, title: "Charge équilibrée", desc: "Répartition juste entre équipes" },
              { icon: Calendar, title: "Historique complet", desc: "Toutes les interventions archivées" },
              { icon: Bell, title: "Synchro parfaite", desc: "Bureau et terrain connectés" },
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-3 sm:p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.desc}</p>
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
              Optimisez votre <span className="text-gradient-orange">planning</span> dès aujourd'hui
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment Provia BASE peut transformer l'organisation de vos interventions. Démonstration gratuite et personnalisée.
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

export default PlanningInterventions;
