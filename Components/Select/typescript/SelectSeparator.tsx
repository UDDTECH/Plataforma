import React, { forwardRef, HTMLAttributes } from "react";
import { cn } from "../../../lib/util";

type SelectSeparatorProps = HTMLAttributes<HTMLHRElement>;

export const SelectSeparator = forwardRef<HTMLHRElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-gray-300", className)}
      {...props}
    />
  )
);

SelectSeparator.displayName = "SelectSeparator";
