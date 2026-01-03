import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: NavDropdownItem[];
  onItemClick?: () => void;
}

export const NavDropdown = ({ label, href, items, onItemClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={href}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        onClick={(e) => {
          // Allow navigation to the main page on direct click
          if (onItemClick) onItemClick();
        }}
      >
        {label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </Link>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200",
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="glass-card p-2 rounded-xl shadow-lg border border-border/50">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => {
                setIsOpen(false);
                if (onItemClick) onItemClick();
              }}
              className="block px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </div>
              {item.description && (
                <div className="text-sm text-muted-foreground mt-0.5">
                  {item.description}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile version - accordion style
export const NavDropdownMobile = ({ label, href, items, onItemClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <Link
          to={href}
          onClick={onItemClick}
          className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {label}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <ChevronDown className={cn(
            "w-5 h-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-4 border-l-2 border-primary/20 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onItemClick}
              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
