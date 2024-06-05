import konnoImg from "../../assets/images/konnoImg.jpg";
import ButtonWithIcon from "../../components/base/buttons/Button";
import iconRight from "../../assets/icons/icons_right-solid.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation("message");
  return (
    <div className=" sm:flex items-center sm:justify-between bg-secondaryNormal md:px-5 lg:px-28 md:py-32 py-16 px-2  gap-10 md:gap-5">
      <div className="flex flex-col sm:items-start justify-center items-center gap-5 md:w-1/2 lg:w-2/5 ">
        <div className="sm:inline-flex flex-col sm:items-start flex justify-center items-center gap-5">
          <h1 className="font-Raleway text-primaryNormal md:text-5xl text-4xl font-extrabold leading-[40px] uppercase ">
            {t("hero.post")}
          </h1>
          <h1 className="font-Raleway text-whiteNormal md:text-5xl text-4xl font-extrabold leading-[40px] uppercase ">
            {t("hero.skill")}
          </h1>
        </div>
        <p className="font-Raleway sm:text-left text-center text-whiteNormal text-xs md:text-[15px] lg:text-xl font-semibold leading-[20px]  mb-10">
          {t("hero.description")}
        </p>
       <div className="flex flex-wrap md:flex-row  lg:flex-nowrap  sm:justify-between gap-5 md:gap-1 lg:gap-4 items-start w-full mb-10 md:mb-0">
        <div className="w-full md:w-[47%] lg:w-[100%] mb-2 " >
         <ButtonWithIcon textButton={t("button.contactMe")} iconRight={iconRight} />
        </div>
        <div className="w-full md:w-[47%] lg:w-[100%] mb-2 " >
         <ButtonWithIcon textButton={t("header.project")} iconRight={iconRight} />
        </div>

       </div>
       
      </div>
      <div className=" grid justify-center items-center" >

      <img
        src={konnoImg}
        alt="Hero"
        className=" rounded-full border-solid sm:border-[100px]  md:border-[70px] lg:border-[110px] border-primaryNormal border-[50px]"
      />
      </div>
    </div>
  );
};

export default Hero;
