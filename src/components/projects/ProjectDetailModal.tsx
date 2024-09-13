import React, { useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";
import { useHandleWheel } from "@/hooks/useHandleWheel";

interface ProjectDetailModalProps {
  onCloseModal : () => void
}

const ProjectDetailModal = ({onCloseModal} : ProjectDetailModalProps) => {
  const { handleWheel, handleTouchMove } = useHandleWheel();
  useEffect(() => {
    document.body.removeEventListener("wheel", handleWheel);
    document.body.removeEventListener("touchmove", handleTouchMove);

    return () => {
      document.body.addEventListener("wheel", handleWheel);
      document.body.addEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      id="ProjectDetail"
      className="pb-10 absolute w-screen h-screen bg-black bg-opacity-70 z-10 overflow-y-auto"
    >
      <ProjectHeader onCloseModal={onCloseModal}/>
      <ProjectDetailDescription/>
      </section>
  );
};

export default ProjectDetailModal;
