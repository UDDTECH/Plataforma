import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardRoot = forwardRef(({ className,children, ...props }, ref) => {
  return (
    <div
      className={cn("rounded-lg text-slate-300 shadow-sm", className)}
      {...props}
      ref={ref}
    >{children}</div>
  );
});

CardRoot.displayName = "CardRoot";
