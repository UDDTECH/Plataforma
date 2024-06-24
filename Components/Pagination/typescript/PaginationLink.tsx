import React, { ComponentProps, forwardRef } from "react";
import { cn } from "../../../lib/util";
import { ButtonProps, buttonVariants } from "../../Button/typescript/Button";

export type PageLinkProps = ComponentProps<"a"> &
  Pick<ButtonProps, "size"> & {
    isActive?: boolean;
  };

export const PaginationLink = forwardRef<HTMLAnchorElement, PageLinkProps>(
  ({ isActive, className, size = "lg", ...props }, ref) => {
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
      />
    );
  }
);

PaginationLink.displayName = "PaginationLink";
