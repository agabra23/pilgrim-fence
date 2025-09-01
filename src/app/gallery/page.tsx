import HeroSection from "@/lib/shared-sections/HeroSection";
import React from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/constants";
import PhotoGallery from "@/lib/components/PhotoGallery";
import CtaSection from "@/lib/shared-sections/CtaSection";

const Gallery = () => (
  <>
    <HeroSection
      title="Our Work"
      text="Explore our gallery of recent projects and see the craftsmanship behind every fence we build."
      buttonText="See our work"
      href="#gallery"
    />
    <GallerySection />
    <CtaSection buttonText="Request a quote">
      Ready to get more information for your next project?
    </CtaSection>
  </>
);

export default Gallery;

const GallerySection = () => (
  <section
    id="gallery"
    className="bg-background-green text-white text-body font-body"
  >
    <div className="container mx-auto p-6 lg:py-16">
      <h1 className="font-heading text-heading mb-8">Our Recent Work</h1>
      <PhotoGallery />
    </div>
  </section>
);
