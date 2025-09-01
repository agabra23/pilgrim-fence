import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/Accordion";
import { companyEmail, faqQuestions } from "@/lib/constants";
import CtaSection from "@/lib/shared-sections/CtaSection";
import HeroSection from "@/lib/shared-sections/HeroSection";
import React from "react";

const FAQ = () => {
  return (
    <>
      <HeroSection
        title={`Frequently Asked Questions`}
        text=""
        buttonText="Explore questions"
        href="#faq"
      />
      <FaqSection />
      <CtaSection greenVariant buttonText="Request a quote">
        <span>
          Don’t see your question answered? Email us at{" "}
          <a
            className="no-underline text-inherit hover:underline"
            href={`mailto:${companyEmail}`}
          >
            {companyEmail}
          </a>{" "}
          or request a quote below.
        </span>
      </CtaSection>
    </>
  );
};

export default FAQ;

const FaqSection = () => (
  <section
    id="faq"
    className="bg-background-light text-foreground text-body font-body"
  >
    <div className="container mx-auto p-6 lg:py-16">
      <h3 className="font-heading text-heading mb-6">
        Frequently Asked Questions
      </h3>
      <Accordion
        type="single"
        collapsible
        className="bg-background-light text-foreground text-body font-body"
      >
        {faqQuestions.map(({ question, answer }) => (
          <AccordionListItem
            key={question}
            question={question}
            answer={answer}
          />
        ))}
      </Accordion>
    </div>
  </section>
);

const AccordionListItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);
