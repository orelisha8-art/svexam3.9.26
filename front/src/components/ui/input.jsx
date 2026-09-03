import * as React from "react";
import { cn } from "../../lib/utils";

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border-2 border-cable/40 bg-space-card px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition-colors",
        "focus:border-portal focus:shadow-[0_0_14px_rgba(151,206,76,0.55)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
