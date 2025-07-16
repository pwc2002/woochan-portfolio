import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export const metadata: Metadata = {
  title: "프론트엔드 개발자 박우찬",
  description: "프론트엔드 개발자 박우찬 포트폴리오 입니다.",
  icons: {
    icon: "imgs/favicon.ico"
  }
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />) : null}
        {modal}
        {children}  
        </body>
      <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
    </html>
  );
}
