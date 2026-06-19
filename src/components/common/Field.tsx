import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type FieldProps = {
    id: string;
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    children: ReactNode;
};

/**
 * @docs 입력 필드의 라벨, 설명, 에러 메시지를 일관된 순서로 묶는다.
 */
export function Field({ id, label, description, error, required, children }: FieldProps) {
    const describedBy = [description ? `${id}-description` : null, error ? `${id}-error` : null]
        .filter(Boolean)
        .join(" ");

    return (
        <div className="grid gap-2">
            {label ? (
                <Label htmlFor={id}>
                    {label}
                    {required ? <span className="text-[var(--color-danger)]"> *</span> : null}
                </Label>
            ) : null}
            <div data-describedby={describedBy || undefined}>{children}</div>
            {description ? (
                <p id={`${id}-description`} className="text-[13px] leading-5 text-[var(--color-text-muted)]">
                    {description}
                </p>
            ) : null}
            {error ? (
                <p id={`${id}-error`} role="alert" className="text-[13px] leading-5 text-[var(--color-danger)]">
                    {error}
                </p>
            ) : null}
        </div>
    );
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            className={cn("text-[13px] font-semibold leading-[18px] text-[var(--color-text)]", className)}
            {...props}
        />
    );
}

/**
 * @docs 기본 높이 44px의 공통 입력창. focus-visible과 disabled 상태를 포함한다.
 */
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[14px] text-[15px] text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-[3px] focus:ring-emerald-500/15 disabled:bg-[var(--color-surface-muted)] disabled:text-[var(--color-text-subtle)]",
                className,
            )}
            {...props}
        />
    );
}

/**
 * @docs 회의 메모, 설명, 에러 원인 입력에 쓰는 공통 텍스트 영역.
 */
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "min-h-[120px] w-full resize-y rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-[14px] py-[14px] text-[15px] leading-6 text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-[3px] focus:ring-emerald-500/15 disabled:bg-[var(--color-surface-muted)] disabled:text-[var(--color-text-subtle)]",
                className,
            )}
            {...props}
        />
    );
}
