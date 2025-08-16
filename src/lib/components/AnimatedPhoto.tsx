"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { pathnames } from "../contants";

export const AnimatedPhoto = ({
  children,
  text,
  pathname,
}: {
  children: ReactNode;
  text: string;
  pathname: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={`group relative flex-1 flex flex-col justify-start items-start pb-12 hover:pb-6 p-6 transition-all duration-300 bg-background-light cursor-pointer rounded-2xl
        `}
      onClick={() => {
        if (pathname) {
          router.push(pathname);
        } else {
          console.warn("AnimatedPhoto: 'pathname' prop is undefined.");
        }
      }}
    >
      <div className="relative w-full h-[193px] group-hover:h-[426px] transition-all duration-300">
        {children}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
      </div>
      <h6 className="absolute bottom-4 left-8 group-hover:bottom-8 font-body text-body mt-4 group-hover:text-white transition-all duration-300">
        {text}
      </h6>
    </div>
  );
};
