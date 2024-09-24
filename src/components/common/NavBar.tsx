"use client";

import { SECTION_TITLE } from "@/constants/constants";
import React, { useState, useEffect } from "react";
import { SlideUpComponent } from "../animation/SlideUp";
import { AnimatePresence } from "framer-motion";
import HeightUp from "../animation/HeightUp";
import SlideDown from "../animation/SlideDown";

const NavBar = () => {
  const [currentSelect, setCurrentSelection] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isNav, setIsNav] = useState<boolean>(false);

  const menuItems = [
    SECTION_TITLE.aboutMe,
    SECTION_TITLE.project,
    SECTION_TITLE.skill,
    SECTION_TITLE.experience,
    SECTION_TITLE.contact,
  ];

  const handleScrollToSection = (section: string) => {
    if (isClicked) return;
    setIsClicked(true);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        setIsClicked(false);
        setCurrentSelection(section);
      }, 500);
    }
  };

  const handleScroll = () => {
    const sections = menuItems.map((item) => document.getElementById(item));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (window.scrollY < window.innerHeight) setIsNav(false);
    else setIsNav(true);

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setCurrentSelection(section.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isNav && (
        <>
          <div className="lg:block hidden">
            <div className="fixed top-1/2 transform -translate-y-1/2 right-10 flex flex-col justify-center h-full py-20 transition-opacity duration-300">
              <HeightUp />
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
              <HeightUp />
            </div>
          </div>
          {/* 데스크탑 */}
          <div className="lg:hidden block">
            <SlideDown>
            <div className="fixed top-0 left-0 w-screen h-[50px] bg-white z-10">
              <div className="flex py-1 px-2 justify-between items-center h-full">
                <h1 className="font-medium"> Changwoo</h1>
              </div>
            </div>
            </SlideDown>
          </div>
          {/* 모바일, 태블릿 */}
        </>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
