import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ForWhoSection } from "@/components/ForWhoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenDemo={openDemo} />
      <HeroSection onOpenDemo={openDemo} />
      <SocialProof />
      <ForWhoSection />
      <FeaturesSection />
      <HowItWorks onOpenDemo={openDemo} />
      <PricingSection onOpenDemo={openDemo} />
      <TestimonialsSection />
      <FAQSection onOpenDemo={openDemo} />
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default Index;
