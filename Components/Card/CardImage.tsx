import React, { ImgHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";
type CardImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ src = "", alt, className, ...props }, ref) => {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(
          "border outline-none w-full h-full rounded-md",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

CardImage.displayName = "CardImage";
