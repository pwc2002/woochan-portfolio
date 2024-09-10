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
    </div>
  );
};

export default Layout;
