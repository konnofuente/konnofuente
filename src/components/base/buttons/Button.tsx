import React from "react";
import { ButtonState } from "../../../constants/enum";



interface ButtonProps {
  textButton?: string;
  iconLeft?: string;
  iconRight?: string;
  state?: ButtonState;
  isFilled?: boolean;
  hoverEffect?: string;
  rounded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  textButton,
  iconLeft,
  iconRight,
  state = ButtonState.NORMAL,
  isFilled = true,
  hoverEffect = "",
  rounded = true,
}) => {
  const baseClasses =
    "flex justify-center items-center  gap-2 py-[20px] px-[40px] cursor-pointer";
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
      {iconLeft && <img src={iconLeft} alt="Icon left" />}
    { textButton && <p className="text-base lg:text-xl text-center text-whiteNormal  font-Poppins font-medium">{textButton}</p>}
      {iconRight && <img src={iconRight} alt="Icon right" />}
    </div>
  );
};

export default Button;
