import React, { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "../../../lib/util";

type SelectRootProps = SelectHTMLAttributes<HTMLSelectElement>;

export const SelectRoot = forwardRef<HTMLSelectElement, SelectRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "block w-full rounded-md border bg-white text-slate-900 shadow-sm",
          className
        )}                
        {...props}
      />
    );
  }
);

SelectRoot.displayName = "SelectRoot";
