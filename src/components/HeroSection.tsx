import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] sm:min-h-screen overflow-hidden flex flex-col justify-center max-sm:px-6">
      {/* Background Glows - very subtle on mobile */}
      <div className="glow-orange top-20 -right-40 animate-pulse-glow opacity-20 sm:opacity-100" />
      <div className="glow-teal top-1/2 -left-60 animate-pulse-glow opacity-15 sm:opacity-100" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-0 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - IMPACTFUL mobile */}
          <div className="max-sm:text-center animate-fade-in">
            {/* HERO TITLE - Big, bold, impactful */}
            <h1 className="text-[2.1rem] leading-[1.2] sm:text-4xl lg:text-5xl xl:text-6xl font-semibold sm:font-bold tracking-tight mb-6 sm:mb-6">
              <span className="sm:hidden">
                Votre activité<br />
                <span className="text-gradient-orange">centralisée</span>
              </span>
              <span className="hidden sm:inline">
                Votre activité enfin{" "}
                <span className="text-gradient-orange">centralisée</span>
                , du bureau jusqu'au terrain
              </span>
            </h1>

            {/* Subtitle - Short and punchy on mobile */}
            <p className="text-[1.05rem] leading-[1.6] sm:text-lg lg:text-xl text-muted-foreground mb-10 sm:mb-6 max-w-xl max-sm:mx-auto">
              <span className="sm:hidden">
                Devis, factures, clients et équipes terrain.<br />
                <span className="text-foreground font-medium">Tout au même endroit.</span>
              </span>
              <span className="hidden sm:inline">
                Provia BASE centralise vos devis, factures, clients et équipes. Avec son application mobile, vos employés restent connectés au bureau, où qu'ils soient.
              </span>
            </p>

            {/* Single CTA dominant on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mb-8 sm:mb-6 max-sm:items-center">
              <a href="#tarifs" className="btn-primary text-center text-base sm:text-base lg:text-lg px-8 sm:px-8 py-4 sm:py-4 w-full sm:w-auto max-w-xs">
                Commencer maintenant
              </a>
              <Link to="/demo" className="sm:btn-secondary text-center text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 max-sm:text-primary max-sm:underline max-sm:underline-offset-4 max-sm:font-medium">
                <span className="sm:hidden">Voir une démo →</span>
                <span className="hidden sm:inline">Réserver une démo</span>
              </Link>
            </div>

            {/* Trust signals - minimal on mobile */}
            <div className="text-[0.8rem] sm:text-sm text-muted-foreground flex flex-wrap justify-center sm:justify-start items-center gap-x-5 gap-y-2 sm:gap-3">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 sm:w-4 sm:h-4 text-provia-teal flex-shrink-0" /> Support France</span>
              <span className="flex items-center gap-1.5 max-sm:hidden"><Check className="w-4 h-4 text-provia-teal flex-shrink-0" /> Par utilisateur</span>
            </div>
          </div>

          {/* Right - Dashboard Preview (hidden on mobile) */}
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

              {/* Two Columns */}
              <div className="grid grid-cols-2 gap-3">
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
