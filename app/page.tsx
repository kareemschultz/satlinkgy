import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <WhyUsSection />
      <IndustriesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
