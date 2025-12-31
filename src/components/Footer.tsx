import { Link } from "react-router-dom";
import proviaLogo from "@/assets/provia-logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Ligne principale : Logo + Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={proviaLogo} alt="Provia BASE" className="h-6 w-6 object-contain" />
              <span className="text-sm font-medium">
                Provia <span className="text-gradient-orange">BASE</span>
              </span>
            </Link>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Provia BASE — Votre activité, enfin centralisée.
            </p>
          </div>

          {/* Liens légaux */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
            <Link
              to="/conditions-d-utilisation"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Conditions d'utilisation
            </Link>
            <span className="text-muted-foreground/50 hidden md:inline">•</span>
            <Link
              to="/mentions-legales"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>
            <span className="text-muted-foreground/50 hidden md:inline">•</span>
            <Link
              to="/politique-de-confidentialite"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
