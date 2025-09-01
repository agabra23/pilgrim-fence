import HeroSection from "@/lib/shared-sections/HeroSection";
import React from "react";

const NotFound = () => {
  return (
    <>
      <HeroSection
        title="Page Not Found"
        text="Sorry, the page you are looking for does not exist. Please return to the home page."
        buttonText="Go to Home"
        href="/"
      />
    </>
  );
};

export default NotFound;
