import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  Briefcase,
  Clock,
  FileText,
  Users,
  Euro,
  Calendar,
  Smartphone,
  TrendingUp
} from "lucide-react";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const PourLesTPE = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Logiciel de gestion pour TPE - Gestion simplifiée pour petites entreprises"
        description="Provia BASE est le logiciel de gestion pour TPE qui simplifie votre quotidien : devis, factures, clients, équipes terrain. Solution tout-en-un adaptée aux très petites entreprises."
        keywords="logiciel gestion TPE, logiciel TPE, gestion petite entreprise, devis facture TPE, CRM TPE, application TPE"
        canonical="/pour-les-tpe"
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
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <span className="inline-block text-primary font-medium text-xs sm:text-lg tracking-wide max-sm:px-3 max-sm:py-1.5 max-sm:border max-sm:border-primary/40 max-sm:rounded-full max-sm:bg-primary/5">Logiciel de gestion pour TPE</span>
              <h1 className="text-[1.65rem] leading-[1.25] sm:text-4xl lg:text-5xl font-medium sm:font-bold tracking-tight">
                <span className="sm:hidden">Gestion <span className="text-gradient-orange">TPE</span> simplifiée</span>
                <span className="hidden sm:inline">Logiciel de gestion pour <span className="text-gradient-orange">TPE</span> et artisans indépendants</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground">
                <span className="sm:hidden">Centralisez devis, factures, clients et planning en un seul outil.</span>
                <span className="hidden sm:inline">Vous êtes artisan, indépendant ou dirigez une très petite entreprise ? Provia BASE centralise devis, factures, clients et planning dans un seul outil intuitif. Consacrez votre énergie à votre métier, pas à l'administratif.</span>
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: FileText, text: "Devis et factures en 2 minutes" },
                  { icon: Users, text: "Gestion clients centralisée" },
                  { icon: Calendar, text: "Planning simple et visuel" },
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
                  Demander une démo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  to="/fonctionnalites"
                  className="btn-secondary px-6 sm:px-8 py-2.5 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4"
                >
                  Fonctionnalités
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 sm:w-4 sm:h-4 text-provia-teal" /> Sans engagement</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 sm:w-4 sm:h-4 text-provia-teal" /> Prix TPE</span>
                <span className="text-border max-sm:hidden">•</span>
                <span className="flex items-center gap-1 max-sm:hidden"><Check className="w-4 h-4 text-provia-teal" /> Support en France</span>
              </p>
            </div>

            {/* Right - Dashboard Preview */}
            <div className="relative animate-fade-in hidden sm:block" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-4 lg:p-6 animate-float">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Tableau de bord TPE</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                    <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-gradient-orange">8 450 €</p>
                    <p className="text-xs text-muted-foreground">CA ce mois</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-foreground">4</p>
                    <p className="text-xs text-muted-foreground">Devis actifs</p>
                  </div>
                  <div className="glass-card p-3 text-center">
                    <p className="text-2xl font-bold text-provia-teal">2</p>
                    <p className="text-xs text-muted-foreground">À facturer</p>
                  </div>
                </div>

                {/* Client List */}
                <div className="glass-card p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-2">Clients récents</p>
                  <div className="space-y-2">
                    {["M. Dubois", "Mme Martin", "SARL Dupont"].map((client, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs text-primary font-medium">{client[0]}</span>
                        </div>
                        <span className="text-xs text-foreground truncate">{client}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Tasks */}
                <div className="glass-card p-3">
                  <p className="text-xs text-muted-foreground mb-2">Rendez-vous aujourd'hui</p>
                  <div className="space-y-2">
                    {[
                      { title: "10h - Intervention chez Dubois", status: "En cours" },
                      { title: "14h - Devis Mme Martin", status: "Prévu" },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                        <span className="text-xs text-foreground truncate">{task.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-provia-teal/20 text-provia-teal">
                          {task.status}
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
                    <h3 className="font-semibold text-lg">Outils dispersés</h3>
                  </div>

                  {[
                    { icon: "📄", label: "Devis sur Word", color: "bg-blue-500/10" },
                    { icon: "📊", label: "Clients sur Excel", color: "bg-green-500/10" },
                    { icon: "📓", label: "Planning papier", color: "bg-yellow-500/10" },
                    { icon: "📧", label: "Factures par email", color: "bg-red-500/10" },
                  ].map((item, i) => (
                    <div key={i} className={`glass-card p-4 ${item.color} flex items-center gap-3`}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="ml-auto text-destructive">✗</span>
                    </div>
                  ))}

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">= Temps perdu et erreurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-destructive" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold">
                  <span className="sm:hidden">Défis des <span className="text-gradient-orange">TPE</span></span>
                  <span className="hidden sm:inline">Le défi des <span className="text-gradient-orange">très petites entreprises</span></span>
                </h2>
              </div>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">Vous jonglez entre commercial, technicien, gestionnaire. Chaque minute compte.</span>
                <span className="hidden sm:inline">En tant que dirigeant de TPE, vous jonglez entre plusieurs casquettes : commercial, technicien, gestionnaire, comptable. Chaque minute compte, et pourtant vous perdez un temps précieux sur des tâches administratives répétitives.</span>
              </p>

              <div className="space-y-2 sm:space-y-3">
                {[
                  "Devis créés sur Word ou Excel, jamais uniformes",
                  "Factures envoyées en retard, impayés oubliés",
                  "Historique client éparpillé entre cahiers et mails",
                  "Planning géré de tête ou sur papier",
                  "Pas de vision claire de votre rentabilité",
                  "Temps perdu à chercher des informations"
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
                <span className="sm:hidden">La <span className="text-gradient-orange">solution TPE</span></span>
                <span className="hidden sm:inline">Provia BASE : le <span className="text-gradient-orange">logiciel de gestion TPE</span> qui vous simplifie la vie</span>
              </h2>

              <p className="text-sm sm:text-lg text-muted-foreground">
                <span className="sm:hidden">Tout ce dont vous avez besoin, rien de superflu.</span>
                <span className="hidden sm:inline">Une solution pensée pour les réalités des très petites entreprises, sans complexité inutile. Tout ce dont vous avez besoin, rien de superflu.</span>
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {[
                  { icon: FileText, title: "Devis et factures en 2 minutes", desc: "Documents professionnels rapidement" },
                  { icon: Users, title: "Gestion clients centralisée", desc: "Toutes les infos au même endroit" },
                  { icon: Euro, title: "Suivi des paiements", desc: "Relances automatiques" },
                  { icon: Calendar, title: "Planning visuel", desc: "Fini les oublis" },
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
                    <h3 className="font-semibold text-lg">Tout centralisé</h3>
                  </div>

                  <div className="glass-card p-4 bg-provia-teal/5">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-provia-teal" />
                      <span className="font-semibold text-sm">Provia BASE</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: FileText, label: "Devis" },
                        { icon: Users, label: "Clients" },
                        { icon: Euro, label: "Factures" },
                        { icon: Calendar, label: "Planning" },
                      ].map((item, i) => (
                        <div key={i} className="glass-card p-3 flex items-center gap-2">
                          <item.icon className="w-4 h-4 text-provia-teal" />
                          <span className="text-xs text-foreground">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm font-semibold text-provia-teal">= Gain de temps garanti</p>
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
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold mb-3 sm:mb-4">
              <span className="sm:hidden">Avantages <span className="text-gradient-orange">TPE</span></span>
              <span className="hidden sm:inline">Ce que Provia BASE apporte à votre <span className="text-gradient-orange">TPE</span></span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Des bénéfices concrets dès les premiers jours
            </p>
          </div>

          {/* Mobile: 2 columns, limited items */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Gain de temps",
                description: "Réduisez le temps passé sur l'administratif"
              },
              {
                icon: Briefcase,
                title: "Image pro",
                description: "Documents soignés et cohérents"
              },
              {
                icon: Euro,
                title: "Meilleure tréso",
                description: "Suivi paiements et relances auto"
              },
              {
                icon: Smartphone,
                title: "Accessible partout",
                description: "App mobile terrain"
              },
              {
                icon: TrendingUp,
                title: "Vision claire",
                description: "Tableau de bord synthétique"
              },
              {
                icon: Users,
                title: "Zéro formation",
                description: "Interface intuitive"
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
              <span className="sm:hidden">Prêt à <span className="text-gradient-orange">simplifier</span> ?</span>
              <span className="hidden sm:inline">Prêt à simplifier la gestion de votre <span className="text-gradient-orange">TPE</span> ?</span>
            </h2>
            <p className="text-muted-foreground mb-5 sm:mb-8 text-sm sm:text-lg">
              <span className="sm:hidden">Démo gratuite et sans engagement.</span>
              <span className="hidden sm:inline">Rejoignez les dirigeants de TPE qui ont choisi Provia BASE pour gagner du temps et se concentrer sur leur cœur de métier. Demandez une démonstration gratuite et sans engagement.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/demo"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Demander une démo
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

export default PourLesTPE;
