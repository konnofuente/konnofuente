import konnoImg from "../../assets/images/konnoImg.jpg";
import ButtonWithIcon from "../../components/base/buttons/ButtonWithIcon";
import iconRight from "../../assets/icons/icons_right-solid.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation("message");
  return (
    <div className=" flex flex-wrap items-center justify-between bg-secondaryNormal px-24 py-32">
      <div className="flex flex-col items-start gap-5">
        <div className="inline-flex flex-col items-start">
          <h1 className="font-Raleway text-primaryNormal text-5xl font-extrabold leading-[70px] uppercase ">
            {t("hero.post")}
          </h1>
          <h1 className="font-Raleway text-whiteNormal text-5xl font-extrabold leading-[70px] uppercase ">
            {t("hero.skill")}
          </h1>
        </div>
        <p className="font-Raleway text-whiteNormal text-lg font-bold leading-[30px] w-96">
          {t("hero.description")}
        </p>
        <div className=" flex flex-wrap justify-between gap-5 items-start">
          <ButtonWithIcon textButton={t("button.contactMe")} iconRight={iconRight} />
          <ButtonWithIcon textButton={t("header.project")} iconRight={iconRight} />
        </div>
      </div>
      <img
        src={konnoImg}
        alt="Hero"
        className=" rounded-full border-solid sm:border-[102px] border-primaryNormal"
      />
    </div>
  );
};

export default Hero;
