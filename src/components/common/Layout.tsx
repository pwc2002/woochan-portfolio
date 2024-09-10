import Script from "next/script";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="w-screen h-screen py-20 px-[15%]">
      <div className="w-full h-[30px] flex items-center">
        <hr className="flex-grow border-solid border-pureWhite border-[0.5px] mr-5 opacity-70" />
        <h1 className="text-pureWhite text-lg font-bold">{title}</h1>
      </div>
      {children}
      <div className="w-full flex justify-center items-center">
      <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
          strategy="afterInteractive"
        />
        <dotlottie-player
          src="https://lottie.host/e300cb38-7d84-4ffc-a5f5-3e79d62df193/qMcWoF9z0E.json"
          background="transparent"
          speed="1"
          direction="1"
          style={{ width: '50px', height: '50px' }}
          loop
          autoplay
        ></dotlottie-player>
        </div>
    </div>
  );
};

export default Layout;
