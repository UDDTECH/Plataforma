import React, { OptionHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../lib/util";

type SelectItemProps = OptionHTMLAttributes<HTMLOptionElement>;

export const SelectLabel = forwardRef<HTMLOptionElement, SelectItemProps>(
  ({ className, ...props }, ref) => (
    <option
      ref={ref}
      disabled
      selected      
      className={cn("flex m-auto", className)}
      {...props}
    />
  )
);

SelectLabel.displayName = "SelectLabel";
