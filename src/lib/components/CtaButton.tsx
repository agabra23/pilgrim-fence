import React from "react";

const CtaButton = ({
  text,
  size = "regular",
}: {
  text: string;
  size?: "small" | "regular";
}) => {
  return (
    <button
      className={`bg-cta text-white text-body text-center h-[42px] py-[10px] px-6 w-[${
        size === "small" ? "134" : "203"
      }px] rounded-[40px] flex items-center justify-center`}
    >
      {text}
    </button>
  );
};

export default CtaButton;
