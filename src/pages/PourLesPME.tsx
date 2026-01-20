import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Building2,
  Network,
  Users,
  BarChart3,
  Settings,
  Smartphone,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-5 sm:px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PourLesPME = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour PME - Pilotez votre croissance efficacement"
        description="Provia BASE est le logiciel de gestion pour PME qui centralise équipes, clients, devis et factures. Gagnez en productivité et pilotez votre activité avec précision."
        keywords="logiciel gestion PME, logiciel PME, gestion moyenne entreprise, ERP PME, CRM PME, gestion équipes PME"
        canonical="/pour-les-pme"
      />
      <Navbar />

      {/* HERO Section */}
      <section className="relative min-h-[100dvh] sm:min-h-screen pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-20 lg:pb-32 overflow-hidden flex flex-col max-sm:justify-start justify-center max-sm:py-0">
        {/* Background Glows */}
        <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-30 sm:opacity-100 max-sm:hidden" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-25 sm:opacity-100 max-sm:hidden" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10 max-sm:pt-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in max-sm:text-center">
              <span className="inline-block text-primary font-medium text-xs sm:text-lg tracking-wide max-sm:px-3 max-sm:py-1.5 max-sm:border max-sm:border-primary/40 max-sm:rounded-full max-sm:bg-primary/5">Logiciel de gestion pour PME</span>
              <h1 className="text-[1.65rem] leading-[1.25] sm:text-4xl lg:text-5xl font-medium sm:font-bold tracking-tight">
                <span className="sm:hidden">Logiciel pensé pour <span className="text-gradient-orange">PME</span></span>
                <span className="hidden sm:inline">Logiciel pensé pour les <span className="text-gradient-orange">PME</span> avec équipes terrain</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground">
                <span className="sm:hidden">Coordonnez vos équipes et suivez votre activité en temps réel.</span>
                <span className="hidden sm:inline">Votre entreprise grandit et la complexité augmente ? Provia BASE vous offre les outils pour coordonner vos équipes, suivre votre activité et prendre les bonnes décisions. Un logiciel de gestion PME complet, sans la lourdeur des ERP traditionnels.</span>
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Users, text: "Gestion multi-équipes simplifiée" },
                  { icon: BarChart3, text: "Tableaux de bord en temps réel" },
                  { icon: Settings, text: "Workflows personnalisables" },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base font-medium">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  <span className="sm:hidden">Démo gratuite</span>
                  <span className="hidden sm:inline">Demander une démo gratuite</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/fonctionnalites"
                  className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold"
                >
                  <span className="sm:hidden">Fonctionnalités</span>
                  <span className="hidden sm:inline">Voir les fonctionnalités</span>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2 max-sm:justify-center">
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Scalable</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1 max-sm:hidden"><Check className="w-4 h-4 text-provia-teal" /> Support dédié</span>
              </p>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 lg:p-6 animate-float">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Vue consolidée PME</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">156 k€</p>
                    <p className="text-xs text-muted-foreground">CA ce mois</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-foreground">28</p>
                    <p className="text-xs text-muted-foreground">Devis en cours</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">15</p>
                    <p className="text-xs text-muted-foreground">Techniciens</p>
                  </div>
                </div>

                {/* Teams Overview */}
                <div className="glass-card p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Équipes actives</p>
                  <div className="space-y-2">
                    {[
                      { name: "Équipe Nord", count: "5 tech.", color: "bg-blue-500/20 text-blue-600" },
                      { name: "Équipe Sud", count: "4 tech.", color: "bg-green-500/20 text-green-600" },
                      { name: "Équipe Est", count: "6 tech.", color: "bg-purple-500/20 text-purple-600" },
                    ].map((team, i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-xs text-foreground font-medium">{team.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${team.color}`}>
                          {team.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Chart Placeholder */}
                <div className="glass-card p-3">
                  <p className="text-xs text-muted-foreground mb-2">Performance globale</p>
                  <div className="flex items-end gap-2 h-16">
                    {[60, 75, 85, 70, 90, 95, 80].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROBLÈME Section - Inverted */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-orange bottom-0 left-0 opacity-40 sm:opacity-100" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Mockup */}
            <div className="relative order-2 lg:order-1 animate-fade-in hidden sm:block">
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-destructive/10 rounded-full blur-3xl" />

                {/* Problem Illustration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg">Silos d'information</h3>
                  </div>

                  {[
                    { label: "Équipe A", info: "Excel local", icon: "👥" },
                    { label: "Équipe B", info: "Outil différent", icon: "👥" },
                    { label: "Direction", info: "Données partielles", icon: "📊" },
                    { label: "Terrain", info: "Appels constants", icon: "📱" },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 bg-destructive/5 flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.info}</p>
                      </div>
                      <span className="text-destructive">✗</span>
                    </div>
                  ))}

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">= Manque de visibilité</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <Network className="w-5 h-5 sm:w-7 sm:h-7 text-destructive" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                  <span className="sm:hidden">Défis de <span className="text-gradient-orange">croissance</span></span>
                  <span className="hidden sm:inline">Les défis de la <span className="text-gradient-orange">croissance</span></span>
                </h2>
              </div>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">En grandissant, les processus manuels deviennent des freins. La coordination et la visibilité sont critiques.</span>
                <span className="hidden sm:inline">À mesure que votre PME se développe, les processus qui fonctionnaient "à la main" deviennent des freins. La coordination entre services, le suivi des projets et la visibilité sur les performances deviennent critiques.</span>
              </p>

              <div className="space-y-3">
                {[
                  { text: "Informations dispersées entre plusieurs outils", show: true },
                  { text: "Difficultés à coordonner plusieurs équipes", show: true },
                  { text: "Manque de visibilité sur la rentabilité par projet", show: true },
                  { text: "Temps perdu en réunions de synchronisation", show: false },
                  { text: "Retards dans la facturation et le suivi des paiements", show: false },
                  { text: "Difficultés à déléguer sans perdre le contrôle", show: false }
                ].map((problem, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 bg-destructive/5 rounded-lg ${!problem.show ? 'max-sm:hidden' : ''}`}>
                    <span className="text-destructive font-bold text-sm sm:text-base">✗</span>
                    <span className="text-foreground text-sm sm:text-base">{problem.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SOLUTION Section */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        <div className="glow-teal top-0 right-0 opacity-40 sm:opacity-100" />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                <span className="sm:hidden"><span className="text-gradient-orange">Plateforme unifiée</span> pour votre activité</span>
                <span className="hidden sm:inline">Une <span className="text-gradient-orange">plateforme unifiée</span> pour toute votre activité</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">Centralisez toutes vos données. Source unique pour toute l'entreprise.</span>
                <span className="hidden sm:inline">Provia BASE centralise toutes les informations dont vous avez besoin pour piloter votre PME efficacement. Une source unique de vérité pour toute l'entreprise.</span>
              </p>

              <ul className="space-y-4">
                {[
                  { icon: Users, title: "Gestion multi-équipes", desc: "Assignez, suivez et coordonnez facilement", show: true },
                  { icon: BarChart3, title: "Tableaux de bord avancés", desc: "Vision temps réel de votre activité", show: true },
                  { icon: Settings, title: "Workflows personnalisables", desc: "Adaptez à vos processus métier", show: true },
                  { icon: Shield, title: "Gestion des droits", desc: "Contrôle fin des accès utilisateurs", show: false },
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${!feature.show ? 'max-sm:hidden' : ''}`}>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-provia-teal/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-provia-teal" />
                    </div>
                    <div>
                      <span className="text-foreground text-sm sm:text-base font-semibold block">{feature.title}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{feature.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Mockup */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-6 relative overflow-hidden animate-float">
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-provia-teal/20 rounded-full blur-3xl" />

                {/* Solution Illustration */}
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center">
                      <Check className="w-6 h-6 text-provia-teal" />
                    </div>
                    <h3 className="font-semibold text-lg">Hub centralisé</h3>
                  </div>

                  <div className="glass-card p-4 bg-provia-teal/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-5 h-5 text-provia-teal" />
                      <span className="font-semibold text-sm">Provia BASE - Tous connectés</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { label: "Direction", access: "Vue 360°", icon: BarChart3 },
                        { label: "Équipes", access: "Missions & planning", icon: Users },
                        { label: "Terrain", access: "App mobile", icon: Smartphone },
                      ].map((item, i) => (
                        <div key={i} className="glass-card p-3 flex items-center gap-3">
                          <item.icon className="w-4 h-4 text-provia-teal" />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-foreground">{item.label}</p>
                            <p className="text-[10px] text-muted-foreground">{item.access}</p>
                          </div>
                          <Check className="w-4 h-4 text-provia-teal" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm font-semibold text-provia-teal">= Coordination parfaite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BÉNÉFICES Section - Cards Grid */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-4">
              <span className="sm:hidden">Bénéfices pour votre <span className="text-gradient-orange">PME</span></span>
              <span className="hidden sm:inline">Les bénéfices pour votre <span className="text-gradient-orange">PME</span></span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              <span className="sm:hidden">Transformez votre organisation</span>
              <span className="hidden sm:inline">Transformez votre organisation et accélérez votre croissance</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Vision 360°",
                description: "Visualisez toute votre activité en temps réel",
                show: true
              },
              {
                icon: Users,
                title: "Coordination fluide",
                description: "Bureau et équipes terrain synchronisés",
                show: true
              },
              {
                icon: Shield,
                title: "Réduction des erreurs",
                description: "Centralisation et automatisation",
                show: true
              },
              {
                icon: TrendingUp,
                title: "Décisions éclairées",
                description: "Indicateurs de performance en temps réel",
                show: false
              },
              {
                icon: Zap,
                title: "Scalabilité",
                description: "L'outil grandit avec votre entreprise",
                show: false
              },
              {
                icon: Settings,
                title: "Déploiement rapide",
                description: "Sans projet informatique lourd",
                show: false
              },
            ].map((benefit, i) => (
              <div key={i} className={`glass-card p-6 hover:shadow-lg transition-shadow ${!benefit.show ? 'max-sm:hidden' : ''}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-provia-teal/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-provia-teal" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Final */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-5 sm:px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-6">
              <span className="sm:hidden">Équipez votre <span className="text-gradient-orange">PME</span> pour la croissance</span>
              <span className="hidden sm:inline">Donnez à votre <span className="text-gradient-orange">PME</span> les outils de sa croissance</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-lg">
              <span className="sm:hidden">Transformez votre gestion. Démo personnalisée incluse.</span>
              <span className="hidden sm:inline">Découvrez comment Provia BASE peut transformer la gestion de votre entreprise. Démonstration personnalisée et conseil sur mesure inclus.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <span className="sm:hidden">Démo gratuite</span>
                <span className="hidden sm:inline">Demander une démo gratuite</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/#tarifs"
                className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
              >
                <span className="sm:hidden">Tarifs</span>
                <span className="hidden sm:inline">Voir les tarifs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourLesPME;
