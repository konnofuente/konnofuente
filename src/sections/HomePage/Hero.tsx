import { useTranslation } from "react-i18next";
import assets from "../../assets/assets";
import { motion } from "framer-motion";
import animationConfig from "../../config/animationConfig";
import ProjectCard from "../../components/common/ProjectCard/ProjectCard";
import SideTitle from "../../components/base/SideTitle/SideTitle";
import { TabButton } from "../../components/base/buttons";

const { delays, durations, easing } = animationConfig;

const Hero = () => {
  const [t] = useTranslation("message");

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: delays.d2,
          duration: durations.long,
          ease: easing.easeInOut,
        }}
        className=" bg-green-300 h-[35vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] px-[30px]  sm:px-[50px] md:px-[70px] lg:px-[100px]"
      >
        <div className=" h-full grid grid-cols-4 w-full   justify-between items-center">
          <div className="col-span-1">
            <SideTitle
              title={"designer"}
              animateLeft={true}
              description={
                "Experience in designing product using figma to optimise the UI/UX and prototype customer product expectation, "
              }
            />
          </div>

          <div className="col-span-2 h-full flex justify-center items-center">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: delays.d2,
                duration: durations.long,
                ease: easing.easeInOut,
              }}
              className="relative h-full w-full max-w-full max-h-full overflow-hidden"
            >
              <motion.img
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover md:h-[90%]  lg:h-full w-auto max-w-full max-h-full"
                src={assets.Images.heroImage}
                alt="Hero"
              />
            </motion.div>
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
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: delays.d3,
          duration: durations.long,
          ease: easing.easeInOut,
        }}
        className="mb-[100px] py-[36px] flex flex-wrap justify-between space-y-5 sm:space-y-0 sm:px-[50px] md:px-[70px] lg:px-[100px]"
      >
        <div className="w-full h-9 flex justify-center items-center gap-7">
          <div className="hidden sm:block w-full h-0 border border-stone-300" />

          <div className="w-full text-zinc-600 text-xl font-normal font-['Helvetica'] leading-[30px] text-center">
            This are my most recent realisation
          </div>
          <div className="hidden sm:block w-full h-0 border border-stone-300" />
        </div>

        <div className="w-[1299px] h-[46px] px-10 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
          <TabButton isActive={true}>Most Recent</TabButton>
          <TabButton isActive={false}>Most Recent</TabButton>
          <TabButton isActive={false}>Most Recent</TabButton>
          </div>
        </div>

        <div className="grid justify-center items-center grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <ProjectCard
            projectName="Amazing Project"
            clientName="Awesome Client"
          />
          <ProjectCard
            projectName="Amazing Project"
            clientName="Awesome Client"
          />
          <ProjectCard
            projectName="Amazing Project"
            clientName="Awesome Client"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

// export default Hero;
