import type { Metadata } from "next";
import { MarketingShell } from "@/components/layouts";
import { LoginPanel } from "./LoginPanel";

export const metadata: Metadata = {
    title: "로그인 | MeetingFlow",
};

export default function LoginPage() {
    return (
        <MarketingShell contentClassName="items-center justify-center py-8">
            <LoginPanel />
        </MarketingShell>
    );
}
