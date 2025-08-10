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
    <nav className="bg-background-light w-full px-4">
      <div className="max-w-[40rem] md:container mx-auto py-6 flex justify-around md:justify-between items-center  text-body-bold">
        <div className="xl:hidden flex items-center w-[203px]">
          <button
            className="appearance-none outline-none no-underline cursor-pointer"
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
                  className="group inline-block xl:hidden"
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
          <Link
            href={pathnames.home}
            className={`hover:underline underline-offset-4 cursor-pointer ${
              location === pathnames.home ? "underline underline-offset-4" : ""
            }`}
          >
            Home
          </Link>
          <DropdownLink label="Services">
            <Link
              href={pathnames.fencing.wood}
              className={`cursor-pointer ${
                location === pathnames.fencing.wood
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              Wood Fencing
            </Link>
            <Link
              href={pathnames.fencing.vinyl}
              className={`cursor-pointer ${
                location === pathnames.fencing.vinyl
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              Vinyl Fencing
            </Link>
            <Link
              href={pathnames.fencing.aluminum}
              className={`cursor-pointer ${
                location === pathnames.fencing.aluminum
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              Aluminum Fencing
            </Link>
            <Link
              href={pathnames.fencing.chainLink}
              className={`cursor-pointer ${
                location === pathnames.fencing.chainLink
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              Chain-Link Fencing
            </Link>
            <Link
              href={pathnames.howItWorks}
              className={`cursor-pointer ${
                location === pathnames.howItWorks
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              How it works
            </Link>
          </DropdownLink>
          <DropdownLink label="About">
            <Link
              href={pathnames.about}
              className={`cursor-pointer ${
                location === pathnames.about
                  ? "underline underline-offset-2"
                  : ""
              }`}
            >
              About us
            </Link>
            <Link
              href={pathnames.faq}
              className={`cursor-pointer ${
                location === pathnames.faq ? "underline underline-offset-2" : ""
              }`}
            >
              FAQ
            </Link>
          </DropdownLink>
          <Link
            href={pathnames.contact}
            className={`hover:underline underline-offset-4 cursor-pointer ${
              location === pathnames.contact
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            Contact
          </Link>
        </div>
        <a
          href={`tel:${phoneNumber}`}
          className="hover:underline underline-offset-4 hidden xl:inline"
        >
          {phoneNumber}
        </a>
        <div className="hidden md:inline">
          <CtaButton text="Request a quote" />
        </div>
      </div>
    </nav>
  );
};

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute z-10 top-[calc(100%+1rem)] left-0 w-[200px] bg-background shadow-custom rounded-lg p-4 flex-col gap-4 hidden group-focus-within:flex transition-all duration-300 text-sm font-body-bold opacity-0 group-focus-within:opacity-100">
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
      <button className="appearance-none outline-none no-underline hover:underline underline-offset-4 focus:underline cursor-pointer">
        <span>{label}</span>
        <ChevronUpIcon className="inline ml-1 size-5 transition-all duration-300 group-focus-within:rotate-180" />
      </button>
      <DropdownMenu>{children}</DropdownMenu>
    </div>
  );
};

export default NavBar;
