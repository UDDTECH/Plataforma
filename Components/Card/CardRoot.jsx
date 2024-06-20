import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardRoot = forwardRef(({ className, ...props }, ref) => {
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
});

CardRoot.displayName = "CardRoot";
