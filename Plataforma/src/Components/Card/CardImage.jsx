import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardImage = forwardRef(
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
