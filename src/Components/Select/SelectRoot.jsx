import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";

const SelectRoot = forwardRef(({ className, ...props }, ref) => {
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
});

SelectRoot.displayName = "SelectRoot";

export default SelectRoot;
