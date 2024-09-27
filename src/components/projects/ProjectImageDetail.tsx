"use client";

import React, { useState } from 'react';

interface ProjectImageDetailProps {
  imgs: string[] | undefined;
  title: string | undefined;
  setIsDetailImage : React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectImageDetail = ({ imgs, title, setIsDetailImage }: ProjectImageDetailProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (imgs && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (imgs && currentIndex < imgs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-opacity-80 bg-black z-50 p-5">
        <div className='relative w-full'>
        <h1 className="text-pureWhite text-center px-5 w-auto">{title}</h1>
        <button
          onClick={() => setIsDetailImage(false)}
          className="absolute top-2  right-2 w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-gray-300 px-5"
        >
          X
        </button>
        </div>
      <div className="text-center text-pureWhite">
        {currentIndex + 1}/{imgs?.length}
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center md:p-10 p-3">
        <button
          onClick={handlePrevClick}
          className="absolute left-10 bg-white p-2 rounded-full hover:bg-gray-300"
        >
          &lt;
        </button>
        {imgs && (
          <img
            src={imgs[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        )}
        <button
          onClick={handleNextClick}
          className="absolute right-10 bg-white p-2 rounded-full hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProjectImageDetail;
