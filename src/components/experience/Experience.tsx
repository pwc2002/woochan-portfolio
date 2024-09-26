import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import { SlideUpScroll } from "../animation/SlideUp";

const experienceData = [
  {
    title: (
      <>
        프로그래머스 데브코스 <br />웹 풀스택 2기 과정 수료
      </>
    ),
    date: "( 2024.03 - 2024.09 )",
    description: [
      "React, Node 기반의 자바스크립트 웹 풀사이클 과정 학습",
      "개인 프로젝트 4회, 팀 프로젝트 2회 등 프로젝트 다수 진행",
    ],
  },
  {
    title: (
      <>
        동양미래대학교 <br />
        컴퓨터 소프트웨어 공학 졸업
      </>
    ),
    date: "( 2019.03 - 2024.02 )",
    description: [
      "학점 4.13/4.5",
      "주문식 교육 소프트웨어 공학 경진대회 우수상",
      "스마트 프로젝트 경연대회 (졸업작품) 우수상",
    ],
  }
];

const Experience = () => {
  return (
    <Layout title={SECTION_TITLE.experience}>
      <div className="w-full flex flex-col"
                    style={{ minHeight: "calc(100vh - 140px)" }}

      >
        <SlideUpScroll>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          학력 및 교육
        </div>
        </SlideUpScroll>
        <ul className="w-full flex flex-col justify-center
        ">
          {experienceData.map((experience, index) => (
            <SlideUpScroll key={index} delay={index*0.1}>
            <li
              key={index}
              className="flex border-b border-white border-solid border-opacity-20
              lg:flex-row 
              md:flex-row md:h-[150px] md:my-1
              flex-col my-4 h-[250px]
              
              "
            >
              <div className="flex-1 flex flex-col font-extrabold text-white
              lg:justify-center lg:items-center
              md:justify-center md:items-center
              justify-start items-start
              
              ">
                <h1 className="
                lg:text-center lg:text-xl
                md:text-center md:text-xl
                text-left text-lg text-pureWhite
                ">{experience.title}</h1>
                <p className="
                lg:mt-5 lg:text-xl
                md:mt-5 md:text-xl
                mt-2 text-base text-grey">{experience.date}</p>
              </div>
              <ul className="flex-1 flex justify-center font-medium text-white flex-col
              lg:text-lg
              md:text-lg
              text-md
              ">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="
                  lg:list-disc
                  md:list-disc
                  list-none
                  mb-1
                  ">
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
            </SlideUpScroll>
          ))}
        </ul>
        
      </div>
    </Layout>
  );
};

export default Experience;
