import React from "react";
import HighlightText from "../common/HighlightText";

const descriptionData = [
    {
        title: "책임감 있는 개발자",
        text1: (
            <>
                <HighlightText>협업을 위한 코드</HighlightText>를 구현하기 위해 끊임없이 노력합니다.
            </>
        ),
        text2: (
            <>
                하나의 문제를 <HighlightText>다양한 시각에서 접근</HighlightText>하는 것을 좋아합니다.
            </>
        ),
    }
];

const AboutDescription = () => {
    return (
        <div className="w-full flex flex-col gap-14">
            {descriptionData.map((item, index) => (
                <div key={index} className="w-full flex flex-col  items-center
                lg:gap-5
                md:gap-3
                gap-2
                ">
                    <div className="w-full max-w-[750px] rounded-lg bg-pureWhite text-primary px-3 py-2 font-extrabold flex items-center
                    lg:text-2xl
                    md:text-xl
                    text-lg                    
                    ">
                        {item.title}
                    </div>
                    <ul className="w-full max-w-[750px] text-white flex flex-col gap-1
                    lg:text-2xl
                    md:text-xl
                    text-md      
                    ">
                        <li>{item.text1}</li>
                        <li>{item.text2}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AboutDescription;
