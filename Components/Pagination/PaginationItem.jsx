import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const PaginationItem = forwardRef(({ className, ...props }, ref) => {
  return <li className={cn("", className)} {...props} ref={ref} />;
});

PaginationItem.displayName = "PaginationItem";
