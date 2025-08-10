import React from "react";
import Link from "next/link";
import { pathnames } from "../contants";

const CtaButton = ({
  text,
  size = "regular",
}: {
  text: string;
  size?: "small" | "regular";
}) => {
  return (
    <Link
      href={pathnames.contact}
      onNavigate={() => {
        // Blur on navigate to remove focus outline
        (document.activeElement as HTMLElement | null)?.blur();
      }}
      className={`bg-cta text-white text-body text-center h-[42px] py-[10px] px-6 w-[${
        size === "small" ? "134" : "203"
      }px] rounded-[40px] flex items-center justify-center cursor-pointer hover:rounded-none transition-all duration-300 focus-within:bg-cta-focus`}
    >
      {text}
    </Link>
  );
};

export default CtaButton;
