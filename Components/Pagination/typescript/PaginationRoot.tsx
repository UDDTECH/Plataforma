import React, { ComponentProps, HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";
export const PaginationRoot = forwardRef<HTMLElement, ComponentProps<"nav">>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
PaginationRoot.displayName = "PaginationRoot";