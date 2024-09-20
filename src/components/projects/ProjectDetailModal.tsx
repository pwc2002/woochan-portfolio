import React, { useEffect } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";
import { projectDetailData } from "@/datas/project-detail.data";

interface ProjectDetailModalProps {
  onCloseModal: () => void;
  projectID : number | undefined;
}

const ProjectDetailModal = ({ onCloseModal, projectID }: ProjectDetailModalProps) => {
  
  const detailData = projectDetailData.find((item) => (item.id === projectID))

  const onClickOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }
  
  return (
    <section
      onClick={onClickOverlay}
      id="ProjectDetail"
      className="pb-10 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-10 overflow-y-auto" >
      <ProjectHeader onCloseModal={onCloseModal} />
      <ProjectDetailDescription detailData={detailData} />
    </section>
  );
};

export default ProjectDetailModal;
