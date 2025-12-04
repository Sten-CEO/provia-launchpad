import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Settings, RefreshCw, Phone, Users, Zap, BarChart3 } from "lucide-react";
import managerLaptop from "@/assets/manager-laptop.jpeg";
import employeeMobile from "@/assets/employee-mobile.png";
import sunsetVision from "@/assets/sunset-vision.jpeg";

const installationSteps = [
  {
    id: 1,
    icon: Settings,
    title: "Création de votre espace",
    description: "En quelques clics, votre compte est prêt. Une barre de progression gamifiée vous guide étape par étape : ajouter un client, créer un devis, ajouter un employé, assigner une intervention. Simple, motivant, efficace.",
    image: managerLaptop,
    imageAlt: "Manager utilisant Provia BASE sur laptop",
  },
  {
    id: 2,
    icon: RefreshCw,
    title: "Migration assistée",
    description: "Importez vos clients et prestations en quelques clics ou laissez-nous tout importer pour vous. La migration assistée est incluse les 30 premiers jours.",
    image: null,
  },
  {
    id: 3,
    icon: Phone,
    title: "Appel humain de lancement",
    badge: "Optionnel",
    description: "Si vous le souhaitez, un membre de notre équipe configure le CRM avec vous : clients, planning, employés, app terrain. Un call de 15 minutes pour tout mettre en place.",
    image: null,
  },
  {
    id: 4,
    icon: Users,
    title: "Installation de votre équipe",
    badge: "Incluse",
    description: "Nous pouvons installer et expliquer gratuitement l'app terrain à vos employés : pointage, checklist, signature, rapport. Tout est simplifié.",
    image: null,
  },
  {
    id: 5,
    icon: Zap,
    title: "L'instant magique terrain",
    description: "Vous créez une mission → votre employé la reçoit instantanément → il pointe → remplit la checklist → fait signer le client → le rapport remonte en temps réel. C'est à cet instant que tout prend vie.",
    image: employeeMobile,
    imageAlt: "Employé utilisant l'app terrain Provia FIELD",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Votre QG devient le centre de votre entreprise",
    description: "Votre tableau de bord s'active : interventions du jour, employés en action, signatures, rapports, planning. Vous pilotez votre activité comme jamais auparavant.",
    backgroundImage: sunsetVision,
  },
];

const Installation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Comment se déroule votre{" "}
              <span className="text-gradient-orange">installation</span> ?
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Provia BASE a été pensé pour que vous soyez opérationnel dès le premier jour. 
              Vous choisissez si vous voulez être accompagné… ou tout faire en autonomie.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div key={step.id}>
                {/* Step Card */}
                <div
                  className={`relative overflow-hidden rounded-3xl ${
                    step.backgroundImage
                      ? "min-h-[380px]"
                      : "bg-glass/60 backdrop-blur-xl border border-glass-border"
                  }`}
                >
                  {/* Background Image for step 6 */}
                  {step.backgroundImage && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${step.backgroundImage})` }}
                      />
                      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
                    </>
                  )}

                  <div className={`relative z-10 p-10 ${step.image ? "grid md:grid-cols-2 gap-10 items-center" : ""}`}>
                    {/* Content */}
                    <div className={step.image ? "" : "max-w-4xl"}>
                      {/* Step Number & Icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-provia-orange/20 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-provia-orange" />
                        </div>
                        <span className="text-base font-medium text-provia-orange/80">
                          Étape {step.id}
                        </span>
                        {step.badge && (
                          <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-provia-yellow/20 text-provia-yellow border border-provia-yellow/30">
                            {step.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        {step.title}
                      </h2>

                      {/* Description */}
                      <p className="text-muted-foreground text-xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Image Card */}
                    {step.image && (
                      <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden bg-glass/40 backdrop-blur-xl border border-glass-border p-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-provia-orange/10 via-transparent to-provia-yellow/10" />
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            className="relative z-10 w-full h-auto rounded-xl object-cover max-h-[320px]"
                          />
                          {/* Glow effect */}
                          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-provia-orange/30 blur-2xl" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Separator Line */}
                {index < installationSteps.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-px h-10 bg-[#dcdcdc]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Installation;
