import { useTranslation } from "react-i18next";
import aboutMeImg from "../../assets/images/aboutMeImg.png";
import TitleAndSubtitle from "../../components/base/TitleAndSubtitle/TitleAndSubtitle";

const AboutMe = () => {
  const [t, i18n] = useTranslation("message");

  return (
    <div className=" flex flex-col  sm:justify-between items-center bg-whiteNormal md:px-10 lg:px-32 md:py-16 py-16 px-2 gap-10 w-full">
      <TitleAndSubtitle
        title={t("aboutMe.aboutMeTitle")}
        subtitle={t("aboutMe.aboutMeSubtitle")}
      />
      <div className="grid justify-between items-center w-full gap-10 lg:flex lg:flex-row lg:items-center">
        <div className="flex flex-col  items-start gap-5 md:gap-10 ">
          <h1 className="font-Raleway text-blackNormal text-xl lg:text-3xl font-extrabold uppercase">
            {t("aboutMe.meetTheMind")}
          </h1>
          <p className="font-Raleway  text-left text-whiteDarker lg:text-xl lg:w-[500px] text-xs md:text-lg font-semibold leading-6 ">
            {t("aboutMe.description")}
          </p>
        </div>
        <div className="flex items-center justify-center">

        <img src={aboutMeImg} alt="About Me" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
