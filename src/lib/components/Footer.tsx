"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import {
  address,
  companyEmail,
  copyright,
  phoneNumber,
  zipCode,
} from "../contants";

const Footer = () => {
  return (
    <footer className="bg-background-light w-full">
      <div className="container mx-auto px-2 flex flex-col">
        <div className="py-10 flex border-b">
          <div className="flex-1 flex justify-start">
            <Image
              src="/logos/FooterLogo.png"
              alt="Footer Logo"
              width={263}
              height={111}
            />
          </div>
          <div className="flex-1 flex justify-end items-end">
            <CtaButton text="Contact Us" type="secondary" size="small" />
          </div>
        </div>
        <div className="py-10 flex">
          <div className="flex-1 flex justify-start items-start">
            <div>
              <FooterText>{companyEmail}</FooterText>
              <FooterText phone>{phoneNumber}</FooterText>
              <FooterText>{address}</FooterText>
              <FooterText>{zipCode}</FooterText>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col justify-between">
              <div className="flex gap-2 self-end">
                <button
                  onClick={() =>
                    window.open("https://www.instagram.com", "_blank")
                  }
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="cursor-pointer hover:opacity-70 focus-within:opacity-50 transition-all duration-300"
                  />
                </button>
                <button
                  onClick={() =>
                    window.open("https://www.facebook.com", "_blank")
                  }
                >
                  <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="cursor-pointer hover:opacity-70 focus-within:opacity-50 transition-all duration-300"
                  />
                </button>
              </div>
              <FooterText>{copyright}</FooterText>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterText = ({
  children,
  phone,
}: {
  children: React.ReactNode;
  phone?: boolean;
}) => {
  return phone ? (
    <a
      href={`mailto:${children}`}
      className="text-body underline underline-offset-4 text-foreground font-body leading-6"
    >
      {children}
    </a>
  ) : (
    <p className="text-body text-foreground font-body leading-7">{children}</p>
  );
};

export default Footer;
