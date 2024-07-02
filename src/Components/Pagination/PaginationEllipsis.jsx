import React, { forwardRef } from "react";
import { CiSquareMore } from "react-icons/ci";
import { cn } from "../../lib/util";

export const PaginationEllipsis = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
      ref={ref}
    >
      <CiSquareMore className="size-4" />
    </span>
  );
});

PaginationEllipsis.displayName = "PaginationEllipsis";
