import React, { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../../lib/util";
type CardRootProps = HTMLAttributes<HTMLDivElement>;

export const CardRoot = forwardRef<HTMLDivElement, CardRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-lg border bg-black text-slate-300 shadow-sm",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
CardRoot.displayName = "CardRoot";
