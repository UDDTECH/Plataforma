import React, { forwardRef, OptgroupHTMLAttributes } from "react";
import { cn } from "../../../lib/util";

type SelectGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement> & {
  label: string;
};

export const SelectGroup = forwardRef<HTMLOptGroupElement, SelectGroupProps>(
  ({ className, label, ...props }, ref) => (
    <optgroup
      ref={ref}
      label={label}
      className={cn("text-sm font-semibold text-slate-700", className)}
      {...props}
    />
  )
);

SelectGroup.displayName = "SelectGroup";
