import React from "react";

interface ButtonWithIconProps {
  textButton: string;
  iconRight: string;
}
const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  textButton,
  iconRight,
}) => {
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
