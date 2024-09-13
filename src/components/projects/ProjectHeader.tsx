import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
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

const ProjectHeader = () => {
  return (
    <div className="max-w-[1050px] flex my-8 m-auto">
      <ul className="flex gap-6">
        {modalIconData.map((item) => (
          <li className="flex flex-col justify-center items-center gap-[10px] cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
              <span className="text-3xl">{item.icons}</span>
            </div>
            <h3 className="text-white font-medium text-sm">{item.text}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectHeader;
