"use client";

import React, { useState } from "react";
import ExitButton from "../common/ExitButton";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from "next/image";

interface ProjectImageDetailProps {
  imgs: string[] | undefined;
  title: string | undefined;
  onCloseImage: () => void;
  initialIndex: number;
}

const ProjectImageDetail = ({
  imgs,
  title,
  onCloseImage,
  initialIndex = 0,
}: ProjectImageDetailProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevClick = () => {
    if (imgs && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (imgs && currentIndex <= 0) {
      setCurrentIndex(imgs.length - 1);
    }
  };

  const handleNextClick = () => {
    if (imgs && currentIndex < imgs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (imgs && currentIndex >= imgs.length - 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-80 bg-black z-50 p-5">
      <div className="md:block hidden fixed z-50 top-5 right-10">
        <ExitButton onClick={onCloseImage} type="desktop" />
      </div>
      <div className="md:hidden block fixed z-50 top-5 right-10">
        <ExitButton onClick={onCloseImage} type="mobile" />
      </div>
      <h1 className="text-pureWhite text-center px-5 w-auto">{title}</h1>
      <div className="text-center text-pureWhite">
        {currentIndex + 1}/{imgs?.length}
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center md:p-10">
        <button
          onClick={handlePrevClick}
          className="absolute left-12 bg-grey rounded-full hover:bg-pureWhite duration-300 text-5xl lg:block hidden"
        >
          <FaChevronCircleLeft />
        </button>
        {imgs && (
          <Image
            src={imgs[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="object-fill
      md:max-w-full md:max-h-full
      max-w-full max-h-[75%]"
            width={1000}
            height={300}
          />
        )}
        <div className="flex my-10 gap-10 justify-between">
          <button
            onClick={handlePrevClick}
            className="bg-grey rounded-full hover:bg-pureWhite duration-300 text-3xl lg:hidden block"
          >
            <FaChevronCircleLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="bg-grey rounded-full hover:bg-pureWhite duration-300 text-3xl lg:hidden block"
          >
            <FaChevronCircleRight />
          </button>
        </div>
        <button
          onClick={handleNextClick}
          className="absolute right-12 bg-grey rounded-full hover:bg-pureWhite duration-300 text-5xl lg:block hidden"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectImageDetail;
