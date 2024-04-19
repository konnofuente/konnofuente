import konnoImg from "../../assets/images/konnoImg.jpg";
import ButtonWithIcon from "../../components/base/buttons/ButtonWithIcon";
import iconRight from "../../assets/icons/icons_right-solid.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation("message");
  return (
    <div className=" sm:flex items-center sm:justify-between bg-secondaryNormal md:px-24 md:py-32 py-16 px-2  gap-10">
      <div className="flex flex-col sm:items-start justify-center items-center gap-5">
        <div className="sm:inline-flex flex-col sm:items-start flex justify-center items-center gap-5">
          <h1 className="font-Raleway text-primaryNormal md:text-5xl text-4xl font-extrabold leading-[70px] uppercase ">
            {t("hero.post")}
          </h1>
          <h1 className="font-Raleway text-whiteNormal md:text-5xl text-4xl font-extrabold leading-[70px] uppercase ">
            {t("hero.skill")}
          </h1>
        </div>
        <p className="font-Raleway sm:text-left text-center text-whiteNormal text-xs font-semibold leading-[30px] w-96">
          {t("hero.description")}
        </p>
        <div className=" flex flex-wrap sm:justify-between gap-5 items-start w-full">
          <ButtonWithIcon textButton={t("button.contactMe")} iconRight={iconRight} />
          <ButtonWithIcon textButton={t("header.project")} iconRight={iconRight} />
        </div>
      </div>
      <img
        src={konnoImg}
        alt="Hero"
        className=" rounded-full border-solid sm:border-[102px] border-primaryNormal border-[50px]"
      />
    </div>
  );
};

export default Hero;
