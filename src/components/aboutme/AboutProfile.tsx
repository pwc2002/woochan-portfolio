import React from "react";
import HighlightText from "../common/HighlightText";
import { FaUser } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const profileData = [
    {
        icon : <FaUser />,
        data : "2000.01.19"
    },
    {
        icon : <MdCall />,
        data : "010-8539-2067"
    },
    {
        icon : <MdEmail />,
        data : "changchangwoo119@gmail.com"
    }
]

const AboutProfile = () => {
  return (
    <div className="w-full max-w-[750px] h-64 flex gap-24">
      <img className="w-[33%] bg-pureWhite border-solid rounded-lg border-white"></img>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-medium text-pureWhite">
            정말 반갑습니다!
          </h1>
          <h1 className="text-3xl font-medium text-pureWhite">
            <HighlightText>프론트엔드 개발자 이창우</HighlightText>입니다
          </h1>
        </div>
        <ul className="font-semibold text-pureWhite text-base">
          <li className="flex gap-3">
            <FaUser />
            2000.01.19
          </li>
          <li className="flex gap-3">
            <MdCall />
            010-8539-2067
          </li>
          <li className="flex gap-3">
            <MdEmail />
            changchangwoo119@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProfile;
