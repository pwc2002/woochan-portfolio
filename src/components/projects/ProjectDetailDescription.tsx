"use client";

import { IdetailData } from "@/models/DetailData.model";
import React, { ReactNode } from "react";
import Slider from "react-slick";

interface ListTitleProps {
  title: string;
  color: string;
  items: ReactNode;
}

const ListSection = ({ title, items, color }: ListTitleProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div
        className="w-full h-11 rounded-lg px-3 py-2 text-pureWhite font-bold flex items-center"
        style={{ backgroundColor: color }}
      >
        {title}
      </div>
      {items}
    </div>
  );
};

interface ProjectDetailDescriptionProps {
  detailData: IdetailData | undefined;
}

const ProjectDetailDescription = ({
  detailData,
}: ProjectDetailDescriptionProps) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
  };
  if (!detailData) return null;
  return (
    <div className="max-w-[1050px] bg-white h-auto m-auto rounded-lg relative">
      <div
        className="w-full h-[420px] rounded-tl-lg rounded-tr-lg absolute z-0"
        style={{ backgroundColor: detailData.primaryColor }}
      />{" "}
      <div className="relative z-10 p-10">
        <h1 className="font-extrabold text-pureWhite text-[50px]">
          {detailData.title}
        </h1>
        <h2 className="mt-3 mb-2 font-extrabold text-pureWhite text-2xl">
          {detailData.subTitle}
        </h2>
        <h3 className="text-white text-base font-bold">
          {detailData.workTime}
        </h3>
        <h3 className="text-white text-base font-bold">
          {detailData.organize}
        </h3>
        <div className="py-10">
        <Slider {...settings}>
            <div className="w-auto h-[300px] px-2">
              <div className="bg-yellow-300 w-full h-full rounded-lg" />
            </div>
            <div className="w-auto h-[300px] px-2">
              <div className="bg-green-300 w-full h-full rounded-lg" />
            </div>
            <div className=" w-auto h-[300px] px-2">
              <div className="bg-blue-300 w-full h-full rounded-lg" />
            </div>
          </Slider>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full font-medium h-auto p-5 bg-lightgrey flex flex-col gap-5 rounded-lg">
            {detailData.description.topPart}
            {detailData.description.bottomPart}
          </div>
          {detailData.lists.map((list, index) => (
            <ListSection
              key={index}
              title={list.title}
              items={list.items}
              color={detailData.primaryColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailDescription;
