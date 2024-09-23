"use client";

import { SECTION_TITLE } from "@/constants/constants";
import React, { useState } from "react";
import { SlideUpComponent } from "../animation/SlideUp";

const NavBar = () => {
  const [currentSelect, setCurrentSelection] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const menuItems = [
    SECTION_TITLE.aboutMe,
    SECTION_TITLE.project,
    SECTION_TITLE.skill,
    SECTION_TITLE.experience,
    SECTION_TITLE.contact,
  ];

  const handleScrollToSection = (section : any) => {
    console.log(section)
    if (isClicked) return;
    setIsClicked(true);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSelection(section);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-10 flex flex-col justify-center h-full py-20">
      <div className="w-[1px] h-[35%] bg-pureWhite mx-auto opacity-70" />
      <div className="flex flex-col justify-center items-center gap-6 font-bold my-10">
        {menuItems.map((item, index) => (
          <SlideUpComponent key={item} delay={index * 0.1}>
            <div
              onClick={() => handleScrollToSection(item)}
              className={`cursor-pointer w-32 text-center duration-300 ${
                currentSelect === item
                  ? "text-pureWhite text-2xl font-bold"
                  : "text-grey text-sm"
              }`}
            >
              {item}
            </div>
          </SlideUpComponent>
        ))}
      </div>
      <div className="w-[1px] h-[35%] bg-pureWhite mx-auto opacity-70" />
    </div>
  );
};

export default NavBar;
