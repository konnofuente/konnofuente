import React from "react";
import { TitleSize } from "../utils/constants/enum/TitleSize";

interface TitleProps {
  title: string;
  description?: string;
  size: TitleSize;
}

const Title: React.FC<TitleProps> = ({ title, description, size }) => {
  let fontSize: string;

  switch (size) {
    case TitleSize.Small:
      fontSize = "12px";
      break;
    case TitleSize.Medium:
      fontSize = "45px";
      break;
    case TitleSize.Large:
      fontSize = "70px";
      break;
    default:
      fontSize = "16px";
  }

  return (
    <div className="text-center py-[50px] grid justify-center items-center">
      <div
        style={{ fontSize }}
        className="text-primaryNormal font-bold font-['Helvetica'] leading-[70px]"
      >
        {title}
      </div>
      {description && (
        <div className="flex justify-center text-gray-600 w-full text-center mt-4 px-4 ">
          <p className="sm:w-1/2">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Title;
