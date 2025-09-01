"use client";

import React, { FormEvent, useState } from "react";
import Form from "next/form";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";
import { Label } from "./Label";
import { useMultistepForm } from "../hooks/useMultiForm";
import { MessageForm, ProductForm, UserForm } from "./FormPages";

type ProductType = "wood" | "vinyl" | "aluminum" | "chain-link" | "unknown";
type ReferenceType = "facebook" | "instagram" | "google" | "referral" | "other";
type ContactPreference = "call" | "text" | "email" | "no-preference";

type FormData = {
  propertyType: "residential" | "commercial";
  businessName?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address?: string;
  productTypes: ProductType[];
  referenceTypes?: ReferenceType[];
  contactPreferences: ContactPreference[];
  contactMessage?: string;
};

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

  const [data, setData] = useState({});

  const { step, steps, currentStepIndex, next, back, isFirstStep, isLastStep } =
    useMultistepForm([<UserForm />, <ProductForm />, <MessageForm />]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    next();
  };

  return (
    <Form action="/contact-confirmation">
      <div className="bg-background text-foreground text-body font-body max-w-2xl mx-auto p-6 rounded-2xl shadow-sm">
        {/* Step Count */}
        <h6 className="m-0 p-0 mb-2 text-body font-body">
          Step {currentStepIndex + 1} of {steps.length}
        </h6>
        {/* Progress */}
        <div className="relative w-full h-4 bg-background-orange rounded-full">
          <div
            className="absolute top-0 left-0 h-4 bg-cta rounded-full transition-all duration-300 ease-in-out mb-10"
            style={{ width: `${((0 + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Current Step */}
        {step}
        <div>
          {!isFirstStep && <button onClick={back}>Back</button>}
          {!isLastStep && <button onClick={next}>Next</button>}
          {isLastStep && <button>Submit</button>}
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
