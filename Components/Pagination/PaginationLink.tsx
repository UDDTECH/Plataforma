import React, { ComponentProps, forwardRef } from "react";
import { cn } from "../../lib/util";

export type PageLinkProps = ComponentProps<"a"> & {
  isActive?: boolean;
};

export const PaginationLink = forwardRef<HTMLAnchorElement, PageLinkProps>(
  ({ isActive, className, ...props }, ref) => {
    return (
      <a
        aria-current={isActive ? "page" : undefined}
        className={cn(`${isActive ? "bg-slate-200/80" : ""}`, className)}
        {...props}
        ref={ref}
      />
    );
  }
);

PaginationLink.displayName = "PaginationLink";
