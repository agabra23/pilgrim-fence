"use client";

import React, { FormEvent, useState } from "react";
import Form from "next/form";
import { useMultistepForm } from "../hooks/useMultiForm";
import { FormData } from "../types";
import UserForm from "./UserFormPage";
import ProductForm from "./ProductFormPage";
import MessageForm from "./MessageFormPages";

const ContactForm = () => {
  const INITIAL_DATA: FormData = {
    propertyType: "residential",
    businessName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    productTypes: [],
    referenceTypes: [],
    contactPreferences: [],
    contactMessage: "",
  };

  const [data, setData] = useState(INITIAL_DATA);

  const { step, steps, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultistepForm([
      <UserForm {...data} />,
      <ProductForm {...data} />,
      <MessageForm {...data} />,
    ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    // Final submission logic here
    console.log("Form submitted:", data);
  };

  return (
    <Form action="/contact-confirmation">
      <div className="bg-background text-foreground text-body font-body max-w-2xl mx-auto p-6 rounded-2xl shadow-sm">
        {/* Step Count */}
        <h6 className="m-0 p-0 mb-2 text-body font-body">
          Step {currentStepIndex + 1} of {steps.length}
        </h6>
        {/* Progress */}
        <div className="relative w-full h-4 bg-background-orange rounded-full mb-10">
          <div
            className="absolute top-0 left-0 h-4 bg-cta rounded-full transition-all duration-300 ease-in-out mb-10"
            style={{
              width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Current Step */}
        {step}
        <div>
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {!isLastStep && <button onSubmit={handleSubmit}>Next</button>}
          {isLastStep && <button onSubmit={handleSubmit}>Submit</button>}
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
