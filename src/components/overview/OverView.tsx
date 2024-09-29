"use client";

import React from "react";
import HighlightText from "../common/HighlightText";
import LengthUp from "../animation/LengthUp";

const OverView = () => {
  return (
    <section
      className="w-screen
      h-screen
      bg
      "
    >
      <div
        className="w-full flex justify-center items-center flex-col relative
            lg:max-w-[1045px] lg:py-20
    md:max-w-[760px] md:py-20
    max-w-full py-10 px-5
    h-auto m-auto
        "
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        <div className="w-full">
        <div className="w-full flex items-center justify-between">
        <div className="flex-grow mr-5">
        <LengthUp />
        </div>
        <h1 className="text-pureWhite font-bold
    lg:text-lg
    md:text-base
    text-sm
        "
        >
          2024-09-30
        </h1>
      </div>

          <h1
            className="
          lg:text-[96px]
          md:text-[64px]
          text-[52px]

          text-grey font-bold leading-6"
          >
            FRONT-END
          </h1>
          <h2
            className="
          lg:text-[64px]
          md:text-[52px]
          text-[32px]
          text-pureWhite"
          >
            프론트엔드 개발자 <HighlightText>이창우</HighlightText>
          </h2>
          <hr className="flex-grow border-solid border-2 border-pureWhite my-10" />
          <h3
            className="
          lg:text-2xl
          md:text-xlP
          text-xl text-pureWhite"
          >
            커피 한 잔과의 <HighlightText>사색을 즐기며</HighlightText>,<br />
            하나의 문제를 <HighlightText>다양한 시각에서 접근</HighlightText>
            하는 개발자입니다
          </h3>
        </div>
        <div className="w-full flex justify-center items-center absolute bottom-0">
          <dotlottie-player
            src="https://lottie.host/e300cb38-7d84-4ffc-a5f5-3e79d62df193/qMcWoF9z0E.json"
            background="transparent"
            speed="1"
            style={{ width: "50px", height: "50px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </section>
  );
};

export default OverView;
