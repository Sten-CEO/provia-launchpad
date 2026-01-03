import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Hammer,
  Building2,
  Briefcase,
  Users,
  Store,
  FileText,
  Receipt,
  UserCog,
  Calendar,
  Smartphone,
  Activity,
  UserCircle,
  Archive
} from "lucide-react";
import proviaLogo from "@/assets/provia-logo.png";
import { NavDropdown, NavDropdownMobile, type NavDropdownItem } from "./NavDropdown";

// Items for "Pour qui ?" dropdown
const pourQuiItems: NavDropdownItem[] = [
  {
    label: "TPE artisans",
    href: "/pour-les-tpe",
    description: "Gestion simplifiée pour artisans indépendants",
    icon: Hammer
  },
  {
    label: "PME artisans",
    href: "/pour-les-pme",
    description: "Pilotez votre croissance avec plusieurs équipes",
    icon: Building2
  },
  {
    label: "Entreprises de services",
    href: "/pour-les-entreprises-de-services",
    description: "Optimisez vos interventions chez vos clients",
    icon: Briefcase
  },
  {
    label: "Équipes terrain",
    href: "/pour-les-equipes-terrain",
    description: "Application mobile pour techniciens en intervention",
    icon: Users
  },
  {
    label: "Franchises",
    href: "/pour-les-franchises",
    description: "Gérez plusieurs points de vente ou agences",
    icon: Store
  },
];

// Items for "Fonctionnalités" dropdown
const fonctionnalitesItems: NavDropdownItem[] = [
  {
    label: "Devis",
    href: "/fonctionnalites/devis",
    description: "Créez des devis professionnels en 2 minutes",
    icon: FileText
  },
  {
    label: "Facturation",
    href: "/fonctionnalites/facturation",
    description: "Facturez rapidement et suivez vos paiements",
    icon: Receipt
  },
  {
    label: "Gestion des équipes",
    href: "/fonctionnalites/gestion-equipes",
    description: "Coordonnez vos collaborateurs efficacement",
    icon: UserCog
  },
  {
    label: "Planning d'interventions",
    href: "/fonctionnalites/planning-interventions",
    description: "Planifiez et optimisez vos missions terrain",
    icon: Calendar
  },
  {
    label: "Application mobile terrain",
    href: "/fonctionnalites/application-mobile",
    description: "Vos équipes connectées partout, même hors ligne",
    icon: Smartphone
  },
  {
    label: "Suivi des interventions",
    href: "/fonctionnalites/suivi-interventions",
    description: "Suivez l'avancement en temps réel",
    icon: Activity
  },
  {
    label: "Gestion des clients (CRM)",
    href: "/fonctionnalites/gestion-clients",
    description: "Centralisez toutes vos informations clients",
    icon: UserCircle
  },
  {
    label: "Archivage",
    href: "/fonctionnalites/archivage",
    description: "Documents accessibles et sécurisés à vie",
    icon: Archive
  },
];

// Regular nav links
const navLinks = [
  { label: "Installation", href: "/installation" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "Avis clients", href: "/#avis" },
  { label: "FAQ", href: "/#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={proviaLogo} alt="Provia BASE" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-foreground">
                Provia <span className="text-gradient-orange">BASE</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Pour qui ? dropdown */}
              <NavDropdown
                label="Pour qui ?"
                href="/#pour-qui"
                items={pourQuiItems}
                columns={1}
              />

              {/* Fonctionnalités dropdown */}
              <NavDropdown
                label="Fonctionnalités"
                href="/fonctionnalites"
                items={fonctionnalitesItems}
                columns={2}
                showAllLink={{
                  label: "Toutes les fonctionnalités",
                  href: "/fonctionnalites"
                }}
              />

              {/* Regular links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/demo" className="btn-secondary text-sm">
                Réserver une démo
              </Link>
              <Link to="/#tarifs" className="btn-primary text-sm">
                Commencer maintenant
              </Link>
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
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full glass-card animate-slide-in-right rounded-l-3xl overflow-y-auto">
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <img src={proviaLogo} alt="Provia BASE" className="h-8 w-8 object-contain" />
                  <span className="font-bold text-foreground">Provia BASE</span>
                </div>
                <button onClick={closeMenu} className="p-2 text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col flex-1">
                {/* Pour qui ? dropdown mobile */}
                <NavDropdownMobile
                  label="Pour qui ?"
                  href="/#pour-qui"
                  items={pourQuiItems}
                  onItemClick={closeMenu}
                />

                {/* Fonctionnalités dropdown mobile */}
                <NavDropdownMobile
                  label="Fonctionnalités"
                  href="/fonctionnalites"
                  items={fonctionnalitesItems}
                  onItemClick={closeMenu}
                  showAllLink={{
                    label: "Toutes les fonctionnalités",
                    href: "/fonctionnalites"
                  }}
                />

                {/* Regular links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <Link to="/demo" onClick={closeMenu} className="btn-secondary w-full text-center">
                  Réserver une démo
                </Link>
                <Link to="/#tarifs" onClick={closeMenu} className="btn-primary w-full text-center">
                  Commencer maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
