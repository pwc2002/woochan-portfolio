"use client";

import React from "react";
import HighlightText from "../common/HighlightText";
import LengthUp from "../animation/LengthUp";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FlipUp from "../animation/FlipUp";
import { SlideUpComponent } from "../animation/SlideUp";

const OverView = () => {
  const OverViewIcons = [
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/pwc2002",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/%EC%9A%B0%EC%B0%AC-%EB%B0%95-842756349/",
    },
  ];
  return (
    <section className="w-screen h-screen flex bg">
      <div
        className="w-full flex justify-center items-center flex-col relative
        lg:max-w-[1045px] lg:py-20 lg:px-0
        md:max-w-[760px] md:py-20 md:px-0
        max-w-full py-10
        h-auto m-auto
        px-5"
        style={{ minHeight: "calc(100vh - 140px)" }}
      >
        <div className="w-full flex items-center absolute top-0 md:px-0 px-5">
          <div className="flex gap-2">
            {OverViewIcons.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="text-3xl rounded-full text-pureWhite cursor-pointer hover:scale-110 duration-300 hover:text-grey"
              >
                <SlideUpComponent delay={index * 0.2}>
                  {item.icon}
                </SlideUpComponent>
              </a>
            ))}
          </div>
          <div className="flex-grow mx-5 justify-start">
            <LengthUp />
          </div>
          <SlideUpComponent delay={0.6}>
            <h1 className="text-pureWhite font-bold lg:text-lg md:text-base text-sm">
              2025-07-16
            </h1>
          </SlideUpComponent>
        </div>
        <div className="w-full flex flex-col ">
          <FlipUp
            initialY="100%"
            delay={0.5}
            className="lg:text-[96px] md:text-[64px] text-[52px] text-grey font-bold"
            height="lg:h-[106px] md:h-[70px] h-[60px]"
          >
            FRONT-END
          </FlipUp>

          <FlipUp
            initialY="100%"
            delay={0.8}
            className="lg:text-[64px] md:text-[52px] text-[30px] text-pureWhite"
            height="lg:h-[76px] md:h-[63px] h-[46px]"
          >
            프론트엔드 개발자 <HighlightText>박우찬</HighlightText>
          </FlipUp>

          <div className="my-10">
            <LengthUp delay={1.2} />
          </div>
          <h3 className="lg:text-2xl md:text-xl text-xl text-pureWhite">
            <SlideUpComponent delay={1.4}>
              인하대학교 컴퓨터공학과 재학중이며, <HighlightText>프론트엔드 개발을 꾸준히 해왔습니다</HighlightText>,<br />
            </SlideUpComponent>
            <SlideUpComponent delay={1.6}>
              <HighlightText>풀스택 개발자를 향해 공부하고 있는</HighlightText>
              개발자입니다
            </SlideUpComponent>
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
