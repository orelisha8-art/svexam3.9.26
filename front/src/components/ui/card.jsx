import * as React from "react";
import { cn } from "../../lib/utils";

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-portal/30 bg-space-card p-5 shadow-[0_0_20px_rgba(0,0,0,0.4)]",
        "transition-transform hover:-translate-y-1 hover:border-portal/70 hover:shadow-[0_0_24px_rgba(151,206,76,0.35)]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return <div className={cn("mb-3 flex flex-col gap-1", className)} {...props} />;
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-display text-2xl tracking-wide text-portal drop-shadow-[0_0_6px_rgba(151,206,76,0.6)]", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("flex flex-col gap-3", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent };
