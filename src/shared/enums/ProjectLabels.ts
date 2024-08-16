export enum ProjectLabel {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const labelStyles: Record<
  ProjectLabel,
  { text: string; bgColor?: string; gradient?: string; textColor?: string }
> = {
  [ProjectLabel.Wordpress]: {
    text: "Wordpress",
    bgColor: "bg-[rgba(42, 114, 222, 0.23)]", //   gradient: 'bg-gradient-to-r from-blue-100 to-blue-500',
    textColor: "text-[rgba(42, 114, 222, 1)]",
  },
  [ProjectLabel.Tailwinds]: {
    text: "Tailwinds",
    bgColor: "bg-[rgba(255, 255, 255, 1)]",
    gradient: "bg-gradient-to-r from-white to-gray-300",
    textColor: "text-[rgba(30, 140, 242, 1)]",
  },
  [ProjectLabel.ReactNativeTS]: {
    text: "React Native TS",
    bgColor: "bg-[rgba(36, 41, 56, 1)]",
    gradient: "bg-gradient-to-r from-black to-gray-700",
    textColor: "text-[rgba(0, 216, 255, 1)]",
  },
  [ProjectLabel.VueJS]: {
    text: "",
    bgColor: "bg-[rgba(46, 64, 83, 1)]",
    gradient: "",
    textColor: "text-[rgba(65, 184, 131, 1)]",
  },
  [ProjectLabel.HtmlCss]: {
    text: "",
    bgColor: "bg-[rgba(215, 218, 221, 0.61)]",
    gradient: "",
    textColor: "text-[rgba(227, 75, 36, 1)]",
  },
  [ProjectLabel.Expo]: {
    text: "",
    bgColor: "bg-[rgba(36, 41, 56, 1)]",
    gradient: "",
    textColor: "text-[rgba(255, 255, 255, 1)]",
  },
  [ProjectLabel.ReactTs]: {
    text: "React TS",
    bgColor: "bg-[rgba(36, 41, 56, 1)]",
    gradient: "",
    textColor: "text-[rgba(0, 216, 255, 1)]",
  },
  [ProjectLabel.Javascript]: {
    text: "",
    bgColor: "bg-[rgba(239, 218, 77, 1)]",
    gradient: "",
    textColor: "text-[rgba(49, 47, 48, 1)]",
  },
  [ProjectLabel.Firebase]: {
    text: "",
    bgColor: "bg-[rgba(239, 218, 77, 1)]",
    gradient: "",
    textColor: "text-[rgba(49, 47, 48, 1)]",
  },
  [ProjectLabel.Flutter]: {
    text: "",
    bgColor: "bg-[rgba(0, 86, 158, 0.76)]",
    gradient: "",
    textColor: "text-[rgba(17, 20, 28, 1)]",
  },
  [ProjectLabel.Elementor]: {
    text: "",
    bgColor: "bg-[rgba(224, 57, 101, 0.73)]",
    gradient: "",
    textColor: "text-[rgba(255, 255, 255, 1)]",
  },
  [ProjectLabel.Figma]: {
    text: "",
    bgColor: "bg-[rgba(243, 243, 243, 1)]",
    gradient: "",
    textColor: "text-[rgba(242, 78, 30, 1)]",
  },
  [ProjectLabel.WooCommerce]: {
    text: "",
    bgColor: "bg-[rgba(170, 114, 168, 1)]",
    gradient: "",
    textColor: "text-[rgba(255, 255, 255, 1)]",
  },
  [ProjectLabel.Vitest]: {
    text: "",
    bgColor: "bg-[rgba(60, 80, 18, 1)]",
    gradient: "",
    textColor: "text-[rgba(250, 197, 41, 1)]",
  },
};
