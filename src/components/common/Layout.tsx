import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <section id={title} className="w-screen h-screen py-20 px-[15%] snap-start">
      <div className="w-full h-8 flex items-center">
        <hr className="flex-grow border-solid border-pureWhite mr-5 opacity-70" />
        <h1 className="text-pureWhite text-lg font-bold">{title}</h1>
      </div>
      {children}
      <div className="w-full flex justify-center items-center -translate-y-10">
        <dotlottie-player
          src="https://lottie.host/e300cb38-7d84-4ffc-a5f5-3e79d62df193/qMcWoF9z0E.json"
          background="transparent"
          speed="1"
          style={{ width: "50px", height: "50px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </section>
  );
};

export default Layout;
