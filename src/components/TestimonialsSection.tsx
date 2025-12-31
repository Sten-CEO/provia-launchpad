import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Gérante, Martin Services",
    content: "Avec ce logiciel de gestion, on a enfin une vue claire sur notre activité. Devis, factures, clients : tout est centralisé.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Durand",
    role: "Dirigeant, Durand & Fils (12 employés)",
    content: "L'application mobile terrain a changé notre façon de travailler. Mes équipes sont autonomes et je suis ce qu'ils font en temps réel.",
    rating: 5,
  },
  {
    name: "Marie Lefèvre",
    role: "Responsable opérations, ABC Services",
    content: "La gestion clients et équipe est devenue simple. On gagne un temps énorme sur les devis et les relances.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="avis" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="glow-orange top-0 left-1/4" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ce que disent nos{" "}
            <span className="text-gradient-orange">clients</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des dirigeants de TPE et PME partagent leur expérience avec Provia BASE. Ce qu'ils apprécient le plus : la simplicité d'utilisation, la centralisation de leur gestion, et l'application mobile pour le terrain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card-hover p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
