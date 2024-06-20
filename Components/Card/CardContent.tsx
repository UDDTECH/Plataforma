import React, { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";

type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn("p-6 pt-0", className)} {...props} ref={ref} />;
  }
);

CardContent.displayName = "CardContent";
