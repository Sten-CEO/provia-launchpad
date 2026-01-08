import sunsetImage from "@/assets/sunset-vision.jpeg";

export const VisionSection = () => {
  return (
    <section className="relative min-h-[85dvh] sm:min-h-0 py-16 sm:py-20 lg:py-40 overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sunsetImage})` }}
      />

      {/* Glass Overlay - stronger on mobile */}
      <div className="absolute inset-0 bg-background/75 sm:bg-background/60 backdrop-blur-sm" />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />

      {/* Glow Effects - subtler on mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-provia-orange/10 sm:bg-provia-orange/20 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="container mx-auto px-5 sm:px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Mobile: shorter, impactful */}
          <h2 className="text-[1.5rem] sm:text-4xl lg:text-5xl xl:text-6xl font-medium sm:font-bold leading-tight tracking-tight">
            <span className="sm:hidden">La <span className="text-gradient-orange">structure</span> que votre entreprise mérite</span>
            <span className="hidden sm:inline">Donnez à votre entreprise la <span className="text-gradient-orange">structure</span> qu'elle mérite</span>
          </h2>

          <p className="text-base sm:text-xl lg:text-3xl font-normal sm:font-medium text-foreground/75 sm:text-foreground/90">
            Avancez plus vite, plus sereinement
          </p>

          <div className="glass-card inline-block px-5 sm:px-8 py-3 sm:py-4">
            <p className="text-[0.8rem] sm:text-lg text-muted-foreground leading-relaxed">
              <span className="sm:hidden">Un outil qui évolue avec vous.</span>
              <span className="hidden sm:inline">Provia BASE, un outil qui évolue avec vous.<br /></span>
              <span className="text-foreground font-medium max-sm:ml-1">Pas un logiciel… un partenaire.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
