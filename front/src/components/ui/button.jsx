import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-portal text-space shadow-[0_0_18px_rgba(151,206,76,0.65)] hover:shadow-[0_0_26px_rgba(151,206,76,0.9)] hover:brightness-110",
        destructive:
          "bg-danger text-white shadow-[0_0_16px_rgba(255,92,92,0.6)] hover:shadow-[0_0_24px_rgba(255,92,92,0.9)] hover:brightness-110",
        outline:
          "border-2 border-portal text-portal bg-transparent hover:bg-portal/10",
        ghost: "text-cable hover:bg-cable/10",
        secondary:
          "bg-cable text-space shadow-[0_0_14px_rgba(68,229,229,0.5)] hover:shadow-[0_0_22px_rgba(68,229,229,0.85)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { Button, buttonVariants };
