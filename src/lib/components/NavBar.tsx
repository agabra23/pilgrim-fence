"use client";

import Link from "next/link";
import React, { useState } from "react";
import CtaButton from "./CtaButton";
import { pathnames, phoneNumber } from "../contants";
import { NavLinkProps } from "../types";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Bars2Icon,
  ChevronRightIcon,
  ChevronUpIcon,
  PhoneArrowUpRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const NavBar = () => {
  const location = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("Menu open state:", isMenuOpen);

  return (
    <nav className="bg-background-light w-full">
      <div className="max-w-[40rem] md:container mx-auto py-6 flex justify-between md:justify-between items-center  text-body-bold">
        <div className="xl:hidden flex items-center lg:w-[203px] w-auto">
          <button
            className="appearance-none outline-none no-underline cursor-pointer ml-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars2Icon className="size-8" />
          </button>
          <div
            className={`absolute z-100 top-0 left-0 w-full h-0 bg-background-light opacity-0 transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 h-full pointer-events-auto"
                : "pointer-events-none"
            }`}
          >
            <div className="container mx-auto h-full p-4 flex flex-col gap-4 relative">
              <XMarkIcon
                className="size-5 cursor-pointer absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="p-10 text-body-bold font-body-bold flex flex-col gap-4">
                <Link href={pathnames.home} className="group cursor-pointer">
                  <span>Home</span>
                  <ChevronRightIcon className="size-4 inline-block opacity-0 group-hover:opacity-100 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                <Link href={pathnames.contact} className="group cursor-pointer">
                  <span>Contact</span>
                  <ChevronRightIcon className="size-4 inline-block opacity-0 group-hover:opacity-100 ml-2 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                <a
                  href={`tel:${phoneNumber}`}
                  className="group inline-block xl:hidden font-body-bold"
                >
                  <span>{phoneNumber}</span>
                  <PhoneArrowUpRightIcon className="size-4 inline-block opacity-0 group-hover:opacity-100 ml-3 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </a>
                <div className="block md:hidden">
                  <CtaButton text="Request a quote" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/logos/HeaderLogo.png"
          alt="Logo"
          width={263}
          height={111}
        />
        <div className="font-body-bold hidden xl:flex gap-8 items-center">
          <SubLink href={pathnames.home} isActive={location === pathnames.home}>
            Home
          </SubLink>
          <DropdownLink label="Services">
            <SubLink
              href={pathnames.fencing.wood}
              isActive={location === pathnames.fencing.wood}
            >
              Wood Fencing
            </SubLink>
            <SubLink
              href={pathnames.fencing.vinyl}
              isActive={location === pathnames.fencing.vinyl}
            >
              Vinyl Fencing
            </SubLink>
            <SubLink
              href={pathnames.fencing.aluminum}
              isActive={location === pathnames.fencing.aluminum}
            >
              Aluminum Fencing
            </SubLink>
            <SubLink
              href={pathnames.fencing.chainLink}
              isActive={location === pathnames.fencing.chainLink}
            >
              Chain-Link Fencing
            </SubLink>
            <SubLink
              href={pathnames.howItWorks}
              isActive={location === pathnames.howItWorks}
            >
              How it works
            </SubLink>
          </DropdownLink>
          <DropdownLink label="About">
            <SubLink
              href={pathnames.about}
              isActive={location === pathnames.about}
            >
              About us
            </SubLink>
            <SubLink href={pathnames.faq} isActive={location === pathnames.faq}>
              FAQ
            </SubLink>
          </DropdownLink>
          <SubLink
            href={pathnames.contact}
            isActive={location === pathnames.contact}
          >
            Contact
          </SubLink>
        </div>
        <a
          href={`tel:${phoneNumber}`}
          className="custom-underline hidden xl:inline font-body-bold"
        >
          {phoneNumber}
        </a>
        <div className="hidden lg:inline mr-2">
          <CtaButton text="Request a quote" />
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute z-10 top-[calc(100%+1rem)] left-0 w-[200px] bg-background shadow-custom rounded-lg p-4 flex-col items-start gap-4 hidden group-focus-within:flex transition-all duration-300 text-sm font-body-bold opacity-0 group-focus-within:opacity-100">
      {children}
    </div>
  );
};

const DropdownLink = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="relative group">
      <button className="appearance-none outline-none no-underline cursor-pointer">
        <span className="custom-underline">{label}</span>
        <ChevronUpIcon className="inline ml-1 size-5 transition-all duration-300 group-focus-within:rotate-180" />
      </button>
      <DropdownMenu>{children}</DropdownMenu>
    </div>
  );
};

const SubLink = ({
  children,
  href,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`cursor-pointer custom-underline ${
        isActive ? "current-page" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavBar;
