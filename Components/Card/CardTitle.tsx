import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
export default CardTitle;
CardTitle.displayName = "CardTitle";
