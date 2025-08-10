import Link from "next/link";
import React from "react";
import CtaButton from "./CtaButton";

const NavBar = () => {
  return (
    <nav className="bg-background-light w-full">
      <div className="container mx-auto py-6">
        <div className="font-body-bold flex justify-around text-body-bold">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <p className="hover:underline">Services</p>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <CtaButton text="Request a quote" />
      </div>
    </nav>
  );
};

export default NavBar;
