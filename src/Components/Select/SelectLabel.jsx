import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";

const SelectLabel = forwardRef(({ className, ...props }, ref) => (
  <option
    ref={ref}
    disabled
    selected
    className={cn("flex m-auto", className)}
    {...props}
  />
));

SelectLabel.displayName = "SelectLabel";

export default SelectLabel;
