import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Gérante, Martin Services",
    content: "Provia BASE nous a permis de reprendre le contrôle. On sait enfin où on en est à tout moment.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Durand",
    role: "Dirigeant, Durand & Fils (12 employés)",
    content: "L'app terrain a changé la communication avec mes employés. Fini les appels à répétition pour savoir où ils en sont.",
    rating: 5,
  },
  {
    name: "Marie Lefèvre",
    role: "Responsable opérations, ABC Services",
    content: "Tout centraliser nous a fait gagner un temps énorme. On se demande comment on faisait avant.",
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
            Des dirigeants et responsables partagent leur expérience avec Provia BASE.
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
