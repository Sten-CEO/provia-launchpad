import { Link } from "react-router-dom";
import { Eye, Heart, Rocket, Check } from "lucide-react";

export const HeroSection = () => {
  const benefits = [
    { icon: Eye, text: "Pilotez votre entreprise d'un seul regard" },
    { icon: Heart, text: "Une application mobile terrain simple pour vos employés" },
    { icon: Rocket, text: "Gestion clients, devis et équipe au même endroit" },
  ];

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 lg:pb-16 overflow-hidden">
      {/* Background Glows - subtler on mobile */}
      <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-50 sm:opacity-100" />
      <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-30 sm:opacity-100" style={{ animationDelay: '1s' }} />
      <div className="glow-green bottom-20 right-1/4 animate-pulse-glow opacity-30 sm:opacity-100" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Refined mobile typography */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-fade-in">
            {/* Mobile: lighter weight, smaller size */}
            <h1 className="text-[1.75rem] leading-[1.2] sm:text-4xl lg:text-5xl xl:text-6xl font-semibold sm:font-bold lg:leading-tight">
              Votre activité enfin{" "}
              <span className="text-gradient-orange">centralisée</span>
              <span className="max-sm:hidden">, du bureau jusqu'au terrain</span>
            </h1>

            {/* Mobile: shorter, punchier copy - SEO content preserved */}
            <div className="space-y-3 sm:space-y-0">
              {/* Mobile-optimized short version */}
              <p className="text-base leading-relaxed text-muted-foreground sm:hidden">
                Centralisez devis, factures, clients et équipes.<br />
                <span className="text-foreground/80">Vos employés terrain restent connectés.</span>
              </p>
              {/* Desktop: full SEO text */}
              <p className="hidden sm:block text-lg lg:text-xl text-muted-foreground max-w-xl">
                Provia BASE est un logiciel de gestion d'entreprise qui centralise vos devis, factures, clients et équipes. Avec son application mobile intervention, vos employés restent connectés au bureau, où qu'ils soient.
              </p>
            </div>

            {/* Benefits - compact on mobile */}
            <ul className="space-y-2.5 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/90 sm:text-foreground font-normal sm:font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs - Single dominant on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-0">
              <a href="#tarifs" className="btn-primary text-center text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Commencer maintenant
              </a>
              <Link to="/demo" className="btn-secondary text-center text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2.5 sm:py-4 max-sm:bg-transparent max-sm:border-0 max-sm:underline max-sm:underline-offset-4">
                <span className="sm:hidden">Voir une démo</span>
                <span className="hidden sm:inline">Réserver une démo avec un expert</span>
              </Link>
            </div>

            {/* Trust signals - horizontal on mobile, minimal */}
            <div className="text-xs sm:text-sm text-muted-foreground flex flex-row flex-wrap items-center gap-x-4 gap-y-1.5 sm:gap-3 pt-2 sm:pt-0">
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" /> Sans engagement</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" /> Support France</span>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-1.5 max-sm:hidden"><Check className="w-4 h-4 text-provia-teal flex-shrink-0" /> Facturation par utilisateur</span>
            </div>
          </div>

          {/* Right - Dashboard + Mobile Preview Card (hidden on mobile for cleaner UX) */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-4 lg:p-6 animate-float">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Votre QG centralisé</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-provia-yellow/60" />
                  <div className="w-3 h-3 rounded-full bg-provia-teal/60" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="glass-card p-3 text-center">
                  <p className="text-2xl font-bold text-gradient-orange">24 350 €</p>
                  <p className="text-xs text-muted-foreground">CA ce mois</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">Devis en attente</p>
                </div>
                <div className="glass-card p-3 text-center">
                  <p className="text-2xl font-bold text-provia-teal">8</p>
                  <p className="text-xs text-muted-foreground">Employés actifs</p>
                </div>
              </div>

              {/* Two Columns: CRM Preview + Mobile Preview */}
              <div className="grid grid-cols-2 gap-3">
                {/* CRM Mini Widget */}
                <div className="glass-card p-3">
                  <p className="text-xs text-muted-foreground mb-2">Clients récents</p>
                  <div className="space-y-2">
                    {["Martin SARL", "Dupont & Fils", "ABC Services"].map((client, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs text-primary font-medium">{client[0]}</span>
                        </div>
                        <span className="text-xs text-foreground truncate">{client}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Preview */}
                <div className="glass-card p-3 flex flex-col items-center justify-center">
                  <div className="w-12 h-20 rounded-lg bg-background/50 border border-border/50 flex flex-col items-center justify-center mb-2">
                    <div className="w-8 h-1 rounded-full bg-muted mb-2" />
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-[8px] text-primary font-bold">APP</span>
                    </div>
                    <div className="w-6 h-1 rounded-full bg-muted mt-2" />
                  </div>
                  <p className="text-[10px] text-muted-foreground text-center">App terrain</p>
                </div>
              </div>

              {/* Tasks List */}
              <div className="glass-card p-3 mt-3">
                <p className="text-xs text-muted-foreground mb-2">Activité équipe</p>
                <div className="space-y-2">
                  {[
                    { title: "Marc - Intervention client", status: "En cours" },
                    { title: "Julie - Devis envoyé", status: "Terminé" },
                    { title: "Pierre - En route", status: "Actif" },
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
  );
};
