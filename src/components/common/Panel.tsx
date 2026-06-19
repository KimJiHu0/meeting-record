import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PanelVariant = "default" | "highlight" | "muted";

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
    variant?: PanelVariant;
};

const panelVariantClass: Record<PanelVariant, string> = {
    default: "border-[var(--color-border-soft)] bg-[var(--color-surface)]",
    highlight: "rounded-[var(--radius-lg)] border-emerald-200 bg-[var(--color-primary-subtle)] p-6",
    muted: "border-[var(--color-border-soft)] bg-[var(--color-surface-muted)]",
};

/**
 * @docs 정보 묶음용 공통 패널. 모든 섹션을 감싸기보다 요약, 분석 결과,
 * 일정 후보처럼 경계가 필요한 단위에만 사용한다.
 */
export function Panel({ className, variant = "default", ...props }: PanelProps) {
    return (
        <div
            className={cn(
                "rounded-[var(--radius-md)] border p-5 text-[var(--color-text)]",
                panelVariantClass[variant],
                className,
            )}
            {...props}
        />
    );
}

export type PanelHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};

/**
 * @docs 패널 상단 영역. 제목, 설명, 우측 액션의 배치를 통일한다.
 */
export function PanelHeader({ className, title, description, action, ...props }: PanelHeaderProps) {
    return (
        <div className={cn("mb-4 flex items-start justify-between gap-4", className)} {...props}>
            <div className="min-w-0">
                <h2 className="text-[18px] font-bold leading-[26px] text-[var(--color-text)]">{title}</h2>
                {description ? (
                    <p className="mt-1 text-[13px] leading-5 text-[var(--color-text-muted)]">{description}</p>
                ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
    );
}
