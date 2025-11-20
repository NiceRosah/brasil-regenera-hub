import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <CoverageSection />
      <TimelineSection />
      <PartnersSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
