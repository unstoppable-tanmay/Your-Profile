import React, { ReactNode } from "react";

const Chips = ({
  size,
  text,
  icon,
  bg,
}: {
  size: "lg" | "sm" | "xs";
  text: string;
  icon?: ReactNode;
  bg?: string;
}) => {
  return (
    <div
      className={`${
        size == "lg"
          ? "px-5 py-1 gap-1 text-sm"
          : size == "sm"
          ? "px-3 py-0.5 gap-0.5 text-xs"
          : size == "xs"
          ? "px-2 py-0.5 text-[10px]"
          : ""
      } bg-white/10 text-white/60 rounded-full flex items-center flex-shrink-0 self-start`}
    >
      {icon}
      {text}
    </div>
  );
};

export default Chips;
