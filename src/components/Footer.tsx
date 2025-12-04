import { Linkedin, Youtube, Twitter } from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src={proviaLogo} alt="Provia BASE" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold">
                Provia <span className="text-gradient-orange">BASE</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm">
              Le logiciel tout-en-one pour les artisans et PME du BTP. Devis, factures, planning et suivi de trésorerie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</a></li>
              <li><a href="#tarifs" className="text-muted-foreground hover:text-foreground transition-colors">Tarifs</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Connexion</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Conditions générales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</a></li>
              <li><a href="mailto:contact@provia.fr" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Provia BASE. Tous droits réservés.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
