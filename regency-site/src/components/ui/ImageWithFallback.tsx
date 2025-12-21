"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  width?: number;
  height?: number;
};

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  style,
  fallbackSrc = "/photos/community/clubhouse.jpg",
  width,
  height,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      onError={handleError}
      loading="lazy"
    />
  );
}
