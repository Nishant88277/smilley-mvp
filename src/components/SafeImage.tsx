"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/images/placeholder-poster.svg";

type SafeImageProps = ImageProps;

export default function SafeImage(props: SafeImageProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc(PLACEHOLDER)}
      alt={props.alt}
    />
  );
}
