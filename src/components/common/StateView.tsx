import { AlertCircle, CheckCircle2, Inbox, Loader2 } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type StateTone = "empty" | "loading" | "error" | "success";

export type StateViewProps = HTMLAttributes<HTMLDivElement> & {
    tone?: StateTone;
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};

const stateIcon = {
    empty: Inbox,
    loading: Loader2,
    error: AlertCircle,
    success: CheckCircle2,
};

const stateColor: Record<StateTone, string> = {
    empty: "text-[var(--color-text-muted)]",
    loading: "text-[var(--color-info)]",
    error: "text-[var(--color-danger)]",
    success: "text-[var(--color-success)]",
};

/**
 * @docs 빈 상태, 로딩, 오류, 성공 안내를 같은 정보 구조로 보여주는 상태 컴포넌트.
 */
export function StateView({ className, tone = "empty", title, description, action, ...props }: StateViewProps) {
    const Icon = stateIcon[tone];

    return (
        <div
            className={cn(
                "flex min-h-[180px] flex-col items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center",
                className,
            )}
            {...props}
        >
            <Icon
                aria-hidden
                className={cn("mb-4 size-7", stateColor[tone], tone === "loading" && "animate-spin")}
            />
            <p className="text-[18px] font-bold leading-[26px] text-[var(--color-text)]">{title}</p>
            {description ? (
                <p className="mt-2 max-w-[520px] text-[13px] leading-5 text-[var(--color-text-muted)]">
                    {description}
                </p>
            ) : null}
            {action ? <div className="mt-5">{action}</div> : null}
        </div>
    );
}
