import { useTranslation } from "react-i18next";
import assets from "../../assets/assets";


const Hero = () => {
  const [t] = useTranslation("message");

  return (
    <div className=" bg-green-300 sm:h-[55vh] lg:h-[70vh] md:px-[80px] lg:px-[130px]">

      <div   className=" h-full grid grid-cols-4 w-full   justify-between items-center">

      <div className="col-span-1">
        <SideTitle
          title={"designer"}
          description={
            "Experience in designing product using figma to optimise the UI/Ux"
          }
        />
      </div>

      <div className="col-span-2 h-full flex justify-center items-center">
        <div className="relative h-full w-full max-w-full max-h-full overflow-hidden">
        <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover md:h-[90%]  lg:h-full w-auto max-w-full max-h-full"
            src={assets.Images.heroImage}
            alt="Hero"
          />
        </div>
      </div>

      <div className="col-span-1">
        <SideTitle
          title={"developer"}
          description={
            "Frontend and mobile developer with perfect knowledge of clean code, MVC, MVVM, and micro-architecture"
          }
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;


// export default Hero;

interface Props {
  title: string;
  description: string;
  opacity?: number;
}

const SideTitle: React.FC<Props> = ({ title, description, opacity = 60 }) => {
  return (
    <div className="h-full grid items-center gap-5">
      <div className="flex-col justify-between items-start inline-flex">
        <div className="text-primaryNormal md:text-[42px] lg:text-[55px] font-bold font-['Helvetica'] leading-[70px]">
          {title}
        </div>
        <div className="text-blackNormal hidden lg:block md:text-[18px] text-xl font-normal font-['Helvetica']">
          {description}
        </div>
      </div>
    </div>
  );
};
