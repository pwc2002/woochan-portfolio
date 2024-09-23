import React from "react";
import LengthUp from "../animation/LengthUp";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <section
      id={title}
      className="w-screen
    box-border
    lg:max-w-[1045px] lg:py-20
    md:max-w-[760px] md:py-20
    max-w-full py-10 px-5
    h-auto m-auto"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex-grow mr-5">
        <LengthUp />
        </div>
        <h1 className="text-pureWhite font-bold
    lg:text-lg
    md:text-base
    text-sm
        "
        >
          {title}
        </h1>
      </div>
      {children}
    </section>
  );
};

export default Layout;
