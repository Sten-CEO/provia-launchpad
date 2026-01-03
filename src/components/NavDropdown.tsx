import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavDropdownItem {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface NavDropdownProps {
  label: string;
  href: string;
  items: NavDropdownItem[];
  onItemClick?: () => void;
  columns?: 1 | 2;
  showAllLink?: {
    label: string;
    href: string;
  };
}

export const NavDropdown = ({ label, href, items, onItemClick, columns = 2, showAllLink }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setClickCount(0);
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
      setClickCount(0);
    }, 150);
  };

  const handleLabelClick = (e: React.MouseEvent) => {
    if (clickCount === 0) {
      // First click - just open menu (if not already open from hover)
      e.preventDefault();
      setIsOpen(true);
      setClickCount(1);
    } else {
      // Second click - navigate to main page
      setIsOpen(false);
      setClickCount(0);
    }
  };

  const gridCols = columns === 2 ? "md:grid-cols-2" : "grid-cols-1";
  const dropdownWidth = columns === 2 ? "w-[580px]" : "w-[320px]";

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={href}
        onClick={handleLabelClick}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
      >
        {label}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </Link>

      {/* Large Dropdown Menu - Axonaut Style */}
      <div
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 transition-all duration-200",
          dropdownWidth,
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        )}
      >
        <div className="glass-card p-4 rounded-2xl shadow-xl border border-border/50">
          <div className={cn("grid gap-1", gridCols)}>
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  setIsOpen(false);
                  setClickCount(0);
                  if (onItemClick) onItemClick();
                }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {showAllLink && (
            <div className="border-t border-border/50 mt-3 pt-3">
              <Link
                to={showAllLink.href}
                onClick={() => {
                  setIsOpen(false);
                  setClickCount(0);
                  if (onItemClick) onItemClick();
                }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors text-sm font-semibold text-primary"
              >
                {showAllLink.label}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mobile version - accordion style with icons
export const NavDropdownMobile = ({ label, href, items, onItemClick, showAllLink }: NavDropdownProps) => {
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
          isOpen ? "max-h-[800px] opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <div className="pl-2 border-l-2 border-primary/20 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onItemClick}
              className="flex items-center gap-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
          {showAllLink && (
            <Link
              to={showAllLink.href}
              onClick={onItemClick}
              className="flex items-center gap-3 py-2.5 text-primary font-medium text-sm"
            >
              <ChevronRight className="w-4 h-4" />
              {showAllLink.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
