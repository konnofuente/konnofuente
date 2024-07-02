import React from 'react';
import { motion } from 'framer-motion';
import animationConfig from '../../../config/animationConfig';
import assets from '../../../assets/assets';
import SideTitle from './SideTitle';

const HeroSection: React.FC = () => {
  const { delays, durations } = animationConfig;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: delays.d2,
        duration: durations.long,
        ease: animationConfig.easing.easeInOut,
      }}
      className="bg-green-300 h-[35vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] px-[30px] sm:px-[50px] md:px-[70px] lg:px-[100px]"
    >
      <div className="h-full grid grid-cols-4 w-full justify-between items-center">
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
              ease: animationConfig.easing.easeInOut,
            }}
            className="relative h-full w-full max-w-full max-h-full overflow-hidden"
          >
            <motion.img
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover md:h-[90%] lg:h-full w-auto max-w-full max-h-full"
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
  );
};

export default HeroSection;
