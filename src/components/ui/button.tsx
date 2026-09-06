import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[11px] font-medium tracking-[0.22em] uppercase transition-colors duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        solid: "bg-charcoal text-ivory hover:bg-ink",
        outline:
          "border border-charcoal/80 bg-transparent text-charcoal hover:bg-charcoal hover:text-ivory",
        ivory:
          "border border-ivory/70 bg-transparent text-ivory hover:bg-ivory hover:text-charcoal",
        ghost: "text-charcoal hover:text-stone",
        link: "tracking-[0.18em] underline-offset-8 hover:underline",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-5",
        lg: "h-14 px-10",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
