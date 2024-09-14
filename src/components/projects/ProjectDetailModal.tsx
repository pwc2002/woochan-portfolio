import React, { useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";

interface ProjectDetailModalProps {
  onCloseModal: () => void;
  handleWheel : (event: WheelEvent) => void;
}

const ProjectDetailModal = ({ onCloseModal, handleWheel }: ProjectDetailModalProps) => {

  useEffect(() => {
    document.body.removeEventListener("wheel", handleWheel);

    return () => {
      document.body.addEventListener("wheel", handleWheel, { passive: false });
    };
  }, [handleWheel]);

  const onClickOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }
  
  return (
    <section
      onClick={onClickOverlay}
      id="ProjectDetail"
      className="pb-10 absolute w-screen h-screen bg-black bg-opacity-70 z-10 overflow-y-auto" >
      <ProjectHeader onCloseModal={onCloseModal} />
      <ProjectDetailDescription />
    </section>
  );
};

export default ProjectDetailModal;
