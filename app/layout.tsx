import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taegeun-oh.github.io/"),
  title: {
    default: "Vision & Autonomous Intelligence Lab",
    template: "%s · VAI Lab",
  },
  description:
    "Research in autonomous systems, intelligent path planning, computer vision, and medical image intelligence led by Taegeun Oh at Dong Seoul University.",
  verification: {
    google: "avBA2pFh3_LUaiQSiH_CndwWtwop77bxMjukt_g554s",
  },
  openGraph: {
    title: "Vision & Autonomous Intelligence Lab",
    description:
      "Computer vision and autonomous intelligence for systems that perceive, plan, and act.",
    type: "website",
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
