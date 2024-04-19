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
    <div className="flex justify-center cursor-pointer items-center sm:h-16 w-full gap-2 sm:rounded-lg bg-primaryNormal py-5">
      <p className="text-WhiteNormal text-sm text-center font-Raleway font-bold text-whiteNormal">
        {textButton}
      </p>
      <img src={iconRight} alt="Icon right"></img>
    </div>
  );
};

export default ButtonWithIcon;
