import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  Eye,
  Clock,
  FileText,
  History,
  TrendingUp,
  AlertCircle,
  AlertTriangle,
  Check,
  Zap
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const SuiviInterventions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Suivi des interventions - Suivez l'avancement en temps réel"
        description="Suivez vos interventions en temps réel avec Provia BASE. Statuts, rapports, historique, indicateurs de performance. Gardez le contrôle sur toutes vos opérations terrain."
        keywords="suivi interventions, suivi temps réel, gestion interventions, rapport intervention, historique interventions, tableau de bord interventions"
        canonical="/fonctionnalites/suivi-interventions"
      />
      <Navbar />

      {/* SECTION 1 - HERO (2 colonnes) */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center max-sm:py-0 pt-16 sm:pt-32 pb-8 sm:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="glow-orange top-20 -right-40 opacity-30 animate-pulse-glow" />
        <div className="glow-teal top-1/2 -left-60 opacity-30 animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne A - Texte */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-primary font-medium text-xs sm:text-lg">Fonctionnalité Suivi</p>
              <h1 className="text-[1.65rem] leading-[1.25] font-medium tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl sm:font-bold">
                <span className="sm:hidden"><span className="text-gradient-orange">Suivez</span> chaque intervention client depuis votre bureau</span>
                <span className="hidden sm:inline"><span className="text-gradient-orange">Suivez</span> chaque intervention client depuis votre bureau</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl">
                Avec le suivi des interventions Provia BASE, vous savez toujours où en sont vos équipes. Statuts en temps réel, rapports détaillés, historique complet.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Eye, text: "Statuts en temps réel" },
                  { icon: Clock, text: "Horodatage automatique" },
                  { icon: FileText, text: "Rapports d'intervention complets" },
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
                  Voir le suivi en démo
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

            {/* Colonne B - Mockup Suivi */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 sm:p-6 lg:p-6 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Tableau de bord suivi</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Interventions en cours */}
                <div className="glass-card p-4 mb-4">
                  <p className="text-xs text-muted-foreground mb-3">Interventions aujourd'hui</p>

                  <div className="space-y-2">
                    {[
                      { tech: "Jean M.", client: "Dupont SARL", status: "En cours", time: "09:00", color: "provia-teal" },
                      { tech: "Marie L.", client: "Martin & Co", status: "Terminée", time: "14:00", color: "provia-teal" },
                      { tech: "Paul D.", client: "ABC Corp", status: "À venir", time: "16:30", color: "provia-yellow" },
                    ].map((item, i) => (
                      <div key={i} className="p-3 glass-card">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.client}</p>
                            <p className="text-xs text-muted-foreground">{item.tech} • {item.time}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded bg-${item.color}/20 text-${item.color}`}>
                            {item.status}
                          </span>
                        </div>
                        {item.status === "En cours" && (
                          <div className="w-full bg-muted/30 rounded-full h-1.5">
                            <div className="bg-provia-teal h-1.5 rounded-full" style={{ width: '65%' }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Terminées", value: "8", color: "provia-teal" },
                    { label: "En cours", value: "3", color: "provia-yellow" },
                    { label: "Planifiées", value: "12", color: "primary" },
                  ].map((stat, i) => (
                    <div key={i} className="glass-card p-2 text-center">
                      <p className={`text-lg font-bold text-${stat.color}`}>{stat.value}</p>
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
                    { icon: AlertCircle, text: "Aucune visibilité sur l'avancement", color: "destructive" },
                    { icon: Clock, text: "Retards découverts trop tard", color: "destructive" },
                    { icon: FileText, text: "Impossible de prouver les interventions", color: "destructive" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg">
                      <item.icon className="w-5 h-5 text-destructive" />
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Je ne savais jamais où en étaient mes équipes..."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">— Manager opérationnel, avant Provia BASE</p>
                </div>
              </div>
            </div>

            {/* Colonne B - Texte problème */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold sm:font-bold">
                Sans suivi, vous <span className="text-gradient-orange">naviguez à l'aveugle</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Comment répondre à un client qui demande "où en est ma commande ?" si vous n'avez pas de visibilité sur le travail de vos équipes ? Le manque de suivi crée frustration et inefficacité.
              </p>

              <ul className="space-y-3">
                {[
                  "Aucune visibilité sur l'avancement des missions",
                  "Clients qui appellent pour savoir où en est le technicien",
                  "Retards découverts trop tard pour réagir",
                  "Impossible de prouver qu'une intervention a eu lieu",
                  "Pas de données pour améliorer les processus",
                  "Managers obligés d'appeler les techniciens",
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
                Un <span className="text-gradient-orange">suivi complet</span> et transparent
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                Provia BASE vous donne une visibilité totale sur toutes vos interventions. Statuts en temps réel, rapports détaillés et historique complet : pilotez par les données.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Eye, text: "Statuts temps réel (planifié, en cours, terminé)" },
                  { icon: Clock, text: "Horodatage automatique début/fin/durée" },
                  { icon: FileText, text: "Rapports complets avec photos et observations" },
                  { icon: History, text: "Historique consultable par client ou technicien" },
                  { icon: TrendingUp, text: "Indicateurs de performance détaillés" },
                  { icon: AlertCircle, text: "Alertes automatiques en cas de problème" },
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
                      <Activity className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Suivi détaillé</p>
                      <p className="text-xs text-muted-foreground">Intervention N°2024-0142</p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    {[
                      { time: "09:00", label: "Intervention commencée", done: true },
                      { time: "09:45", label: "Diagnostic effectué", done: true },
                      { time: "10:30", label: "Réparation en cours", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 glass-card">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.done ? 'bg-provia-teal/20' : 'bg-primary/10'}`}>
                          {item.done ? (
                            <Check className="w-4 h-4 text-provia-teal" />
                          ) : (
                            <Clock className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${item.done ? 'text-muted-foreground' : 'text-foreground'}`}>
                            {item.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats intervention */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="glass-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">Durée estimée</p>
                      <p className="text-lg font-bold text-foreground">2h30</p>
                    </div>
                    <div className="glass-card p-3">
                      <p className="text-xs text-muted-foreground mb-1">Avancement</p>
                      <p className="text-lg font-bold text-provia-teal">65%</p>
                    </div>
                  </div>

                  {/* Alerte */}
                  <div className="mt-3 p-3 glass-card bg-provia-yellow/5 border-provia-yellow/20">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-provia-yellow" />
                      <p className="text-xs font-medium text-foreground">Pièce en attente de livraison</p>
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
              Les bénéfices du <span className="text-gradient-orange">suivi en temps réel</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Reprenez le contrôle de vos opérations et améliorez votre réactivité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Eye, title: "Visibilité totale", desc: "Réponse immédiate aux clients" },
              { icon: Zap, title: "Réactivité", desc: "Face aux imprévus et retards" },
              { icon: FileText, title: "Preuves solides", desc: "En cas de contestation" },
              { icon: TrendingUp, title: "Données objectives", desc: "Pour les évaluations" },
              { icon: AlertCircle, title: "Détection rapide", desc: "Des goulots d'étranglement" },
              { icon: CheckCircle2, title: "Amélioration continue", desc: "Des processus métier" },
              { icon: Clock, title: "Transparence", desc: "Avec clients et partenaires" },
              { icon: Activity, title: "Moins de stress", desc: "Pour les managers" },
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
              Prenez le <span className="text-gradient-orange">contrôle</span> de vos interventions
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-8">
              Découvrez comment le suivi temps réel Provia BASE peut transformer votre visibilité opérationnelle. Démonstration gratuite.
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

export default SuiviInterventions;
