import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import { SlideUpScroll } from "../animation/SlideUp";

const experienceData = [
  {
    title: (
      <>
        헤엄 개발팀 · 팀원
      </>
    ),
    date: "( 2024.09 - 2024.11 )",
    description: [
      "헤엄 웹앱 사이트 제작",
      "백엔드 DB 구축 및 API 개발",
      "반응형 웹 구축",
    ],
  },
  {
    title: (
      <>
        강쌤과외 개발팀 · 인턴/수습
      </>
    ),
    date: "( 2024.07 - 2024.09 )",
    description: [
      "강쌤과외 고객 과외 연락 업무 자동화 프로그램 제작",
      "개인정보 관리 및 이메일 자동 발송 프로그램 제작",
    ],
  },
  {
    title: (
      <>
        지티윈스 · 인턴/수습
      </>
    ),
    date: "( 2023.10 - 2024.03 )",
    description: [
      "주식 종목 검색 시스템의 대시보드 구현",
      "실시간 데이터 기반 웹 차트 구현",
      "Tailwind CSS로 웹 CSS 구현",
      "Next.js API Route를 이용한 API 개발",
    ],
  }
];

const awardData = [
  {
    title: (
      <>
        2025 Microsoft NetZero 해커톤 우수상
      </>
    ),
    date: "인하대학교 SW중심대학사업단",
  },
  {
    title: (
      <>
        2024 GDGoC INHA Project Marathon 최우수상
      </>
    ),
    date: "인하대학교 SW중심대학사업단",
  },
  {
    title: (
      <>
        2024 AWS NetZero 해커톤 장려상
      </>
    ),
    date: "인하대학교 SW중심대학사업단",
  },
  {
    title: (
      <>
        인하대학교 컴퓨터공학과 해커톤 장려상
      </>
    ),
    date: "인하대학교 컴퓨터공학과",
  },
  {
    title: (
      <>
        아이로드 글로벌 해커톤 대상
      </>
    ),
    date: "인천상공회의소 회장",
  }
];

const educationData = [
  {
    title: (
      <>
        인하대학교 <br />
        컴퓨터공학과 재학중
      </>
    ),
    date: "( 2021.03 - 현재 )",
    description: [
      "2002년생 24살",
      "학부생 3학년이며, GDGoC INHA 회장을 역임하며, 다양한 커뮤니티 활동을 진행하고 있음",
      "여러 경험을 바탕으로, 다양한 프로젝트를 진행함",
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
        <div className="w-full justify-between h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          <p>경력</p>
          <p>1년</p>
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
              
              <div className="flex-1 flex flex-col justify-center
              lg:items-start lg:text-left
              md:items-start md:text-left
              items-start text-left
              ">
                <ul className="text-white
                lg:text-base
                md:text-sm
                text-sm
                ">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-2">• {desc}</li>
                  ))}
                </ul>
              </div>
            </li>
            </SlideUpScroll>
          ))}
        </ul>

        <SlideUpScroll>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          수상 내역
        </div>
        </SlideUpScroll>
        <ul className="w-full flex flex-col justify-center
        ">
          {awardData.map((award, index) => (
            <SlideUpScroll key={index} delay={index*0.1}>
            <li
              key={index}
              className="flex border-b border-white border-solid border-opacity-20
              lg:flex-row 
              md:flex-row md:h-[100px] md:my-1
              flex-col my-4 h-[150px]
              
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
                ">{award.title}</h1>
                <p className="
                lg:mt-5 lg:text-xl
                md:mt-5 md:text-xl
                mt-2 text-base text-grey">{award.date}</p>
              </div>
            </li>
            </SlideUpScroll>
          ))}
        </ul>

        <SlideUpScroll>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          학력
        </div>
        </SlideUpScroll>
        <ul className="w-full flex flex-col justify-center
        ">
          {educationData.map((education, index) => (
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
                ">{education.title}</h1>
                <p className="
                lg:mt-5 lg:text-xl
                md:mt-5 md:text-xl
                mt-2 text-base text-grey">{education.date}</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center
              lg:items-start lg:text-left
              md:items-start md:text-left
              items-start text-left
              ">
                <ul className="text-white
                lg:text-base
                md:text-sm
                text-sm
                ">
                  {education.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-2">• {desc}</li>
                  ))}
                </ul>
              </div>
            </li>
            </SlideUpScroll>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Experience;
