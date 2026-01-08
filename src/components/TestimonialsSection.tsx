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
    <section id="avis" className="relative min-h-[90dvh] sm:min-h-0 py-10 sm:py-16 lg:py-32 overflow-hidden flex flex-col justify-center">
      <div className="glow-orange top-0 left-1/4 opacity-30 sm:opacity-100" />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-5 sm:mb-16">
          <h2 className="text-[1.3rem] sm:text-3xl lg:text-4xl font-medium sm:font-bold mb-2 sm:mb-4 tracking-tight">
            <span className="sm:hidden">Avis <span className="text-gradient-orange">clients</span></span>
            <span className="hidden sm:inline">Ce que disent nos <span className="text-gradient-orange">clients</span></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[0.75rem] sm:text-base">
            <span className="sm:hidden">Ils utilisent Provia BASE au quotidien.</span>
            <span className="hidden sm:inline">Des dirigeants de TPE et PME partagent leur expérience avec Provia BASE.</span>
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel (SEO-safe) */}
        <div className="md:hidden -mx-5 px-5">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-4 flex-shrink-0 w-[78vw] max-w-[280px] snap-center"
              >
                {/* Stars - smaller */}
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-3 leading-relaxed text-xs">
                  "{testimonial.content}"
                </p>

                {/* Author - compact */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-medium text-[10px]">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-xs">{testimonial.name}</p>
                    <p className="text-[10px] text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1.5 mt-2">
            {testimonials.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
