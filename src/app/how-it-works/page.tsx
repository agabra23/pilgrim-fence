"use client";

import CtaButton from "@/lib/components/CtaButton";
import { companyEmail } from "@/lib/constants";
import useScreenSize from "@/lib/hooks/ScreenSize";
import CtaSection from "@/lib/shared-sections/CtaSection";
import HeroSection from "@/lib/shared-sections/HeroSection";
import ServicesSection from "@/lib/shared-sections/ServicesSection";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const screenSize = useScreenSize();

  const isMobile = screenSize.width < 768;

  return (
    <>
      <HeroSection
        title="How it works"
        text="At Pilgrim Fence Co., we make getting the perfect fence easy and stress-free. From requesting a free quote to final installation, our expert team is with you every step of the way to ensure your project is completed on time, on budget, and with top-quality materials."
        buttonText="Learn More"
      />
      {isMobile ? <StepsSectionMobile /> : <StepsSectionDesktop />}
      <ServicesSection />
      <ProductsSection />
      <CtaSection
        text="Interested in our fence installation services?"
        buttonText="Request a Quote"
      />
    </>
  );
};

export default HowItWorks;

const StepsSectionDesktop = () => (
  <section className="bg-background-green text-white text-body font-body">
    <div className="container mx-auto p-6 lg:py-16 flex flex-col gap-14">
      <div>
        <h2 className="m-0 p-0 font-heading text-heading">
          Your path to the perfect fence
        </h2>
        <h6 className="uppercase font-subheading text-subheading mt-2">
          Follow These Simple Steps to Get Started
        </h6>
      </div>
      <div className="flex mb-16">
        <div className="flex-1 flex flex-col justify-center border-r-2 border-background-light-green dots">
          <Step
            number={steps[1].number}
            title={steps[1].title}
            text={steps[1].text}
            position="left"
          />
          <Step
            number={steps[3].number}
            title={steps[3].title}
            text={steps[3].text}
            position="left"
          />
          <Step
            number={steps[5].number}
            title={steps[5].title}
            text={steps[5].text}
            position="left"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Step
            number={steps[2].number}
            title={steps[2].title}
            text={steps[2].text}
            position="right"
          />
          <Step
            number={steps[4].number}
            title={steps[4].title}
            text={steps[4].text}
            position="right"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <CtaButton text="Request a Quote" />
      </div>
    </div>
  </section>
);

const StepsSectionMobile = () => (
  <section className="bg-background-green text-white text-body font-body">
    <div className="container mx-auto p-6 lg:py-16 flex flex-col gap-14">
      <div>
        <h2 className="m-0 p-0 font-heading text-heading">
          Your path to the perfect fence
        </h2>
        <h6 className="uppercase font-subheading text-subheading mt-2">
          Follow These Simple Steps to Get Started
        </h6>
      </div>
      <div className="flex mb-16">
        <div className="flex-1 flex flex-col justify-center border-r-2 border-background-light-green dots">
          <Step
            number={steps[1].number}
            title={steps[1].title}
            text={steps[1].text}
            position="left"
          />
          <Step
            number={steps[3].number}
            title={steps[3].title}
            text={steps[3].text}
            position="left"
          />
          <Step
            number={steps[5].number}
            title={steps[5].title}
            text={steps[5].text}
            position="left"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Step
            number={steps[2].number}
            title={steps[2].title}
            text={steps[2].text}
            position="right"
          />
          <Step
            number={steps[4].number}
            title={steps[4].title}
            text={steps[4].text}
            position="right"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <CtaButton text="Request a Quote" />
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section className="bg-background-light text-foreground text-body font-body">
    <div className="container mx-auto p-6 lg:py-16 flex gap-12 justify-center items-center">
      <div className="flex-1 flex flex-col gap-2">
        <h4 className="uppercase text-subheading font-subheading">
          Other products & services we offer:
        </h4>
        <ul>
          {products.map((product) => (
            <li key={product} className="list-inside list-disc ml-2">
              {product}
            </li>
          ))}
        </ul>
        <p>
          Give us a call or shoot us an email at {companyEmail} with any
          questions about our other services!
        </p>
      </div>
      <div className="flex-1 flex gap-8">
        <div className="flex-1 rounded-2xl overflow-clip">
          <Image
            src="/photos/otherproducts1.jpg"
            alt="Description of image"
            width={4284}
            height={5712}
            className="object-cover max-w-full"
          />
        </div>
        <div className="flex-1 rounded-2xl overflow-clip">
          <Image
            src="/photos/otherproducts2.jpeg"
            alt="Description of image"
            width={4284}
            height={5712}
            className="object-cover max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

const Step = ({
  number,
  title,
  text,
  position,
}: {
  number: string;
  title: string;
  text: string;
  position: "left" | "right";
}) => (
  <div
    className={
      "relative py-16 flex items-center gap-8" +
      " " +
      (position === "left"
        ? "pr-14 dotted-line-left"
        : "pl-14 dotted-line-right")
    }
  >
    <div className="bg-background rounded-lg p-4">
      <div className="rounded-lg p-6 bg-background-light-green text-[4.25rem] font-subheading uppercase text-background-green w-36 h-36 flex justify-center items-center">
        {number}
      </div>
    </div>
    <div className="max-w-lg">
      <h3 className="font-subheading text-subheading uppercase">{title}</h3>
      <p className="mt-2 font-body text-body">{text}</p>
    </div>
  </div>
);

const steps = {
  1: {
    title: "Request a quote",
    text: "Start by filling out our simple online form or giving us a call to request a free, no-obligation quote for your fencing project.",
    number: "01",
  },
  2: {
    title: "Schedule a walkthrough",
    text: "We’ll set up a convenient time to visit your property, where our expert team will assess your space, discuss your needs, and recommend the best options for your budget.",
    number: "02",
  },
  3: {
    title: "Receive custom estimate",
    text: "After the walkthrough, we’ll provide you with a detailed estimate, outlining the cost, materials, and timeline for your project.",
    number: "03",
  },
  4: {
    title: "Approve & finalize design",
    text: "Once you're satisfied with the estimate, we’ll work with you to finalize the design and material selections to ensure everything meets your expectations.",
    number: "04",
  },
  5: {
    title: "Installation & Completion",
    text: "Our professional installers will get to work, ensuring high-quality craftsmanship and timely completion of your fence, transforming your space.",
    number: "05",
  },
};

const products = [
  "Gate installation and repairs",
  "Wood guardrail",
  "Custom arbors",
  "Custom pergolas",
  "Mailbox posts",
  "Light posts",
  "Shower enclosure",
  "Trash enclosure",
  "Animal enclosure",
  "Welded wire/livestock",
];
