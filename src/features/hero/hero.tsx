import konnoImg from "../../assets/images/konnoImg.jpg";
import ButtonWithIcon from "../../components/base/buttons/ButtonWithIcon";
import iconRight from "../../assets/icons/icons_right-solid.png";


const Hero = () => {
  return (
    <div className=" flex flex-wrap items-center justify-between bg-secondaryNormal px-24 py-32">
      <div className="flex flex-col items-start gap-5">
        <div className="inline-flex flex-col items-start">
          <h1 className="font-Raleway text-primaryNormal text-5xl font-extrabold leading-[70px] uppercase ">
            Frontend dev.
          </h1>
          <h1 className="font-Raleway text-whiteNormal text-5xl font-extrabold leading-[70px] uppercase ">
            ui/ux skill.
          </h1>
        </div>
        <p className="font-Raleway text-whiteNormal text-lg font-bold leading-[30px] w-96">
          I specialize in crafting scalable frontend solutions with top-notch
          user experiences. My focus on clean code and client feedback ensures
          quality in every project.
        </p>
        <div className=" flex flex-wrap justify-between gap-5 items-start">
          <ButtonWithIcon textButton="CONTACT ME" iconRight={iconRight} />
          <ButtonWithIcon textButton="PROJECT" iconRight={iconRight} />
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
