import React, { forwardRef } from "react";
import { cn } from "../../../lib/util";
import { buttonVariants } from "../../Button/Button";

const PaginationLink = forwardRef(
  ({ isActive, className, children, size = "lg", ...props }, ref) => {
    return (
      <a
        aria-current={isActive ? "page" : undefined}
        className={cn(
          buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size,
          }),
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

PaginationLink.displayName = "PaginationLink";

export default PaginationLink;
