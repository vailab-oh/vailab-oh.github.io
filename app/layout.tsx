import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vailab-oh.github.io/"),
  title: {
    default: "Vision & Autonomous Intelligence Lab | 오태근 교수 연구실",
    template: "%s · VAI Lab | 오태근 교수 연구실",
  },
  description:
    "Vision & Autonomous Intelligence Lab at Dong Seoul University, led by Taegeun Oh (오태근). 동서울대학교 오태근 교수 연구실은 자율시스템, 경로계획, 컴퓨터비전, 의료영상 AI를 연구합니다.",
  applicationName: "VAI Lab",
  authors: [{ name: "Taegeun Oh (오태근)", url: "https://vailab-oh.github.io/people/" }],
  creator: "Taegeun Oh (오태근)",
  publisher: "Vision & Autonomous Intelligence Lab, Dong Seoul University",
  keywords: [
    "Taegeun Oh",
    "오태근",
    "Dong Seoul University",
    "동서울대학교",
    "Vision & Autonomous Intelligence Lab",
    "autonomous systems",
    "computer vision",
    "intelligent path planning",
    "medical image AI",
  ],
  verification: {
    google: "avBA2pFh3_LUaiQSiH_CndwWtwop77bxMjukt_g554s",
    other: {
      "naver-site-verification": "843183e80db11ded1b90f1bdaf9fe1366a472735",
    },
  },
  openGraph: {
    title: "Vision & Autonomous Intelligence Lab | 오태근 교수 연구실",
    description:
      "동서울대학교 오태근 교수 연구실 — computer vision and autonomous intelligence for systems that perceive, plan, and act.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
