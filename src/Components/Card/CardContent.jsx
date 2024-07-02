import React, { forwardRef } from "react";
import { cn } from "../../lib/util";

export const CardContent = forwardRef(({ className, ...props }, ref) => {
  return <div className={cn("p-6 pt-0", className)} {...props} ref={ref} />;
});

CardContent.displayName = "CardContent";
