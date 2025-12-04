import { Link } from "react-router-dom";
import { UserPlus, Users, FileText, Smartphone } from "lucide-react";
import sunsetImage from "@/assets/sunset-vision.jpeg";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Créez votre espace Provia BASE",
    description: "Inscrivez-vous en quelques clics et configurez votre entreprise.",
  },
  {
    icon: Users,
    number: "02",
    title: "Invitez vos employés",
    description: "Le CRM leur crée automatiquement un accès terrain personnalisé.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Préparez vos devis, factures et clients",
    description: "Centralisez toutes vos informations métier en un seul endroit.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Suivez vos employés sur Provia FIELD",
    description: "Vos équipes terrain ont leur app, vous avez la visibilité complète.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Subtle background with sunset image fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-cover bg-bottom opacity-10"
        style={{ backgroundImage: `url(${sunsetImage})` }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-provia-orange/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comment ça <span className="text-gradient-orange">marche</span> ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Provia BASE est conçu pour être opérationnel en quelques minutes, pas en quelques jours.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card-hover p-6 text-center h-full">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                  
                  <div className="w-10 h-10 rounded-xl bg-muted/30 flex items-center justify-center mx-auto mb-3">
                    <step.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-primary/40 to-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <a href="#tarifs" className="btn-primary text-center px-8 py-4">
            Commencer maintenant
          </a>
          <Link to="/demo" className="btn-secondary text-center px-8 py-4">
            Réserver une démo
          </Link>
        </div>
      </div>
    </section>
  );
};
