import proviaLogo from "@/assets/provia-logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={proviaLogo} alt="Provia BASE" className="h-6 w-6 object-contain" />
            <span className="text-sm font-medium">
              Provia <span className="text-gradient-orange">BASE</span>
            </span>
          </a>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © Provia BASE — Votre activité, enfin centralisée.
          </p>
        </div>
      </div>
    </footer>
  );
};
