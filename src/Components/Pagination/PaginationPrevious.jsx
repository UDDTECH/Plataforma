import React, { forwardRef } from "react";
import { PaginationLink } from "./PaginationLink";
import { CiSquareChevLeft } from "react-icons/ci";
import { cn } from "../../lib/util";

export const PaginationPrevious = forwardRef(({ className, ...props }, ref) => {
  return (
    <PaginationLink
      aria-label="Página Anterior"
      className={cn("gap-1 pl-2.5", className)}
      {...props}
      ref={ref}
    >
      <CiSquareChevLeft className="size-4" />
      <span>Previous</span>
    </PaginationLink>
  );
});

PaginationPrevious.displayName = "PaginationPrevious";
