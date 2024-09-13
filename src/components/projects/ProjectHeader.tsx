import { Project } from "next/dist/build/swc";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SiVelog } from "react-icons/si";

const modalIconData = [
  {
    icons: <FaGithub />,
    text: "GitHub",
  },
  {
    icons: <FaLink />,
    text: "배포 사이트",
  },
  {
    icons: <SiVelog />,
    text: "블로그",
  },
];

interface ProjectHeaderProps {
  onCloseModal : () => void
}

const ProjectHeader = ({onCloseModal} : ProjectHeaderProps) => {
  return (
    <div className="max-w-[1050px] flex my-8 m-auto justify-between">
      <ul className="flex gap-6">
        {modalIconData.map((item) => (
          <li key={item.text} className="flex flex-col justify-center items-center gap-[10px] cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
              <span className="text-3xl">{item.icons}</span>
            </div>
            <h3 className="text-white font-medium text-sm">{item.text}</h3>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center gap-[10px] cursor-pointer" onClick={onCloseModal}>
            <div className="w-16 h-16 rounded-full bg-secondary flex justify-center items-center">
              <span className="text-3xl text-pureWhite"><MdClose/></span>
            </div>
            <h3 className="text-white font-medium text-sm">닫기</h3>
      </div>
    </div>
  );
};

export default ProjectHeader;
