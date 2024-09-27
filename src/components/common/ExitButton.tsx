import React from "react";
import { MdClose } from "react-icons/md";

interface ExitButtonProps {
  onClick: () => void;
  type: "mobile" | "desktop";
}

const ExitButton = ({ onClick, type }: ExitButtonProps) => {
  if (type === "desktop") {
    return (
      <div
        className="flex flex-col justify-center items-center gap-[10px] cursor-pointer"
        onClick={onClick}
      >
        <div className="w-16 h-16 rounded-full bg-secondary flex justify-center items-center cursor-pointer duration-300 hover:scale-105 hover:opacity-70">
          <span className="text-3xl text-pureWhite">
            <MdClose />
          </span>
        </div>
        <h3 className="text-white font-medium text-sm">닫기</h3>
      </div>
    );
  } else if (type === "mobile") {
    return (
      <div
        className="w-10 h-10 rounded-full bg-secondary flex justify-center items-center fixed right-2 top-2 z-20"
        onClick={onClick}
      >
        <span className="text-xl text-pureWhite">
          <MdClose />
        </span>
      </div>
    );
  }
};

export default ExitButton;
