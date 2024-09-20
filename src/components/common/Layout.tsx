import React from "react";

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
    h-screen m-auto"
    >
      <div className="w-full h-8 flex items-center">
        <hr className="flex-grow border-solid border-pureWhite mr-5 opacity-70" />
        <h1
          className="text-pureWhite font-bold
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
