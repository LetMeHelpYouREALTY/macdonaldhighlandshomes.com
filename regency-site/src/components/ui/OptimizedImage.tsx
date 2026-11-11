import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  priority?: boolean;
};

/**
 * next/image wrapper with sensible defaults for marketing photography.
 */
export default function OptimizedImage({
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 1200px",
  className,
  ...rest
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      className={className}
      quality={75}
      {...rest}
    />
  );
}
