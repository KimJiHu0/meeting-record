import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
    "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-4 text-[15px] font-bold leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-70",
    {
        variants: {
            variant: {
                primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] disabled:bg-gray-300",
                secondary:
                    "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-muted)]",
                ghost: "bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
                danger: "bg-red-50 text-[var(--color-danger)] hover:bg-red-100",
            },
            size: {
                sm: "min-h-9 px-3 text-[13px] leading-[18px]",
                md: "min-h-11 px-[18px]",
                lg: "min-h-12 px-5",
                icon: "size-10 p-0",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        loading?: boolean;
        leftIcon?: ReactNode;
        rightIcon?: ReactNode;
    };

/**
 * @docs MeetingFlow 공통 버튼. 주요 CTA는 variant="primary"를 사용하고,
 * 보조 액션은 secondary/ghost/danger로 의미를 분리한다.
 */
export function Button({
    className,
    variant,
    size,
    fullWidth,
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size, fullWidth }), className)}
            disabled={disabled || loading}
            type={type}
            {...props}
        >
            {loading ? <Loader2 aria-hidden className="size-4 animate-spin" /> : leftIcon}
            {children}
            {!loading ? rightIcon : null}
        </button>
    );
}
