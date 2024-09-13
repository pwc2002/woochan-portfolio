import { useEffect, useRef, useState } from "react";

export const useHandleWheel = () => {
  const isScrolling = useRef<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
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

    // body에 휠 및 터치 이벤트 추가
    document.body.addEventListener("wheel", handleWheel, { passive: false });
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("wheel", handleWheel);
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentSection]);

  return { isScrolling };
};
