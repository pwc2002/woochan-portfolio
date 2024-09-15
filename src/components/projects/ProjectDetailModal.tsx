import React, { useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";
import { projectDetailData } from "@/datas/project-detail.data";

interface ProjectDetailModalProps {
  onCloseModal: () => void;
  handleWheel : (event: WheelEvent) => void;
  projectID : number | undefined;
}

const ProjectDetailModal = ({ onCloseModal, handleWheel, projectID }: ProjectDetailModalProps) => {
  
  const detailData = projectDetailData.find((item) => (item.id === projectID))

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
      <ProjectDetailDescription detailData={detailData} />
    </section>
  );
};

export default ProjectDetailModal;
