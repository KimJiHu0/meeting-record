"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/cn";

export type DialogProps = {
    open: boolean;
    title: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    closeLabel?: string;
    onOpenChange: (open: boolean) => void;
};

/**
 * @docs 확인, 수정, 일정 상세처럼 현재 흐름을 잠시 멈춰야 하는 작업에 쓰는 공통 Dialog.
 */
export function Dialog({
    open,
    title,
    description,
    children,
    footer,
    closeLabel = "닫기",
    onOpenChange,
}: DialogProps) {
    if (!open) {
        return null;
    }

    return (
        <div
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-end bg-gray-900/40 p-0 tablet:place-items-center tablet:p-6"
            role="dialog"
        >
            <div className="w-full rounded-t-[var(--radius-lg)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-md)] tablet:max-w-[560px] tablet:rounded-[var(--radius-lg)]">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h2 className="text-[22px] font-bold leading-[30px] text-[var(--color-text)]">{title}</h2>
                        {description ? (
                            <p className="mt-2 text-[13px] leading-5 text-[var(--color-text-muted)]">
                                {description}
                            </p>
                        ) : null}
                    </div>
                    <Button
                        aria-label={closeLabel}
                        className="shrink-0"
                        size="icon"
                        variant="ghost"
                        onClick={() => onOpenChange(false)}
                    >
                        <X aria-hidden className="size-5" />
                    </Button>
                </div>
                <div>{children}</div>
                {footer ? <div className={cn("mt-6 flex justify-end gap-2")}>{footer}</div> : null}
            </div>
        </div>
    );
}
