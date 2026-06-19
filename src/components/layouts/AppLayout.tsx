import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AppShellProps = HTMLAttributes<HTMLDivElement> & {
    sidebar?: ReactNode;
    children: ReactNode;
};

/**
 * @docs 데스크톱 사이드바 + 메인 콘텐츠, 태블릿/폰 단일 컬럼 전환을 위한 앱 레이아웃 기반.
 */
export function AppShell({ className, sidebar, children, ...props }: AppShellProps) {
    return (
        <div
            className={cn(
                "mx-auto grid min-h-screen w-full max-w-[var(--content-app)] gap-6 px-5 py-6 tablet:px-7 desktop:grid-cols-[240px_minmax(0,1fr)] desktop:px-8",
                className,
            )}
            {...props}
        >
            {sidebar ? <aside className="hidden desktop:block">{sidebar}</aside> : null}
            <main className="min-w-0">{children}</main>
        </div>
    );
}

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
};

/**
 * @docs 화면별 h1과 주요 액션 배치를 통일하는 페이지 헤더.
 */
export function PageHeader({ className, title, description, action, ...props }: PageHeaderProps) {
    return (
        <header
            className={cn("mb-8 flex flex-col gap-4 tablet:flex-row tablet:items-start tablet:justify-between", className)}
            {...props}
        >
            <div className="min-w-0">
                <h1 className="text-[28px] font-bold leading-[36px] text-[var(--color-text)]">{title}</h1>
                {description ? (
                    <p className="mt-2 max-w-[var(--content-readable)] text-[15px] leading-6 text-[var(--color-text-muted)]">
                        {description}
                    </p>
                ) : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
        </header>
    );
}

export type FooterProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

/**
 * @docs 앱 하단의 저작권/보조 링크 영역을 통일하는 푸터.
 */
export function Footer({ className, children, ...props }: FooterProps) {
    return (
        <footer
            className={cn(
                "mx-auto w-full max-w-[var(--content-app)] px-5 py-6 text-sm text-[var(--color-text-muted)] tablet:px-7 desktop:px-8",
                className,
            )}
            {...props}
        >
            {children ?? <p>© MeetingFlow</p>}
        </footer>
    );
}
