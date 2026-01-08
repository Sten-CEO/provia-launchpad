import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileSectionProps {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export const MobileSection = ({ children, className = "", fullScreen = true }: MobileSectionProps) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  const mobileClasses = isMobile
    ? `${fullScreen ? "min-h-[100dvh] flex flex-col justify-center" : ""} ${
        isVisible ? "animate-mobile-reveal" : "opacity-0"
      }`
    : "";

  return (
    <div ref={ref} className={`${mobileClasses} ${className}`}>
      {children}
    </div>
  );
};
