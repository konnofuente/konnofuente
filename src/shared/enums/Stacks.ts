export enum Stack {
  Wordpress = "Wordpress",
  Tailwinds = "Tailwinds",
  ReactNativeTS = "ReactNativeTS",
  VueJS = "VueJS",
  HtmlCss = "HtmlCss",
  Expo = "Expo",
  ReactTs = "ReactTs",
  Javascript = "Javascript",
  Firebase = "Firebase",
  Flutter = "Flutter",
  Elementor = "Elementor",
  Figma = "Figma",
  WooCommerce = "WooCommerce",
  Vitest = "Vitest",
}

export const labelStyles: Record<
  Stack,
  { text: string; bgColor?: string; gradient?: string; textColor?: string }
> = {
  [Stack.Wordpress]: {
    text: "Wordpress",
    bgColor: "bg-[#2A72DE3A]", // Converted RGBA to Hex
    textColor: "text-[#2A72DE]",
  },
  [Stack.Tailwinds]: {
    text: "Tailwinds",
    bgColor: "bg-[#FFFFFF]",
    gradient: "bg-gradient-to-r from-white to-gray-300",
    textColor: "text-[#1E8CF2]",
  },
  [Stack.ReactNativeTS]: {
    text: "React Native TS",
    bgColor: "bg-[#242938]",
    gradient: "bg-gradient-to-r from-black to-gray-700",
    textColor: "text-[#00D8FF]",
  },
  [Stack.VueJS]: {
    text: "VueJS",
    bgColor: "bg-[#2E4053]",
    textColor: "text-[#41B883]",
  },
  [Stack.HtmlCss]: {
    text: "Html/CSS",
    bgColor: "bg-[#D7DADD9C]",
    textColor: "text-[#2A72DE]",
  },
  [Stack.Expo]: {
    text: "Expo",
    bgColor: "bg-[#242938]",
    textColor: "text-[#FFFFFF]",
  },
  [Stack.ReactTs]: {
    text: "React TS",
    bgColor: "bg-[#242938]",
    textColor: "text-[#00D8FF]",
  },
  [Stack.Javascript]: {
    text: "Javascript",
    bgColor: "bg-[#EFDA4D]",
    textColor: "text-[#312F30]",
  },
  [Stack.Firebase]: {
    text: "Firebase",
    bgColor: "bg-[#EFDA4D]",
    textColor: "text-[#312F30]",
  },
  [Stack.Flutter]: {
    text: "Flutter",
    bgColor: "bg-[#00569E]",
    textColor: "text-[#FFFFFF]",
  },
  [Stack.Elementor]: {
    text: "Elementor",
    bgColor: "bg-[#E03965BA]",
    textColor: "text-[#FFFFFF]",
  },
  [Stack.Figma]: {
    text: "Figma",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#F24E1E]",
  },
  [Stack.WooCommerce]: {
    text: "WooCommerce",
    bgColor: "bg-[#AA72A8]",
    textColor: "text-[#FFFFFF]",
  },
  [Stack.Vitest]: {
    text: "Vitest",
    bgColor: "bg-[#3C5012]",
    textColor: "text-[#FAC529]",
  },
};
