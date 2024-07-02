import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
      ref={ref}
    />
  );
});

CardHeader.displayName = "CardHeader";
