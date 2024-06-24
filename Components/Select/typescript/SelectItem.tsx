import React, { OptionHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/util";

type SelectItemProps = OptionHTMLAttributes<HTMLOptionElement> & {
  value: any;
};

export const SelectItem = forwardRef<HTMLOptionElement, SelectItemProps>(
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
