import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 이창우",
  description: "프론트엔드 개발자 이창우 포트폴리오 입니다.",
  icons: {
    icon: "imgs/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
      <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
    </html>
  );
}
