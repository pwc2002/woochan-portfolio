import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SiVelog } from "react-icons/si";
import { SlideUpComponent } from "../animation/SlideUp";
import { IURLS } from "@/models/DetailData.model";

interface ProjectHeaderProps {
  onCloseModal: () => void;
  primaryColor: string | undefined;
  URLS: IURLS | undefined;
}

const ProjectHeader = ({
  onCloseModal,
  primaryColor,
  URLS,
}: ProjectHeaderProps) => {
  const modalIconData = [
    {
      icons: <FaGithub />,
      text: "GitHub",
      url: URLS?.githubURL,
    },
    {
      icons: <FaLink />,
      text: "배포 사이트",
      url: URLS?.serviceURL,
    },
    {
      icons: <SiVelog />,
      text: "블로그",
      url: URLS?.blogURL,
    },
  ];

  return (
    <>
      <div className="max-w-[1050px] md:my-8 m-auto justify-between md:flex hidden">
        <ul className="flex gap-6">
          {modalIconData.map((item, index) => (
            <SlideUpComponent key={item.text} delay={index * 0.2}>
              <li
                key={item.text}
                className="flex flex-col justify-center items-center gap-[10px] cursor-pointer duration-300 hover:scale-105 hover:opacity-70"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white flex justify-center items-center"
                >
                  <span className="text-3xl" style={{ color: primaryColor }}>
                    {item.icons}
                  </span>
                </a>
                <h3 className="text-white font-medium text-sm">{item.text}</h3>
              </li>
            </SlideUpComponent>
          ))}
        </ul>
        <div
          className="flex flex-col justify-center items-center gap-[10px] cursor-pointer"
          onClick={onCloseModal}
        >
          <div className="w-16 h-16 rounded-full bg-secondary flex justify-center items-center cursor-pointer duration-300 hover:scale-105 hover:opacity-70">
            <span className="text-3xl text-pureWhite">
              <MdClose />
            </span>
          </div>
          <h3 className="text-white font-medium text-sm">닫기</h3>
        </div>
      </div>
      {/* 데스크탑 */}
      <div
        className="w-screen h-14 left-0 bottom-0 fixed z-50 md:hidden border-solid border-lightgrey border bg-pureWhite
        flex justify-center items-center"
      >
        <ul className="flex gap-5">
          {modalIconData.map((item, index) => (
            <SlideUpComponent key={item.text} delay={index * 0.2}>
              <li
                key={item.text}
                className="flex flex-col justify-center items-center gap-[10px] cursor-pointer duration-300 hover:scale-105 hover:opacity-70"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full  flex justify-center items-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span className="text-xl text-pureWhite">{item.icons}</span>
                </a>
              </li>
            </SlideUpComponent>
          ))}
        </ul>
        <div
          className="w-10 h-10 rounded-full bg-secondary flex justify-center items-center fixed right-2 top-2"
          onClick={onCloseModal}
        >
          <span className="text-xl text-pureWhite">
            <MdClose />
          </span>
        </div>
      </div>
      {/* 모바일 */}
    </>
  );
};

export default ProjectHeader;
