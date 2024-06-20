import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/util";

type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("text-sm text-slate-300", className)}
      {...props}
      ref={ref}
    />
  );
});

CardDescription.displayName = "CardDescription";
