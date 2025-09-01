import ContactForm from "@/lib/components/ContactForm";
import { companyEmail, phoneNumber } from "@/lib/constants";
import HeroSection from "@/lib/shared-sections/HeroSection";
import React from "react";

const Contact = () => {
  return (
    <>
      <HeroSection title="Get your quote today.">
        Please contact us at{" "}
        <a className="hover:underline" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>{" "}
        or
        <a className="hover:underline" href={`mailto:${companyEmail}`}>
          {" "}
          {companyEmail}
        </a>{" "}
        if you are not interested in requesting a quote.
      </HeroSection>
      <ContactSection />
    </>
  );
};

export default Contact;

const ContactSection = () => {
  return (
    <section className="bg-background-green text-white text-body font-body">
      <div className="container mx-auto p-6 lg:py-16">
        <ContactForm />
      </div>
    </section>
  );
};
