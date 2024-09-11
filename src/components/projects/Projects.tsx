"use client";

import React, { useState } from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

const projectListData = [
  {
    type: "팀 프로젝트",
  },
  {
    type: "개인 프로젝트",
  },
];

const TeamProjectData = [
  {
    title : "지도 중심 스팟 공유 서비스",
    badges : ["디자인", "FE", "BE"],
    images : "/imgs/projects/spotlight/spotlight-overview.png",
    description : "영화, 드라마, 아이돌, 애니메이션 등 미디어 콘텐츠들의 명소를 공유하는 웹 서비스입니다"
  },
  {
    title : "실시간 공유 타이머 서비스",
    badges : ["기획", "디자인", "FE", "BE"],
    images : "/imgs/projects/pogakco/pogakco-overview.png",
    description : "사용자가 맞춤 설정한 타이머를 공유하여 동일한 학습/업무 사이클을 제공하는 웹 서비스입니다"
  },
]

const Projects = () => {
  const [projectType, setProjectType] = useState<string | null>(
    projectListData[0].type
  );

  const onClickProjectType = (e: React.MouseEvent<HTMLElement>) => {
    setProjectType(e.currentTarget.textContent);
  };

  return (
    <>
    <ProjectDetailModal/>
    <Layout title={SECTION_TITLE.project}>
      <div className="w-full h-full flex flex-col">
        <ul className="my-10 flex gap-5 font-bold text-2xl">
          {projectListData.map((item, index) => (
            <li key={item.type}
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
          {
            TeamProjectData.map((item, index)=>(
              <li key={item.title}><ProjectCard {...item}/></li>
            ))
          }
        </div>
      </div>
    </Layout>
    </>
  );
};

export default Projects;
