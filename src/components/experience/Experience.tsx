import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";

const experienceData = [
  {
    title: (
      <>
        프로그래머스 데브코스 <br />웹 풀스택 2기 과정 수료
      </>
    ),
    date: "( 2024.03 - 2024.09 )",
    description: [
      "React.js, Node.js를 활용한 자바스크립트 기반 웹 풀 사이클 학습",
      "개인 프로젝트 4회 팀 프로젝트 2회 등 다수의 프로젝트 진행",
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
  },
];

const Experience = () => {
  return (
    <Layout title={SECTION_TITLE.experience}>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 mt-10 font-extrabold flex items-center text-primary text-xl">
          학력 및 교육
        </div>
        <ul className="w-full h-[70%] flex flex-col justify-center ">
          {experienceData.map((experience, index) => (
            <li
              key={index}
              className="flex-1 flex border-b border-white border-solid border-opacity-20"
            >
              <div className="flex-1 flex flex-col justify-center items-center font-extrabold text-white text-xl">
                <h1 className="text-center">{experience.title}</h1>
                <p className="mt-5 text-xl text-grey">{experience.date}</p>
              </div>
              <ul className="flex-1 flex justify-center font-medium text-white flex-col text-lg">
                {experience.description.map((desc, descIndex) => (
                  <li key={descIndex} className="list-disc">
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Experience;
