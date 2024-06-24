import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";

const SelectSeparator = forwardRef(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-300", className)}
    {...props}
  />
));

SelectSeparator.displayName = "SelectSeparator";

export default SelectSeparator;
