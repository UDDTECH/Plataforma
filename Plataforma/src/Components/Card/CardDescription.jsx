import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("", className)}
      {...props}
      ref={ref}
    />
  );
});

CardDescription.displayName = "CardDescription";
