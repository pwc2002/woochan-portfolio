"use client";

import React, { useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";
import { projectDetailData } from "@/datas/project-detail.data";
import ProjectImageDetail from "./ProjectImageDetail";

interface ProjectDetailModalProps {
  onCloseModal: () => void;
  projectID: number | undefined;
}

const ProjectDetailModal = ({
  onCloseModal,
  projectID,
}: ProjectDetailModalProps) => {
  const [isDetailImage, setIsDetailImage] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);
  const detailData = projectDetailData.find((item) => item.id === projectID);

  const onClickOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const onClickImage = (id: number) => {
    setStartIndex(id);
    setIsDetailImage(true);
  };

  return (
    <section
      onClick={onClickOverlay}
      id="ProjectDetail"
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-20 overflow-y-auto"
    >
      {isDetailImage && (
        <ProjectImageDetail
          imgs={detailData?.imgs}
          title={detailData?.title}
          setIsDetailImage={setIsDetailImage}
          initialIndex={startIndex}
        />
      )}
      <ProjectHeader
        onCloseModal={onCloseModal}
        primaryColor={detailData?.primaryColor}
        URLS={detailData?.URLS}
      />
      <ProjectDetailDescription
        detailData={detailData}
        onClickImage={onClickImage}
      />
    </section>
  );
};

export default ProjectDetailModal;
