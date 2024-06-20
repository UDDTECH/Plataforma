import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("text-sm text-slate-300", className)}
      {...props}
      ref={ref}
    />
  );
});

CardDescription.displayName = "CardDescription";
