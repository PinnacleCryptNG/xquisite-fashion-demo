import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full border-0 border-b border-charcoal/25 bg-transparent px-0 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-stone/70 focus:border-charcoal",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 font-sans text-sm text-charcoal outline-none transition-colors duration-300 placeholder:text-stone/70 focus:border-charcoal",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-2 block font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-stone",
        className,
      )}
      {...props}
    />
  );
}

export { Input, Label, Textarea };
