import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/util";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "submit", className, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
