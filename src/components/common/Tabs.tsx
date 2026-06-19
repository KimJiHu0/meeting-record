import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TabsVariant = "pill" | "underline";

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
    variant?: TabsVariant;
};

/**
 * @docs 요약, 결정사항, Action Item, Transcript 같은 콘텐츠 전환을 위한 탭 목록.
 */
export function Tabs({ className, variant = "pill", ...props }: TabsProps) {
    return (
        <div
            className={cn(
                "flex gap-2 overflow-x-auto",
                variant === "underline" && "gap-6 border-b border-[var(--color-border-soft)]",
                className,
            )}
            role="tablist"
            {...props}
        />
    );
}

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    active?: boolean;
    variant?: TabsVariant;
    children: ReactNode;
};

/**
 * @docs active 상태를 외부에서 제어하는 얇은 탭 버튼.
 */
export function Tab({ className, active = false, variant = "pill", children, type = "button", ...props }: TabProps) {
    return (
        <button
            aria-selected={active}
            className={cn(
                "shrink-0 text-[15px] font-semibold leading-5 text-[var(--color-text-muted)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
                variant === "pill" &&
                    "min-h-9 rounded-[var(--radius-full)] px-[14px] hover:bg-[var(--color-surface-muted)]",
                variant === "pill" && active && "bg-[var(--color-primary-soft)] text-emerald-700",
                variant === "underline" &&
                    "-mb-px border-b-2 border-transparent px-0 pb-3 hover:text-[var(--color-text)]",
                variant === "underline" && active && "border-[var(--color-primary)] text-[var(--color-text)]",
                className,
            )}
            role="tab"
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}
