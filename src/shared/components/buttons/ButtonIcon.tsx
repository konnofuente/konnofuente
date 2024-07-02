import React from "react";
import { ButtonState } from "../../utils/constants/enum";

interface ButtonIconProps {
  topText?: string;
  bottomText?: string;
  icon?: string;
  state?: ButtonState;
  isFilled?: boolean;
  hoverEffect?: string;
  rounded?: boolean;
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  topText,
  bottomText,
  icon,
  state = ButtonState.NORMAL,
  isFilled = true,
  hoverEffect = "",
  rounded = true,
  onClick
}) => {
  const baseClasses =
    "grid justify-center items-center cursor-pointer";
  const roundedClass = rounded ? "sm:rounded-full" : "rounded-none";
  const stateClasses = {
    [ButtonState.NORMAL]: isFilled
      ? "bg-WhiteNormal text-whiteNormal"
      : "border border-whiteNormal text-WhiteNormal",
    [ButtonState.HOVER]: hoverEffect,
    [ButtonState.DISABLED]: isFilled
      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
      : "border-2 border-gray-400 text-whiteNormal cursor-not-allowed",
  };

  const buttonClasses = `${baseClasses} ${roundedClass} ${stateClasses[state]} ${
    state === ButtonState.NORMAL && hoverEffect ? `hover:${hoverEffect}` : ""
  }`;

  return (
    <div className={buttonClasses} onClick={onClick}>
      {topText && (
        <p className="text-base lg:text-xl text-center text-whiteNormal font-Poppins font-medium">
          {topText}
        </p>
      )}
      {icon && <img src={icon} alt="Icon right" />}
      {bottomText && (
        <p className="text-base lg:text-xl text-center text-whiteNormal font-Poppins font-medium">
          {bottomText}
        </p>
      )}
    </div>
  );
};

export default ButtonIcon;
