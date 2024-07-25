import React, { forwardRef } from "react";
import { PaginationLink } from "./PaginationLink";
import { CiSquareChevRight } from "react-icons/ci";
import { cn } from "../../lib/util";

export const PaginationNext = forwardRef(({ className, ...props }, ref) => {
  return (
    <PaginationLink
      aria-label="Próxima Página"
      className={cn("gap-1 pl-2.5", className)}
      {...props}
      ref={ref}
    >
      <span>Next</span>
      <CiSquareChevRight className="size-4" />
    </PaginationLink>
  );
});

PaginationNext.displayName = "PaginationNext";
