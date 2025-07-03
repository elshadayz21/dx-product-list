declare module "next/image" {
  import * as React from "react";

  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    layout?: "fixed" | "intrinsic" | "responsive" | "fill";
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    quality?: number | string;
    priority?: boolean;
    loading?: "lazy" | "eager";
    unoptimized?: boolean;
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    className?: string; // Add className prop
  }

  const Image: React.FC<ImageProps>;
  export default Image;
}