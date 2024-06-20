import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});

CardTitle.displayName = "CardTitle";

