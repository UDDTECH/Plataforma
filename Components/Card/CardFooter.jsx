import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
      ref={ref}
    />
  );
});

CardFooter.displayName = "CardFooter";
