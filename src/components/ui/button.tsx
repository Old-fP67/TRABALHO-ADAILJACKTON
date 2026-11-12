import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-35",
  {
    variants: {
      variant: {
        primary:
          "rounded-md bg-primary px-6 py-3 text-primary-foreground shadow-field hover:-translate-y-0.5 hover:bg-primary/90",
        arrow:
          "size-11 rounded-full border border-border bg-card/90 text-foreground shadow-field backdrop-blur-sm hover:border-primary hover:bg-secondary",
        ghost: "rounded-md px-3 py-2 text-foreground hover:bg-secondary",
        outline: "rounded-md border border-input bg-background px-4 py-2 text-foreground hover:bg-secondary",
        destructive: "rounded-md bg-destructive px-4 py-2 text-destructive-foreground hover:bg-destructive/90",
        secondary: "rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/80",
        link: "rounded-md px-2 py-1 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "text-sm",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";