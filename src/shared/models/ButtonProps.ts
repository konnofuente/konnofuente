import { ButtonState } from "../utils/constants/enum";

export interface ButtonProps {
    textButton?: string;
    topText?: string;
    bottomText?: string;
    customCss?: string;
    link?: string;
    icon?: string;
    iconLeft?: string;
    iconRight?: string;
    state?: ButtonState;
    isFilled?: boolean;
    hoverEffect?: string;
    rounded?: boolean;
    onClick?: () => void;
  }