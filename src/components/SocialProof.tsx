import { Clock, TrendingUp, Star } from "lucide-react";

export const SocialProof = () => {
  const stats = [
    { icon: Clock, value: "15h", label: "gagnées / mois", suffix: "" },
    { icon: TrendingUp, value: "+32", label: "de devis acceptés", suffix: "%" },
    { icon: Star, value: "4.8", label: "/ 5 note moyenne", suffix: "" },
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-card p-6 lg:p-8">
          <p className="text-center text-muted-foreground mb-8 text-sm lg:text-base">
            Déjà utilisé par des artisans, plombiers, électriciens et PME du BTP partout en France
          </p>

          {/* Client Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-40">
            {["Entreprise A", "Société B", "Artisan C", "PME D", "Groupe E"].map((name, i) => (
              <div key={i} className="px-4 py-2 rounded-lg bg-muted/30 text-sm text-muted-foreground font-medium">
                {name}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card-hover p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-gradient-orange">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
