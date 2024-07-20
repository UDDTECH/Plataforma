import React, { forwardRef } from "react";
import { cn } from "../../lib/util";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-black hover:bg-blue-500/80",
        destructive: "bg-red-200 text-black hover:bg-red-200/80",
        outline:
          "border border-black/80 bg-transparent hover:bg-transparent/80 hover:text-black/80",
        secondary: "bg-blue-200 text-black hover:bg-blue-200/80",
        ghost:
          "hover:bg-slate-200/80 hover:text-black/70 dark:hover:bg-slate-600/80",
        link: "text-blue-400 italic underline-offset-4 hover:underline bg-amber-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-md px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const Button = forwardRef(
  ({ type = "submit", variant, size, className, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";
