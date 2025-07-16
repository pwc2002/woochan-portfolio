import React from "react";
import HighlightText from "../common/HighlightText";
import { SlideUpScroll } from "../animation/SlideUp";

const descriptionData = [
    {
        title: "학습하는 개발자",
        text1: (
            <>
                인하대학교 컴퓨터공학과 재학중이며, <HighlightText>프론트엔드 개발을 꾸준히 해왔습니다</HighlightText>.
            </>
        ),
        text2: (
            <>
                다양한 외주 경험을 쌓으며, <HighlightText>풀스택 개발자를 향해 나아가고 있습니다</HighlightText>.
            </>
        ),
    },
    {
        title: "기술을 사랑하는 개발자",
        text1: (
            <>
                Next.js를 주로 사용하며, <HighlightText>React, Node.js, Vue.js, TypeScript, Tailwind CSS, Prisma</HighlightText> 등 다양한 기술을 다룹니다.
            </>
        ),
        text2: (
            <>
                <HighlightText>간단한 수준의 백엔드도 개발이 가능하며</HighlightText>, 새로운 기술 학습에 항상 열려있습니다.
            </>
        ),
    },
];

const AboutDescription = () => {
    return (
        <div className="w-full flex flex-col gap-14">
            {descriptionData.map((item, index) => (
                <SlideUpScroll key={index}>
                <div key={index} className="w-full flex flex-col  items-center
                lg:gap-5
                md:gap-3
                gap-2
                ">
                    <div className="w-full max-w-[750px] rounded-lg bg-pureWhite text-primary font-extrabold flex items-center
                    md:text-xl md:px-2 md:py-2
                    text-lg px-2 py-1              
                    ">
                        {item.title}
                    </div>
                    <ul className="w-full max-w-[750px] text-white flex flex-col gap-1
                    md:text-xl
                    text-md      
                    ">
                        <li>{item.text1}</li>
                        <li>{item.text2}</li>
                    </ul>
                </div>
                </SlideUpScroll>
            ))}
        </div>
    );
};

export default AboutDescription;
