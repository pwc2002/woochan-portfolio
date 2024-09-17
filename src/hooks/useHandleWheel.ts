import { useRef, useState, useCallback, useEffect } from "react";

export const useHandleWheel = (isModalOpen : boolean) => {
  const isScrolling = useRef<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const currentSectionRef = useRef(currentSection);

  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  const handleWheel = useCallback((event: WheelEvent) => {
    if (isModalOpen) {
      event.preventDefault();
      return;
    }

    const bodyOverflow = getComputedStyle(document.body).overflow;

    if (isScrolling.current || bodyOverflow === "hidden") {
      event.preventDefault();
      return;
    }

    const direction = event.deltaY > 0 ? 1 : -1;
    const sections = document.body.children;
    const newSectionIndex = Math.max(
      0,
      Math.min(currentSectionRef.current + direction, sections.length - 1)
    );

    if (newSectionIndex !== currentSectionRef.current) {
      isScrolling.current = true;
      setCurrentSection(newSectionIndex);

      document.documentElement.scrollTo({
        top: window.innerHeight * newSectionIndex,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (isScrolling.current) {
      event.preventDefault();
    }
  }, []);

  return { isScrolling, handleWheel, handleTouchMove, currentSection };
};
