'use client';

import { useEffect, useRef, useState } from "react";
import AboutMe from "@/components/aboutme/AboutMe";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import OverView from "@/components/overview/OverView";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skill/Skill";

export default function Home() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    const sections = Array.from(mainElement.children);

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) {
        event.preventDefault();
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const newSectionIndex = Math.max(0, Math.min(currentSection + direction, sections.length - 1));

      if (newSectionIndex !== currentSection) {
        isScrolling.current = true;
        setCurrentSection(newSectionIndex);

        window.scrollTo({
          top: window.innerHeight * newSectionIndex,
          behavior: "smooth"
        });

        setTimeout(() => {
          isScrolling.current = false;
        }, 1500);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isScrolling.current) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection]);

  return (
    <main ref={mainRef}>
      <OverView />
      <AboutMe />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
