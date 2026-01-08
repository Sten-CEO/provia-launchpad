import sunsetImage from "@/assets/sunset-vision.jpeg";

export const VisionSection = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sunsetImage})` }}
      />
      
      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-provia-orange/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Donnez à votre entreprise la{" "}
            <span className="text-gradient-orange">structure</span> qu'elle mérite
          </h2>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/90">
            Avancez plus vite, plus sereinement, plus loin
          </p>
          
          <div className="glass-card inline-block px-8 py-4 mt-8">
            <p className="text-lg text-muted-foreground">
              Provia BASE, un outil qui évolue avec vous.<br />
              <span className="text-foreground font-medium">Pas un logiciel… un partenaire.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
