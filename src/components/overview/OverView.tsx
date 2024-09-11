'use client';

import React, { useEffect } from "react";
import Layout from "../common/Layout";
import { SECTION_TITLE } from "@/constants/constants";
import HighlightText from "../common/HighlightText";

const OverView = () => {
  return (
    <Layout title={SECTION_TITLE.overview}>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="w-full">
          <h1 className="text-[96px] text-grey font-bold leading-6">
            FRONT-END
          </h1>
          <h2 className="text-[64px] text-pureWhite">
            프론트엔드 개발자 <HighlightText>이창우</HighlightText>
          </h2>
          <hr className="flex-grow border-solid border-2 border-pureWhite my-10" />
          <h3 className="text-2xl text-pureWhite">
            커피 한 잔과의 <HighlightText>사색을 즐기며</HighlightText>,<br />
            하나의 문제를 <HighlightText>다양한 시각에서 접근</HighlightText>
            하는 개발자입니다
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default OverView;
