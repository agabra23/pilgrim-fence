import AboutSection from "@/lib/shared-sections/AboutSection";
import AffiliateSection from "@/lib/shared-sections/AffiliateSection";
import HeroSection from "@/lib/shared-sections/HeroSection";
import QuoteSection from "@/lib/shared-sections/QuoteSection";
import TestimonialSection from "@/lib/shared-sections/TestimonialSection";
import React from "react";

const About = () => (
  <>
    <HeroSection
      title="A family-owned company with a rich history"
      buttonText="Learn More"
      href="#about-about"
    >
      A trusted family-owned and operated fence company, serving Plymouth and
      the South Shore for over 40 years.
    </HeroSection>
    <AboutSection id="about-about" />
    {/* <DifferentSection /> */}
    <QuoteSection />
    <TestimonialSection />
    <AffiliateSection />
  </>
);

export default About;
