import type { Metadata } from "next";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Badge, ButtonLink, Panel } from "@/components/common";
import { MarketingShell } from "@/components/layouts";

export const metadata: Metadata = {
    title: "MeetingFlow",
};

const flowHighlights = [
    "회의 녹음부터 AI 요약까지 한 흐름으로 관리",
    "결정사항과 Action Item을 놓치지 않게 정리",
    "일정 후보를 빠르게 확인하고 저장",
];

export default function HomePage() {
    return (
        <MarketingShell contentClassName="flex-col justify-center">
            <Badge tone="saved" className="w-fit">
                AI 회의 흐름 관리
            </Badge>
            <div className="mt-6 grid gap-4">
                <h1 className="text-[32px] font-bold leading-[42px] text-[var(--color-text)] tablet:text-[40px] tablet:leading-[52px]">
                    회의가 끝난 뒤의 일을 더 가볍게.
                </h1>
                <p className="max-w-[560px] text-[15px] leading-6 text-[var(--color-text-muted)]">
                    MeetingFlow는 회의 기록, AI 분석, 일정 저장까지 이어지는 업무 흐름을 산뜻하고 명확하게
                    정리합니다.
                </p>
            </div>

            <div className="mt-10 grid gap-3">
                {flowHighlights.map((highlight) => (
                    <div
                        key={highlight}
                        className="flex items-center gap-3 text-[15px] leading-6 text-[var(--color-text)]"
                    >
                        <CheckCircle2 aria-hidden className="size-5 shrink-0 text-[var(--color-primary)]" />
                        <span>{highlight}</span>
                    </div>
                ))}
            </div>

            <Panel variant="highlight" className="mt-10 max-w-[520px]">
                <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-white text-[var(--color-primary)]">
                        <Sparkles aria-hidden className="size-5" />
                    </span>
                    <div>
                        <p className="text-[13px] font-semibold leading-[18px] text-emerald-700">오늘의 흐름</p>
                        <p className="mt-1 text-[18px] font-bold leading-[26px] text-[var(--color-text)]">
                            녹음 대기 2건, 분석 완료 4건
                        </p>
                        <p className="mt-2 text-[13px] leading-5 text-[var(--color-text-muted)]">
                            로그인하면 최근 회의와 다음 액션을 바로 확인할 수 있습니다.
                        </p>
                    </div>
                </div>
            </Panel>

            <div className="mt-8 flex flex-col gap-2 tablet:flex-row">
                <ButtonLink href="/auth/login">로그인</ButtonLink>
                <ButtonLink href="#" variant="secondary">
                    회원가입
                </ButtonLink>
            </div>
        </MarketingShell>
    );
}
