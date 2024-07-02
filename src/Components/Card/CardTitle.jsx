import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardTitle = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
        ref={ref}        
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = "CardTitle";
