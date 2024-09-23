import React from "react";
import Image from "next/image";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import PopUp from "../animation/PopUp";
import { SlideUpScroll } from "../animation/SlideUp";

const techStackData = [
  {
    id: 1,
    title: "HTML",
    description: [""],
    svgURL: "/imgs/skill/HTML.svg",
  },
  {
    id: 2,
    title: "CSS",
    description: "",
    svgURL: "/imgs/skill/CSS.svg",
  },
  {
    id: 3,
    title: "JavaScript",
    description: "",
    svgURL: "/imgs/skill/JavaScript.svg",
  },
  {
    id: 4,
    title: "React",
    description: "",
    svgURL: "/imgs/skill/React.svg",
  },
  {
    id: 5,
    title: "TypeScript",
    description: "",
    svgURL: "/imgs/skill/TypeScript.svg",
  },
  {
    id: 6,
    title: "Next",
    description: "",
    svgURL: "/imgs/skill/NextJS-Light.svg",
  },
];

const toolStackData = [
  {
    id: 101,
    title: "Git",
    description: [""],
    svgURL: "/imgs/skill/Git.svg",
  },
  {
    id: 102,
    title: "Figma",
    description: [""],
    svgURL: "/imgs/skill/Figma.svg",
  },  
];

const Skill = () => {
  return (
    <Layout title={SECTION_TITLE.skill}>
      <div className="w-full h-full flex flex-col"
              style={{ minHeight: "calc(100vh - 140px)" }}

      >
        <SlideUpScroll>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          언어 / 라이브러리 / 프레임워크
        </div>
        </SlideUpScroll>
        <ul className="grid gap-5 h-auto w-full lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
          {techStackData.map((item, index) => (
            <SlideUpScroll key={item.id} delay={index*0.1}>
            <li key={item.id} className="w-full h-[96px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Image src={item.svgURL} alt={item.title} width={70} height={70} /> 
            </li>
            </SlideUpScroll>
          ))}
        </ul>
        <SlideUpScroll>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          협업 / 관리 도구
        </div>
        </SlideUpScroll>

        <ul className="grid grid-row-2 gap-5 lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
          {toolStackData.map((item, index) => (
                        <SlideUpScroll key={item.id} delay={index*0.1}>

            <li key={item.id} className="w-full h-[96px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Image src={item.svgURL} alt={item.title} width={48} height={48} />
            </li>
            </SlideUpScroll>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Skill;
