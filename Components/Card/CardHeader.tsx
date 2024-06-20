import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";

type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
        ref={ref}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";
