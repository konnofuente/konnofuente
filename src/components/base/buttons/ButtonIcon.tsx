import React from "react";
import { ButtonState } from "../../../constants/enum";



interface ButtonIconProps {
  topText?: string;
  leftText?: string;
  icon?: string;
  state?: ButtonState;
  isFilled?: boolean;
  hoverEffect?: string;
  rounded?: boolean;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  topText,
  leftText,
  icon,
  state = ButtonState.NORMAL,
  isFilled = true,
  hoverEffect = "",
  rounded = true,
}) => {
  const baseClasses =
    "grid justify-center items-center   cursor-pointer";
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
    <div className={buttonClasses}>
    { topText && <p className="text-base lg:text-xl text-center text-whiteNormal  font-Poppins font-medium">{topText}</p>}
      {icon && <img src={icon} alt="Icon right" />}
    { leftText && <p className="text-base lg:text-xl text-center text-whiteNormal  font-Poppins font-medium">{topText}</p>}
    </div>
  );
};

export default ButtonIcon;
