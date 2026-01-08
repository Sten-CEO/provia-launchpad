import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Store,
  GitBranch,
  Building2,
  BarChart3,
  Users,
  Shield,
  Smartphone,
  Zap,
  Settings
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PourLesFranchises = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour franchises et réseaux d'agences"
        description="Provia BASE est le logiciel de gestion pour franchises et réseaux : gestion multi-sites, suivi des équipes terrain, reporting centralisé. Pilotez votre réseau efficacement."
        keywords="logiciel franchise, gestion franchise, logiciel multi-sites, gestion réseau agences, CRM franchise, logiciel réseau"
        canonical="/pour-les-franchises"
      />
      <Navbar />

      {/* HERO Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 lg:pb-32 overflow-hidden">
        {/* Background Glows */}
        <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-40 sm:opacity-100" />
        <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-40 sm:opacity-100" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-8 animate-fade-in">
              <p className="text-primary font-semibold text-sm sm:text-lg">Logiciel de gestion pour franchises</p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight">
                <span className="sm:hidden">Gestion <span className="text-gradient-orange">franchises</span> & réseaux</span>
                <span className="hidden sm:inline">Logiciel de gestion pour <span className="text-gradient-orange">franchises</span> et réseaux d'agences</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground">
                <span className="sm:hidden">Centralisez la gestion multi-sites. Vision consolidée et autonomie locale.</span>
                <span className="hidden sm:inline">Vous gérez un réseau de franchises ou plusieurs agences ? Provia BASE centralise la gestion de tous vos points de vente. Vision consolidée, autonomie locale, reporting unifié. Gardez le contrôle tout en donnant de la flexibilité à vos franchisés.</span>
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Building2, text: "Gestion multi-sites centralisée" },
                  { icon: BarChart3, text: "Reporting consolidé réseau" },
                  { icon: Users, text: "Gestion des droits par site" },
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm sm:text-base">{benefit.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/demo"
                  className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Demander une démo réseau
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/fonctionnalites"
                  className="btn-secondary px-6 sm:px-8 py-2.5 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
                >
                  Voir les fonctionnalités
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 sm:w-4 sm:h-4 text-provia-teal" /> Multi-sites</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 sm:w-4 sm:h-4 text-provia-teal" /> Cloisonné</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1 max-sm:hidden"><Check className="w-4 h-4 text-provia-teal" /> Reporting unifié</span>
              </p>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 lg:p-6 animate-float">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Vue réseau franchise</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">12</p>
                    <p className="text-xs text-muted-foreground">Agences</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-foreground">845 k€</p>
                    <p className="text-xs text-muted-foreground">CA Total</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">48</p>
                    <p className="text-xs text-muted-foreground">Techniciens</p>
                  </div>
                </div>

                {/* Sites List */}
                <div className="glass-card p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Performance par site</p>
                  <div className="space-y-2">
                    {[
                      { name: "Paris Nord", ca: "125 k€", perf: 95, color: "bg-green-500" },
                      { name: "Lyon Est", ca: "98 k€", perf: 85, color: "bg-blue-500" },
                      { name: "Marseille Sud", ca: "87 k€", perf: 78, color: "bg-yellow-500" },
                      { name: "Toulouse", ca: "72 k€", perf: 70, color: "bg-orange-500" },
                    ].map((site, i) => (
                      <div key={i} className="p-2 rounded bg-muted/30">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-foreground">{site.name}</span>
                          <span className="text-[10px] text-muted-foreground">{site.ca}</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className={`h-full ${site.color}`} style={{ width: `${site.perf}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Stats */}
                <div className="glass-card p-3">
                  <p className="text-xs text-muted-foreground mb-2">Réseau consolidé</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center p-2 bg-primary/5 rounded">
                      <p className="text-lg font-bold text-primary">156</p>
                      <p className="text-[10px] text-muted-foreground">Devis actifs</p>
                    </div>
                    <div className="text-center p-2 bg-provia-teal/5 rounded">
                      <p className="text-lg font-bold text-provia-teal">89</p>
                      <p className="text-[10px] text-muted-foreground">Interventions</p>
                    </div>
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
                    <h3 className="font-semibold text-lg">Données éparpillées</h3>
                  </div>

                  {[
                    { site: "Agence A", tool: "Excel local", icon: "🏢" },
                    { site: "Agence B", tool: "Autre système", icon: "🏢" },
                    { site: "Agence C", tool: "Papier", icon: "🏢" },
                    { site: "Siège", tool: "Pas de vue globale", icon: "🏛️" },
                  ].map((item, i) => (
                    <div key={i} className="glass-card p-4 bg-destructive/5 flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.site}</p>
                        <p className="text-xs text-muted-foreground">{item.tool}</p>
                      </div>
                      <span className="text-destructive">✗</span>
                    </div>
                  ))}

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">= Impossible à piloter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 sm:w-7 sm:h-7 text-destructive" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                  <span className="sm:hidden">Défis gestion <span className="text-gradient-orange">réseau</span></span>
                  <span className="hidden sm:inline">Les défis de la gestion <span className="text-gradient-orange">multi-sites</span></span>
                </h2>
              </div>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">Jonglez entre vision globale et gestion locale sans perdre le contrôle.</span>
                <span className="hidden sm:inline">Piloter un réseau de franchises ou d'agences implique de jongler entre vision globale et gestion locale. Sans outil adapté, vous perdez en visibilité et vos franchisés manquent d'autonomie.</span>
              </p>

              <div className="space-y-2 sm:space-y-3">
                {[
                  "Données éparpillées entre les différents sites",
                  "Pas de vision consolidée de l'activité réseau",
                  "Difficultés à comparer les performances",
                  "Processus non harmonisés entre agences",
                  "Formation longue pour chaque nouveau franchisé",
                  "Manque de contrôle sur l'image de marque"
                ].map((problem, i) => (
                  <div key={i} className={`flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 bg-destructive/5 rounded-lg ${i >= 4 ? 'max-sm:hidden' : ''}`}>
                    <span className="text-destructive font-bold text-sm sm:text-base">✗</span>
                    <span className="text-foreground text-sm sm:text-base">{problem}</span>
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
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                <span className="sm:hidden">La <span className="text-gradient-orange">plateforme réseau</span></span>
                <span className="hidden sm:inline">Une <span className="text-gradient-orange">plateforme unifiée</span> pour tout votre réseau</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">Autonomie locale et vision d'ensemble en un outil.</span>
                <span className="hidden sm:inline">Provia BASE s'adapte aux besoins des réseaux de franchises et d'agences multiples. Chaque site reste autonome tout en contribuant à une vision d'ensemble.</span>
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: Building2, title: "Gestion multi-sites", desc: "Chaque agence a son espace sécurisé" },
                  { icon: BarChart3, title: "Reporting consolidé", desc: "Vue globale depuis un seul tableau de bord" },
                  { icon: Users, title: "Gestion des droits", desc: "Contrôle précis pour chaque franchisé" },
                  { icon: Shield, title: "Processus standardisés", desc: "Mêmes modèles pour tout le réseau" },
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-provia-teal/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-provia-teal" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold block text-sm sm:text-base">{feature.title}</span>
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
                    <h3 className="font-semibold text-lg">Réseau unifié</h3>
                  </div>

                  {/* Network Diagram */}
                  <div className="glass-card p-4 bg-provia-teal/5">
                    <div className="flex items-center gap-2 mb-4">
                      <Store className="w-5 h-5 text-provia-teal" />
                      <span className="font-semibold text-sm">Provia BASE - Réseau</span>
                    </div>

                    <div className="space-y-2">
                      <div className="glass-card p-3 bg-primary/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="text-xs font-medium">Siège</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground">Vue consolidée + paramétrage global</p>
                        <Check className="w-4 h-4 text-provia-teal ml-auto" />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {["Agence A", "Agence B", "Agence C", "Agence D"].map((agence, i) => (
                          <div key={i} className="glass-card p-2 bg-background/50 text-center">
                            <Store className="w-3 h-3 text-provia-teal mx-auto mb-1" />
                            <p className="text-[9px] font-medium text-foreground">{agence}</p>
                            <p className="text-[8px] text-muted-foreground">Autonome</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm font-semibold text-provia-teal">= Pilotage simplifié</p>
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
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                <Store className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-3 sm:mb-4">
              <span className="sm:hidden">Avantages <span className="text-gradient-orange">réseau</span></span>
              <span className="hidden sm:inline">Les avantages pour votre <span className="text-gradient-orange">réseau</span></span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Développez votre franchise en gardant le contrôle
            </p>
          </div>

          {/* Mobile: 2 columns, limited items */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: BarChart3,
                title: "Vision globale",
                description: "Suivez l'activité de tout le réseau en temps réel"
              },
              {
                icon: Building2,
                title: "Autonomie locale",
                description: "Chaque franchisé gère son agence librement"
              },
              {
                icon: Users,
                title: "Comparaison sites",
                description: "Identifiez les meilleures pratiques"
              },
              {
                icon: Shield,
                title: "Processus harmonisés",
                description: "Documents et workflows uniformes"
              },
              {
                icon: Zap,
                title: "Déploiement rapide",
                description: "Nouvelle agence opérationnelle en minutes"
              },
              {
                icon: Smartphone,
                title: "App terrain unifiée",
                description: "Même outil pour tous les techniciens"
              },
            ].map((benefit, i) => (
              <div key={i} className={`glass-card p-4 sm:p-6 hover:shadow-lg transition-shadow ${i >= 4 ? 'max-sm:hidden' : ''}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-provia-teal/10 flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-provia-teal" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-base">{benefit.description}</p>
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-4 sm:mb-6">
              <span className="sm:hidden">Prêt à <span className="text-gradient-orange">structurer</span> ?</span>
              <span className="hidden sm:inline">Structurez la gestion de votre <span className="text-gradient-orange">réseau</span></span>
            </h2>
            <p className="text-muted-foreground mb-5 sm:mb-8 text-sm sm:text-lg">
              <span className="sm:hidden">Démo gratuite adaptée à votre franchise.</span>
              <span className="hidden sm:inline">Découvrez comment Provia BASE peut accompagner le développement de votre franchise ou réseau d'agences. Démonstration adaptée à votre structure.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo réseau
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                to="/#tarifs"
                className="btn-secondary px-6 sm:px-8 py-2.5 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
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

export default PourLesFranchises;
