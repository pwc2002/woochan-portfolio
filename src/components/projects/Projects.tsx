"use client";

import React, { useState, useEffect } from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import ProjectCard from "./ProjectCard";
import {
  PROJECT_TEAM_LIST,
} from "@/datas/project-list.data";
import { SlideUpScroll } from "../animation/SlideUp";

const Projects = () => {
  const [projectID, setProjectID] = useState<number | undefined>();

  const onOpenModal = (id: number) => {
    document.body.style.overflow = "hidden";
    setProjectID(id);
  };

  const onCloseModal = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.modal) {
        onOpenModal(projectID!);
      } else {
        onCloseModal();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [projectID]);

  return (
    <>
      <Layout title={SECTION_TITLE.project}>
        <div
          className="w-full min-h-auto flex flex-col"
          style={{ minHeight: "calc(100vh - 140px)" }}
        >
          <div
            className="w-full grid h-auto gap-5
          lg:grid-cols-3
          md:grid-cols-2
          grid-cols-1
          min-h-[650px]
          "
          >
            {PROJECT_TEAM_LIST.map((item, index) => (
              <SlideUpScroll key={item.id} delay={index * 0.1}>
                <li key={item.id} onClick={() => onOpenModal(item.id)}>
                  <ProjectCard {...item} />
                </li>
              </SlideUpScroll>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
