"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

const PLACEHOLDER = "/images/placeholder-poster.svg";

type SafeImageProps = ImageProps;

export default function SafeImage(props: SafeImageProps) {
  const [src, setSrc] = useState(props.src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSrc(props.src);
    setLoaded(false);
  }, [props.src]);

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc(PLACEHOLDER)}
      onLoad={() => setLoaded(true)}
      alt={props.alt}
      className={`${props.className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
    />
  );
}
