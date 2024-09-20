import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";

const techStackData = [
  {
    id: 1,
    title: "HTML",
    description: [""],
    svgURL: "",
  },
  {
    id: 2,
    title: "CSS",
    description: "",
    svgURL: "",
  },
  {
    id: 3,
    title: "JavaScript",
    description: "",
    svgURL: "",
  },
  {
    id: 4,
    title: "React",
    description: "",
    svgURL: "",
  },
  {
    id: 5,
    title: "TypeScript",
    description: "",
    svgURL: "",
  },
  {
    id: 6,
    title: "Next",
    description: "",
    svgURL: "",
  },
  {},
];

const toolStackData = [
  {
    id: 1,
    title: "Git",
    description: [""],
    svgURL: "",
  },
  {
    id: 2,
    title: "Figma",
    description: [""],
    svgURL: "",
  },
  {
    id: 3,
    title: "Notion",
    description: [""],
    svgURL: "",
  },
];

const Skill = () => {
  return (
    <Layout title={SECTION_TITLE.skill}>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          언어 / 라이브러리 / 프레임워크
        </div>
        <ul className="grid gap-5 h-auto w-full
        lg:grid-cols-9
        md:grid-cols-5
        grid-cols-3
        ">
          {techStackData.map((item, index) => (
            <li
              key={item.id}
              className="w-full h-[96px] rounded-lg bg-pureWhite"
            ></li>
          ))}
        </ul>
        <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
          협업 / 관리 도구
        </div>
        <ul className="grid grid-row-2 gap-5
                lg:grid-cols-9
        md:grid-cols-5
        grid-cols-3
        ">
          {toolStackData.map((item, index) => (
            <li className="w-full h-[96px] rounded-lg bg-pureWhite"></li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Skill;
