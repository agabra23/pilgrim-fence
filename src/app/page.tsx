import AboutSection from "@/lib/shared-sections/AboutSection";
import AffiliateSection from "@/lib/shared-sections/AffiliateSection";
import HeroSection from "@/lib/shared-sections/HeroSection";
import PromiseSection from "@/lib/shared-sections/PromiseSection";
import QuoteSection from "@/lib/shared-sections/QuoteSection";
import ServicesSection from "@/lib/shared-sections/ServicesSection";
import TestimonialSection from "@/lib/shared-sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title="America’s Hometown Fence Company"
        buttonText="Request a Quote"
      >
        A trusted family-owned and operated fence company, serving Plymouth and
        the South Shore with professional fence installation and repair for over
        40 years.
      </HeroSection>
      <AboutSection id="home-about" />
      <ServicesSection />
      <PromiseSection />
      <QuoteSection />
      <TestimonialSection />
      <AffiliateSection />
    </>
  );
}
