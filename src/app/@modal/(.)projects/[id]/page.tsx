"use client";

import ProjectDetailDescription from "@/components/projects/ProjectDetailDescription";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectImageDetail from "@/components/projects/ProjectImageDetail";
import { projectDetailData } from "@/datas/project-detail.data";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProjectDetailModal = ({
  params: {id : projectID}
}: {params : {id : string}}) => {
  const router = useRouter();
  const [isDetailImage, setIsDetailImage] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);
  const numericProjectID = Number(projectID);
  const detailData = projectDetailData.find((item) => item.id === numericProjectID);

  const onExitModal = () => {
    router.back();
  }

  const onClickOverlay = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
        onExitModal();
    }
  };

  const onClickImage = (id: number) => {
    setStartIndex(id);
    setIsDetailImage(true);
  };

  const onCloseImage = () => {
    setIsDetailImage(false);
  }

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
          onCloseImage={onCloseImage}
          initialIndex={startIndex} 
        />
      )}
      <ProjectHeader
        onCloseModal={onExitModal}
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
