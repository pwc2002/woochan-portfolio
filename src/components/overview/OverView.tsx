"use client";

import React from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import HighlightText from "../common/HighlightText";

const OverView = () => {
  return (
    <Layout title={SECTION_TITLE.overview}>
      <div
        className="w-full flex justify-center items-center flex-col relative"
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        {" "}
        <div className="w-full">
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
    </Layout>
  );
};

export default OverView;
