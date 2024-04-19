import { useTranslation } from "react-i18next";
import aboutMeImg from "../../assets/images/aboutMeImg.png";
import TitleAndSubtitle from "../../components/base/TitleAndSubtitle/TitleAndSubtitle";

const AboutMe = () => {
  const [t, i18n] = useTranslation("message");

  return (
    <div className=" flex flex-col sm:justify-between items-center bg-whiteNormal md:px-24 md:py-32 py-16 px-2 gap-y-16 w-full">
      <TitleAndSubtitle
        title={t("aboutMe.aboutMeTitle")}
        subtitle={t("aboutMe.aboutMeSubtitle")}
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col  items-start ">
          <h1 className="font-Raleway text-blackNormal text-xl font-extrabold uppercase">
            {t("aboutMe.meetTheMind")}
          </h1>
          <p className="font-Raleway sm:text-left text-center text-whiteDarker text-lg font-bold leading-[30px] w-3/4">
            {t("aboutMe.description")}
          </p>
        </div>
        <img src={aboutMeImg} alt="About Me" />
      </div>
    </div>
  );
};

export default AboutMe;
