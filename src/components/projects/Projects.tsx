import React, { useState } from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { PROJECT_SOLO_LIST, PROJECT_TAB, PROJECT_TEAM_LIST } from "@/datas/project-list.data";

interface ProjectsProps {
  handleWheel: (event: WheelEvent) => void;
}

const Projects = ({ handleWheel }: ProjectsProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<string | null>(
    PROJECT_TAB[0].type
  );
  const [projectID, setProjectID] = useState<number | undefined>();

  const onClickProjectType = (e: React.MouseEvent<HTMLElement>) => {
    setProjectType(e.currentTarget.textContent);
  };

  const onOpenModal = (id: number) => {
    setIsDetailOpen(true);
    setProjectID(id);
  };

  const onCloseModal = () => {
    document.body.style.overflow = "auto";
    setIsDetailOpen(false);
  };

  return (
    <>
      {isDetailOpen && (
        <ProjectDetailModal
          onCloseModal={onCloseModal}
          handleWheel={handleWheel}
          projectID={projectID}
        />
      )}
      <Layout title={SECTION_TITLE.project}>
        <div className="w-full h-full flex flex-col">
          <ul className="my-10 flex gap-5 font-bold text-2xl">
            {PROJECT_TAB.map((item, index) => (
              <li
                key={item.type}
                onClick={onClickProjectType}
                className={
                  projectType === item.type
                    ? "text-pureWhite cursor-pointer"
                    : "text-secondary cursor-pointer"
                }
              >
                {item.type}
              </li>
            ))}
          </ul>
          <div className="w-full h-[674px] grid grid-cols-3 grid-rows-2 gap-5">
            {projectType === "팀 프로젝트" ? (
              <>
                {PROJECT_TEAM_LIST.map((item, index) => (
                  <li key={item.id} onClick={() => onOpenModal(item.id)}>
                    <ProjectCard {...item} />
                  </li>
                ))}
              </>
            ) : (
              <>
                {PROJECT_SOLO_LIST.map((item, index) => (
                  <li key={item.id} onClick={() => onOpenModal(item.id)}>
                    <ProjectCard {...item} />
                  </li>
                ))}
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
