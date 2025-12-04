import { Link } from "react-router-dom";
import { FileText, Bell, Calendar, Check } from "lucide-react";

export const HeroSection = () => {
  const benefits = [
    { icon: FileText, text: "Devis & factures en quelques clics" },
    { icon: Bell, text: "Relances automatiques & paiements suivis" },
    { icon: Calendar, text: "Planning chantiers clair pour toute l'équipe" },
  ];

  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orange top-20 -right-40 animate-pulse-glow" />
      <div className="glow-teal top-1/2 -left-60 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="glow-green bottom-20 right-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Le QG de vos{" "}
              <span className="text-gradient-orange">devis, factures</span>{" "}
              et chantiers BTP
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              Provia BASE centralise vos clients, devis, factures, relances et planning de chantiers dans un seul logiciel pensé pour les artisans et PME du BTP.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#tarifs" className="btn-primary text-center text-base lg:text-lg px-8 py-4">
                Commencer maintenant
              </a>
              <Link to="/demo" className="btn-secondary text-center text-base lg:text-lg px-8 py-4">
                Réserver une démo avec un expert
              </Link>
            </div>

            <p className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Sans engagement</span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Facturation par utilisateur</span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1"><Check className="w-4 h-4 text-provia-teal" /> Support basé en France</span>
            </p>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-4 lg:p-6 animate-float">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Tableau de bord</h3>
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
                  <p className="text-2xl font-bold text-provia-teal">3</p>
                  <p className="text-xs text-muted-foreground">Chantiers actifs</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="glass-card p-4 mb-4">
                <p className="text-xs text-muted-foreground mb-2">Évolution du CA</p>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ 
                      height: `${height}%`, 
                      background: `linear-gradient(180deg, hsl(var(--provia-yellow)) 0%, hsl(var(--provia-orange)) 100%)`,
                      opacity: 0.6 + (i * 0.05)
                    }} />
                  ))}
                </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                </div>
              </div>

              {/* Tasks List */}
              <div className="glass-card p-3">
                <p className="text-xs text-muted-foreground mb-2">Prochaines échéances</p>
                <div className="space-y-2">
                  {[
                    { title: "Facture #1234 - Martin", date: "Demain", urgent: true },
                    { title: "Devis cuisine - Dupont", date: "Dans 3 jours", urgent: false },
                    { title: "Intervention plomberie", date: "Lun. 9h", urgent: false },
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                      <span className="text-sm text-foreground truncate">{task.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${task.urgent ? 'bg-destructive/20 text-destructive' : 'text-muted-foreground'}`}>
                        {task.date}
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