'use client';

import React, { useState } from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import { PROJECT_SOLO_LIST, PROJECT_TAB, PROJECT_TEAM_LIST } from "@/datas/project-list.data";
import { SlideUpScroll } from "../animation/SlideUp";

const Projects = () => {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<string | null>(PROJECT_TAB[0].type);
  const [projectID, setProjectID] = useState<number | undefined>();

  const onClickProjectType = (e: React.MouseEvent<HTMLElement>) => {
    setProjectType(e.currentTarget.textContent);
  };

  const onOpenModal = (id: number) => {
    setIsDetailOpen(true);
    document.body.style.overflow = "hidden";
    setProjectID(id);
  };

  const onCloseModal = () => {
    document.body.style.overflow = "auto";
    setIsDetailOpen(false);
  };

  return (
    <>
      {isDetailOpen && (
        <ProjectDetailModal onCloseModal={onCloseModal} projectID={projectID} />
      )}
      <Layout title={SECTION_TITLE.project}>
        <div className="w-full min-h-auto flex flex-col">
          <ul className="my-10 flex gap-5 font-bold text-2xl">
            {PROJECT_TAB.map((item) => (
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
          <div className="w-full grid h-auto gap-5
          lg:grid-cols-3
          md:grid-cols-2
          grid-cols-1
          min-h-[650px]
          ">
            {projectType === "팀 프로젝트" ? (
              PROJECT_TEAM_LIST.map((item, index) => (
                <SlideUpScroll key={item.id} delay={index * 0.1}>
                <li key={item.id} onClick={() => onOpenModal(item.id)}>
                  <ProjectCard {...item} />
                </li>
                </SlideUpScroll>

              ))
            ) : (
              PROJECT_SOLO_LIST.map((item, index) => (
                <SlideUpScroll key={item.id} delay={index * 0.1}>
                <li key={item.id} onClick={() => onOpenModal(item.id)}>
                  <ProjectCard {...item} />
                </li>
                </SlideUpScroll>

              ))
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
