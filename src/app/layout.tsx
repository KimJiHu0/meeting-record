import type { Metadata } from "next";
import "@/assets/styles/common/index.css";

export const metadata: Metadata = {
    title: "MeetingFlow",
    description: "회의 기록과 AI 분석 흐름을 관리하는 생산성 도구",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
