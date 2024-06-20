import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/util";

type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";
