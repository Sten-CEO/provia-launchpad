import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Pour qui ?", href: "#pour-qui" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Avis clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img src={proviaLogo} alt="Provia BASE" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-foreground">
                Provia <span className="text-gradient-orange">BASE</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Connexion
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/demo" className="btn-secondary text-sm">
                Réserver une démo
              </Link>
              <a href="#tarifs" className="btn-primary text-sm">
                Commencer maintenant
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full glass-card animate-slide-in-right rounded-l-3xl">
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <img src={proviaLogo} alt="Provia BASE" className="h-8 w-8 object-contain" />
                  <span className="font-bold text-foreground">Provia BASE</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col gap-4 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                  Connexion
                </a>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <Link to="/demo" onClick={() => setIsOpen(false)} className="btn-secondary w-full text-center">
                  Réserver une démo
                </Link>
                <a href="#tarifs" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                  Commencer maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};