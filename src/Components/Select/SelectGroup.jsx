import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";

const SelectGroup = forwardRef(({ className, label, ...props }, ref) => (
  <optgroup
    ref={ref}
    label={label}
    className={cn("text-sm font-semibold text-slate-700", className)}
    {...props}
  />
));

SelectGroup.displayName = "SelectGroup";

export default SelectGroup;
