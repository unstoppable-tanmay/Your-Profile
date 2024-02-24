"use client";

import { getImage } from "@/lib/profileIconArray";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const FallbackImageComp = ({
  src,
  alt = "img",
  className,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}) => {
  const [img, setImg] = useState(src);
  return (
    <Image
      alt={alt}
      src={img}
      onError={(e) => setImg("/images/profile/ironman.png")}
      fill
      className={twMerge("", className)}
      draggable="false"
    />
  );
};

const FallbackImage = React.memo(FallbackImageComp)

export default FallbackImage;
