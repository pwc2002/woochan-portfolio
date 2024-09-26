import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import { SlideUpScroll } from "../animation/SlideUp";
import {
  libraryData,
  techStackData,
  toolStackData,
} from "@/datas/skill-list.data";
import GridExtends from "../animation/GridExtends";

interface SkillSectionProps {
  title: string;
  data: {
    id: number;
    title: string;
    description: string[] | string;
    svgURL: string;
  }[];
}
const SkillSection = ({ title, data }: SkillSectionProps) => (
  <>
    <SlideUpScroll>
      <div className="w-full h-11 rounded-lg bg-pureWhite px-3 my-10 font-extrabold flex items-center text-primary text-xl">
        {title}
      </div>
    </SlideUpScroll>

    <ul className="grid gap-5 h-auto w-full lg:grid-cols-9 md:grid-cols-5 grid-cols-3">
      {data.map((item, index) => (
        <SlideUpScroll key={item.id} delay={index * 0.1}>
          <GridExtends item={item} />
        </SlideUpScroll>
      ))}
    </ul>
  </>
);

const Skill = () => {
  return (
    <Layout title={SECTION_TITLE.skill}>
      <div
        className="w-full h-full flex flex-col"
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        <SkillSection title="언어 / 프레임워크" data={techStackData} />
        <SkillSection title="라이브러리" data={libraryData} />
        <SkillSection title="협업 / 관리 도구" data={toolStackData} />
      </div>
    </Layout>
  );
};

export default Skill;
