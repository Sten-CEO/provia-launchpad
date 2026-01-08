import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  ClipboardList,
  UserCheck,
  AlertTriangle,
  Check,
  Eye,
  Smartphone,
  Shield
} from "lucide-react";
import heroImageGestion from "@/assets/Gestion terrain.png";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const GestionEquipes = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion des équipes terrain - Coordonnez vos techniciens"
        description="Gérez vos équipes terrain efficacement avec Provia BASE. Planning, affectation des missions, suivi en temps réel, communication fluide. Solution pour TPE et PME avec techniciens."
        keywords="gestion équipe terrain, logiciel équipe, planning techniciens, suivi équipe, gestion employés terrain, coordination équipe"
        canonical="/fonctionnalites/gestion-equipes"
      />
      <Navbar />

      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center max-sm:py-0 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Mobile Hero Image - Right side, top section only */}
        <div className="sm:hidden absolute top-0 -right-8 w-[50%] h-[70%] z-0">
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageGestion})` }}
          />
          {/* Gradient fade to left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-in max-sm:max-w-[75%]">
              <p className="text-primary font-medium text-xs sm:text-lg">Fonctionnalité Gestion équipes</p>
              <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl sm:font-bold">
                <span className="sm:hidden">Gestion des <span className="text-gradient-orange">équipes</span> terrain</span>
                <span className="hidden sm:inline">Logiciel de <span className="text-gradient-orange">gestion des équipes</span> terrain</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground sm:max-w-xl">
                Coordonnez vos techniciens, affectez les missions et suivez l'activité de chacun en temps réel. Fini les appels et SMS incessants.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Users, text: "Vision globale de toutes vos équipes" },
                  { icon: Calendar, text: "Plannings centralisés et partagés" },
                  { icon: MapPin, text: "Suivi terrain en temps réel" },
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
                  Voir la gestion d'équipes
                </Link>
                <a href="/#tarifs" className="btn-secondary text-center text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
                  Voir les tarifs
                </a>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> App mobile incluse</span>
              </p>
            </div>

            {/* Mockup Équipes */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Équipes terrain</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">8</p>
                    <p className="text-xs text-muted-foreground">Techniciens</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">6</p>
                    <p className="text-xs text-muted-foreground">En mission</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-yellow">12</p>
                    <p className="text-xs text-muted-foreground">Missions jour</p>
                  </div>
                </div>

                <div className="glass-card p-4">
                  <p className="text-xs text-muted-foreground mb-3">Activité en cours</p>
                  <div className="space-y-3">
                    {[
                      { name: "Marc D.", status: "En intervention", location: "Client Martin", color: "bg-provia-teal/20 text-provia-teal" },
                      { name: "Julie P.", status: "En route", location: "Vers Dupont & Fils", color: "bg-provia-yellow/20 text-provia-yellow" },
                      { name: "Pierre L.", status: "Disponible", location: "Bureau", color: "bg-muted text-muted-foreground" },
                    ].map((emp, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">{emp.name[0]}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{emp.name}</p>
                            <p className="text-xs text-muted-foreground">{emp.location}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded ${emp.color}`}>
                          {emp.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2 - Problème */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="font-semibold text-foreground">Gestion chaotique</p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: MessageSquare, text: "SMS et appels incessants" },
                    { icon: Clock, text: "Temps perdu en coordination" },
                    { icon: Eye, text: "Aucune visibilité terrain" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Je passais 2h par jour au téléphone juste pour savoir où en étaient mes équipes..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Dirigeant entreprise de services</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Le casse-tête de la <span className="text-gradient-orange">coordination terrain</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Gérer des équipes terrain sans outil adapté, c'est une perte de temps considérable et une source de stress quotidien.
              </p>

              <ul className="space-y-3">
                {[
                  "Appels et SMS constants pour savoir où en sont les techniciens",
                  "Planning sur papier ou Excel difficile à partager",
                  "Missions mal réparties, techniciens sous ou surexploités",
                  "Aucune visibilité sur l'avancement des interventions",
                  "Informations client non transmises aux équipes",
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

      {/* SECTION 3 - Solution */}
      <section className="py-10 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-1/2 -right-40" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                <span className="text-gradient-orange">Coordonnez</span> vos équipes sans effort
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE centralise toute la gestion de vos équipes. Affectez les missions, suivez l'avancement et communiquez efficacement.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: UserCheck, text: "Fiches employés (compétences, disponibilités)" },
                  { icon: Calendar, text: "Planning partagé en temps réel" },
                  { icon: ClipboardList, text: "Affectation des missions en quelques clics" },
                  { icon: MapPin, text: "Suivi de la position et de l'avancement" },
                  { icon: Smartphone, text: "App mobile pour les techniciens" },
                  { icon: Shield, text: "Droits d'accès personnalisés" },
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

            <div className="relative">
              <div className="glass-card p-4 sm:p-6 lg:p-6 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Planning équipes</p>
                      <p className="text-xs text-muted-foreground">Aujourd'hui</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { time: "08:00", task: "Intervention Martin SARL", assignee: "Marc D.", done: true },
                      { time: "10:30", task: "Maintenance Dupont", assignee: "Julie P.", done: true },
                      { time: "14:00", task: "Installation ABC Services", assignee: "Marc D.", done: false },
                      { time: "16:00", task: "Dépannage urgent", assignee: "Pierre L.", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 glass-card">
                        <div className={`w-2 h-2 rounded-full ${item.done ? 'bg-provia-teal' : 'bg-provia-yellow'}`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{item.task}</p>
                          <p className="text-xs text-muted-foreground">{item.time} • {item.assignee}</p>
                        </div>
                        {item.done && <Check className="w-4 h-4 text-provia-teal" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4 - Bénéfices */}
      <section className="py-10 sm:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-4">
              Les avantages de la <span className="text-gradient-orange">gestion centralisée</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Gagnez du temps, réduisez le stress et améliorez la productivité de vos équipes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Clock, title: "Gain de temps", desc: "Fini les appels et SMS constants" },
              { icon: Eye, title: "Visibilité", desc: "Suivi en temps réel" },
              { icon: Calendar, title: "Organisation", desc: "Plannings clairs et partagés" },
              { icon: Users, title: "Coordination", desc: "Équipes mieux réparties" },
              { icon: Smartphone, title: "App mobile", desc: "Techniciens connectés" },
              { icon: ClipboardList, title: "Missions", desc: "Affectation simplifiée" },
              { icon: MapPin, title: "Suivi GPS", desc: "Position en temps réel" },
              { icon: CheckCircle2, title: "Productivité", desc: "Plus d'interventions/jour" },
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

      {/* SECTION 5 - CTA */}
      <section className="py-10 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold mb-6">
              Simplifiez la gestion de vos <span className="text-gradient-orange">équipes</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment Provia BASE peut transformer la coordination de vos équipes terrain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo gratuite
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="/#tarifs" className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
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

export default GestionEquipes;
