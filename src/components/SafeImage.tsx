"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

const PLACEHOLDER = "/images/placeholder-poster.svg";

function hasValidSrc(src: ImageProps["src"]): boolean {
  if (src == null) return false;
  if (typeof src === "string") return src.length > 0;
  return true; // StaticImageData or other valid object
}

function effectiveSrc(src: ImageProps["src"]): ImageProps["src"] {
  return hasValidSrc(src) ? src : PLACEHOLDER;
}

type SafeImageProps = ImageProps;

export default function SafeImage(props: SafeImageProps) {
  const [src, setSrc] = useState<ImageProps["src"]>(() =>
    effectiveSrc(props.src)
  );
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSrc(effectiveSrc(props.src));
    setLoaded(false);
  }, [props.src]);

  const currentSrc = effectiveSrc(src);
  const isPlaceholder = currentSrc === PLACEHOLDER;
  const showImage = loaded || isPlaceholder;

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={() => setSrc(PLACEHOLDER)}
      onLoad={() => setLoaded(true)}
      alt={props.alt}
      className={`${props.className ?? ""} transition-opacity duration-500 ${showImage ? "opacity-100" : "opacity-0"}`}
    />
  );
}
