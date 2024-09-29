"use client";

import { IdetailData } from "@/models/DetailData.model";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import PopUp from "../animation/PopUp";
import Image from "next/image";

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
  onClickImage: (id: number) => void;
}

const ProjectDetailDescription = ({
  detailData,
  onClickImage,
}: ProjectDetailDescriptionProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!detailData) return null;

  return (
    <PopUp>
        <div
          className="w-full h-[320px] md:h-[420px] md:rounded-tl-lg md:rounded-tr-lg absolute z-0
        "
          style={{ backgroundColor: detailData.primaryColor }}
        />
        <div className="relative z-10 p-10">
          <h1
            className="font-extrabold text-pureWhite
        md:text-5xl
        text-3xl
        "
          >
            {detailData.title}
          </h1>
          <h2
            className="font-extrabold text-pureWhite
        md:text-2xl md:my-3
        text-lg my-1"
          >
            {detailData.subTitle}
          </h2>
          <h3
            className="text-white font-bold
        md:text-base
        text-sm
        "
          >
            {detailData.workTime}
          </h3>
          <h3
            className="text-white 
        md:text-base
        text-sm
        font-bold"
          >
            {detailData.organize}
          </h3>
          <div className="py-5">
            <Slider {...settings}>
              {detailData.imgs.map((url, index) => (
                <div
                  key={url}
                  className="w-auto md:h-[300px]
                h-[250px]
                px-2"
                >
                  <Image
                    src={url}
                    alt={`Image ${index + 1}`}
                    onClick={() => onClickImage(index)}
                    className="object-cover w-full h-full rounded-lg border border-solid border-lightgrey cursor-pointer hover:scale-105 duration-300 hover:brightness-75"
                    width={500}
                    height={300}
                  />
                </div>
              ))}
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
    </PopUp>
  );
};

export default ProjectDetailDescription;
