import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";

const SelectItem = forwardRef(
  ({ className, value, children, ...props }, ref) => {
    return (
      <option
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
          className
        )}
        {...props}
        value={value}
      >
        {children}
      </option>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default SelectItem;
