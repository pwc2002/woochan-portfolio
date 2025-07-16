import React from "react";
import HighlightText from "../common/HighlightText";
import { FaUser } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { SlideUpScroll } from "../animation/SlideUp";
import Image from "next/image";

const AboutProfile = () => {
  return (
    <div
      className="w-full max-w-[750px]  flex
      lg:flex-row lg:gap-28 lg:min-h-64
      md:flex-row md:gap-28 md:min-h-64
      flex-col gap-5 h-auto mt-10">
      <SlideUpScroll>
      <Image
            src={"/imgs/woochan-picture.jpg"}
            alt={"Woochan's picture"}
            className={`lg:w-[250px] lg:h-auto md:w-[250px] md:h-auto w-[200px] h-[250px] bg-pureWhite border-solid rounded-lg border-white`}
            width={250}
            height={250} 
        />
      </SlideUpScroll>
      <div className="flex flex-col justify-between">
        <div>
          <SlideUpScroll>
          <h1
            className="font-medium text-pureWhite
        lg:text-3xl
        md:text-2xl
        text-2xl
          "
          >
            안녕하세요!
          </h1>
          </SlideUpScroll>
          <SlideUpScroll>
          <h1
            className="font-medium text-pureWhite
        lg:text-3xl
        md:text-3xl
        text-2xl
          
          "
          >
            <HighlightText>프론트엔드 개발자 박우찬</HighlightText>입니다
          </h1>
          </SlideUpScroll>
        </div>
        <ul
          className="font-semibold text-pureWhite
        lg:my-0 lg:text-base
        md:my-0 md:text-base
        my-5 text-sm
        "
        >
          <SlideUpScroll>
          <li className="flex gap-3 items-center">
            <FaUser />
            2002.11.21
          </li>
          <li className="flex gap-3 items-center">
            <MdCall />
            010-2087-1816
          </li>
          <li className="flex gap-3 items-center">
            <MdEmail />
            pwc2002@inha.edu
          </li>
          </SlideUpScroll>
        </ul>
      </div>
    </div>
  );
};

export default AboutProfile;
