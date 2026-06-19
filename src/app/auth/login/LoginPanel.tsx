import { CalendarCheck } from "lucide-react";
import { Button, Field, Input, Panel } from "@/components/common";

export function LoginPanel() {
    return (
        <Panel className="w-full max-w-[420px] p-6 shadow-[var(--shadow-sm)] tablet:p-8">
            <div className="mb-8">
                <div className="mb-5 flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-subtle)] text-[var(--color-primary)]">
                    <CalendarCheck aria-hidden className="size-6" />
                </div>
                <h1 className="text-[28px] font-bold leading-9 text-[var(--color-text)]">로그인</h1>
                <p className="mt-2 text-[15px] leading-6 text-[var(--color-text-muted)]">
                    회의 기록을 이어서 관리하려면 계정으로 로그인하세요.
                </p>
            </div>

            <form className="grid gap-5">
                <Field id="login-id" label="아이디">
                    <Input
                        id="login-id"
                        name="username"
                        type="text"
                        placeholder="아이디를 입력하세요"
                        autoComplete="username"
                    />
                </Field>
                <Field id="password" label="비밀번호">
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        autoComplete="current-password"
                    />
                </Field>

                <div className="flex items-center justify-between gap-3 text-[13px] leading-5">
                    <label className="flex min-h-10 items-center gap-2 text-[var(--color-text-muted)]">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
                        />
                        로그인 유지
                    </label>
                    <a className="font-semibold text-[var(--color-accent)]" href="#">
                        비밀번호 찾기
                    </a>
                </div>

                <Button type="button" fullWidth>
                    로그인
                </Button>
            </form>

            <p className="mt-6 text-center text-[13px] leading-5 text-[var(--color-text-muted)]">
                아직 계정이 없나요?{" "}
                <a className="font-semibold text-[var(--color-primary-hover)]" href="#">
                    회원가입
                </a>
            </p>
        </Panel>
    );
}
