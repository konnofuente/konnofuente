import React from "react";

interface ButtonWithIconProps {
  textButton: string;
}
const ButtonWithoutIcon: React.FC<ButtonWithIconProps> = ({ textButton }) => {
  return (
    <div className="flex justify-center items-center w-[220px] h-[64px] gap-[10px] rounded-lg bg-primaryNormal">
      <p className="text-WhiteNormal text-[20px] text-center font-Raleway font-bold text-whiteNormal">
        CONTACT ME
      </p>
    </div>
  );
};

export default ButtonWithoutIcon;
