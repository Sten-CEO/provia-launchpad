import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ForWhoSection } from "@/components/ForWhoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VisionSection } from "@/components/VisionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const SectionDivider = () => (
  <div className="w-full px-4">
    <div className="max-w-6xl mx-auto border-t border-[#dcdcdc]" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ForWhoSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <VisionSection />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
