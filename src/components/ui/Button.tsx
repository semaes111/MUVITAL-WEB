import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

// ─── buttonVariants para compatibilidad con shadcn ───
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-general text-sm font-medium transition-all ease-muv focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinico disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-vital text-grafito px-6 py-3 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(16,20,23,0.18)] active:scale-[0.98]",
        destructive: "bg-red-500 text-white px-6 py-3",
        outline: "border border-mineral/20 bg-transparent text-mineral px-6 py-3 hover:bg-mineral/5",
        secondary: "bg-grafito-700 text-mineral px-6 py-3",
        ghost: "text-mineral underline underline-offset-4 decoration-transparent hover:decoration-vital",
        link: "text-vital underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// ─── Tipos ───
interface BaseProps {
  variant?: "primary-dark" | "primary-light" | "ghost" | VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "size"> & {
    href?: undefined;
  };

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "size"> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

// ─── Componente ───
const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, Props>(
  ({ className, variant = "primary-dark", size, href, children, ...props }, ref) => {
    // Mapear variantes personalizadas a clases
    const customVariants: Record<string, string> = {
      "primary-dark": "bg-vital text-grafito px-6 py-3 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(16,20,23,0.18)] active:scale-[0.98]",
      "primary-light": "bg-grafito text-mineral px-6 py-3 relative overflow-hidden group hover:-translate-y-0.5 active:scale-[0.98]",
      ghost: "text-mineral underline underline-offset-4 decoration-transparent hover:decoration-vital transition-all duration-250",
    };

    const variantClass = customVariants[variant as string] || buttonVariants({ variant: variant as VariantProps<typeof buttonVariants>["variant"], size });
    const classes = cn(variantClass, className);

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {variant === "primary-light" && (
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-vital transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-muv origin-left" />
          )}
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {variant === "primary-light" && (
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-vital transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-muv origin-left" />
        )}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

// ─── Named export para compatibilidad ───
export { Button };
export default Button;
