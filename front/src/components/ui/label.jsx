import * as React from "react";
import { cn } from "../../lib/utils";

function Label({ className, ...props }) {
  return (
    <label
      className={cn(
        "block text-xs font-bold uppercase tracking-widest text-cable mb-1",
        className
      )}
      {...props}
    />
  );
}

export { Label };
