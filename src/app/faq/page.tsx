import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/lib/components/Accordion";
import React from "react";

const FAQ = () => {
  return (
    <section className="bg-background-green text-white text-body font-body">
      <div className="container mx-auto p-6 lg:py-16">
        <Accordion
          type="single"
          collapsible
          className="bg-background-light text-foreground"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
