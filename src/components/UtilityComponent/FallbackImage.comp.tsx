"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const FallbackImage = ({
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
    />
  );
};

export default FallbackImage;
