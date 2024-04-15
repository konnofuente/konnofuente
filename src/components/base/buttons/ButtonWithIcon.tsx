import React from "react";
import iconRight from "../../../assets/icons/icons_right-solid.png";

interface ButtonWithIconProps {
  textButton: string;
}
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ textButton }) => {
  return (
    <div className="flex justify-center items-center w-[220px] h-[64px] gap-[10px] sm:rounded-lg bg-primaryNormal">
      <p className="text-WhiteNormal text-[20px] text-center font-Raleway font-bold text-whiteNormal">
        {textButton}
      </p>
      <img src={iconRight} alt="Icon right"></img>
    </div>
  );
};

export default ButtonWithIcon;
