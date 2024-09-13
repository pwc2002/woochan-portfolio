import { useEffect, useRef, useState } from "react";

export const useHandleWheel = () => {
  const isScrolling = useRef<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(0);

  const handleWheel = (event: WheelEvent) => {
    const bodyOverflow = getComputedStyle(document.body).overflow;

    if (isScrolling.current || bodyOverflow === "hidden") {
      event.preventDefault();
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    const sections = document.body.children;
    const newSectionIndex = Math.max(
      0,
      Math.min(currentSection + direction, sections.length - 1)                             
    );

    if (newSectionIndex !== currentSection) {
      isScrolling.current = true;
      setCurrentSection(newSectionIndex);

      document.documentElement.scrollTo({
        top: window.innerHeight * newSectionIndex,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 2000);
    }
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (isScrolling.current) {
      event.preventDefault();
    }
  };



  return { isScrolling, handleWheel, handleTouchMove, currentSection };
};
