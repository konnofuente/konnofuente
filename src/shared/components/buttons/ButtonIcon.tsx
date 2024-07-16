import React from "react";
import { ButtonState } from "../../utils/constants/enum";
import { ButtonProps } from "../../models/ButtonProps";

export const ButtonIcon: React.FC<ButtonProps> = ({
  topText,
  bottomText,
  icon,
  state = ButtonState.NORMAL,
  isFilled = true,
  hoverEffect = "",
  link = null,
  rounded = true,
  onClick,
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

  const content = (
    <>
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
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={buttonClasses} onClick={onClick}>
      {content}
    </div>
  );
};

export default ButtonIcon;
