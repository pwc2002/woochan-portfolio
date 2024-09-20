import React from "react";
import Image from "next/image";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";

const techStackData = [
  {
    id: 1,
    title: "HTML",
    description: [""],
    svgURL: "/imgs/skill/HTML.svg", // 경로 수정
  },
  {
    id: 2,
    title: "CSS",
    description: "",
    svgURL: "/imgs/skill/CSS.svg", // 경로 수정
  },
  {
    id: 3,
    title: "JavaScript",
    description: "",
    svgURL: "/imgs/skill/JavaScript.svg", // 경로 수정
  },
  {
    id: 4,
    title: "React",
    description: "",
    svgURL: "/imgs/skill/React.svg", // 경로 수정
  },
  {
    id: 5,
    title: "TypeScript",
    description: "",
    svgURL: "/imgs/skill/TypeScript.svg", // 경로 수정
  },
  {
    id: 6,
    title: "Next",
    description: "",
    svgURL: "/imgs/skill/NextJS-Light.svg", // 경로 수정
  },
];

const toolStackData = [
  {
    id: 1,
    title: "Git",
    description: [""],
    svgURL: "/imgs/skill/Git.svg", // 경로 수정
  },
  {
    id: 2,
    title: "Figma",
    description: [""],
    svgURL: "/imgs/skill/Figma.svg", // 경로 수정
  },  
];

const Skill = () => {
  return (
    <Layout title={SECTION_TITLE.skill}>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          언어 / 라이브러리 / 프레임워크
        </div>
        <ul className="grid gap-5 h-auto w-full lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
          {techStackData.map((item) => (
            <li key={item.id} className="w-full h-[96px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Image src={item.svgURL} alt={item.title} width={70} height={70} /> {/* SVG 이미지 표시 */}
            </li>
          ))}
        </ul>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          협업 / 관리 도구
        </div>
        <ul className="grid grid-row-2 gap-5 lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
          {toolStackData.map((item) => (
            <li key={item.id} className="w-full h-[96px] rounded-lg bg-white flex flex-col items-center justify-center">
              <Image src={item.svgURL} alt={item.title} width={48} height={48} /> {/* SVG 이미지 표시 */}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Skill;
