import React, { ComponentProps, forwardRef } from "react";
import { cn } from "../../lib/util";
export const PaginationContent = forwardRef<
  HTMLUListElement,
  ComponentProps<"ul">
>(({ className, ...props }, ref) => {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
      ref={ref}
    />
  );
});

PaginationContent.displayName = "PaginationContent";