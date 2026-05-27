import { ButtonProps } from "@/Interfaces/Interface";
import React from "react";
import { classNameMerge } from "../../lib/utils";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
        default: 'bg-card hover:bg-muted text-card-foreground border border-border',
        primary: 'bg-[var(--royal-maroon)] hover:bg-[var(--royal-maroon-light)] text-white',
        secondary: 'bg-[var(--royal-gold)] hover:bg-[var(--royal-gold-dark)] text-black',
        outline: 'border-2 border-[var(--royal-gold)] text-[var(--royal-gold)] hover:bg-[var(--royal-gold)] hover:text-black',
        ghost: 'hover:bg-muted text-foreground',
      };
  
      const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      };

      return (
        <button
          className={classNameMerge(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className!!
        )}
        ref={ref}
        {...props}
      />
      );
    }    
);

Button.displayName = "Button";

export {Button};