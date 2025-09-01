import HeroSection from "@/lib/shared-sections/HeroSection";
import React from "react";

const NotFound = () => {
  return (
    <>
      <HeroSection title="Page Not Found" buttonText="Go to Home" href="/">
        Sorry, the page you are looking for does not exist. Please return to the
        home page.
      </HeroSection>
    </>
  );
};

export default NotFound;
