import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
    "inline-flex min-h-6 items-center rounded-[var(--radius-full)] px-2.5 text-[13px] font-semibold leading-[18px]",
    {
        variants: {
            tone: {
                ready: "bg-gray-100 text-gray-600",
                recording: "bg-red-50 text-red-600",
                uploading: "bg-blue-50 text-blue-600",
                analyzing: "bg-blue-50 text-blue-600",
                complete: "bg-[var(--color-primary-soft)] text-emerald-700",
                failed: "bg-red-50 text-red-600",
                saved: "bg-[var(--color-primary-subtle)] text-emerald-600",
                neutral: "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
            },
        },
        defaultVariants: {
            tone: "neutral",
        },
    },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

/**
 * @docs 녹음, 업로드, 분석, 저장 상태를 색상과 텍스트로 함께 전달하는 배지.
 */
export function Badge({ className, tone, ...props }: BadgeProps) {
    return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
