import React from "react";
import aboutMeImg from "../../assets/images/aboutMeImg.png";
import TitleAndSubtitle from "../../components/base/TitleAndSubtitle/TitleAndSubtitle";
import { useTranslation } from "react-i18next";
import SwitchLangBtn from "../../components/base/buttons/SwitchLangBtn";

const AboutMe = () => {
  const [t, i18n] = useTranslation("message");

  return (
    <div className=" flex flex-col items-center bg-whiteNormal px-24 py-32 gap-y-16">
      <TitleAndSubtitle
        title={"ABOUT ME"}
        subtitle={"Get to know more about me and my values"}
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col  items-start ">
          <h1 className="font-Raleway text-blackNormal text-xl font-extrabold uppercase">
            {t("about.salut")}
          </h1>
          <SwitchLangBtn />
          <h1 className="font-Raleway text-blackNormal text-xl font-extrabold uppercase">
            Meet the Mind Behind Fuente !
          </h1>
          <p className="font-Raleway text-whiteDarker text-lg font-bold leading-[30px] w-3/4">
            I'm Konno Meli Arnaud,widely recognized as Fuente, a seasoned
            frontend developer from Cameroon. Proficient in Figma, Adobe
            Products, and Affinity Design, I blend technical skills with design
            acumen to create captivating user interfaces. Along with strong
            leadership and professional ethics, I prioritize time management and
            deadline adherence in all my projects. This commitment ensures not
            only quality but also reliability. If you value punctuality and
            dedication, we'll work exceptionally well together. Connect with me
            on LinkedIn.
          </p>
        </div>
        <img src={aboutMeImg} alt="About Me" />
      </div>
    </div>
  );
};

export default AboutMe;
