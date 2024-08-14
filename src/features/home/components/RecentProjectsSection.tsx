import React from 'react';
import { motion } from 'framer-motion';
import animationConfig from '../../../config/animationConfig';
import TabNavigator from './TabNavigator';

const RecentProjectsSection: React.FC = () => {
  const { delays, durations } = animationConfig;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: delays.d3,
        duration: durations.long,
        ease: animationConfig.easing.easeInOut,
      }}
      className="mb-[100px] py-[36px] flex flex-wrap justify-between space-y-5 sm:space-y-0 md:space-y-[30px] sm:px-[50px] md:px-[70px] lg:px-[100px]"
    >
      <div className="w-full h-9 flex justify-center items-center gap-7">
        <div className="hidden md:block w-full h-0 border border-stone-300" />
        <div className="flex-shrink-0 whitespace-nowrap text-whiteDarker text-[14px] sm:text-[16px] lg:text-xl font-normal font-['Helvetica'] leading-[30px] text-center">
          These are my most recent realizations
        </div>
        <div className="hidden md:block w-full h-0 border border-stone-300" />
      </div>
      <div className="container mx-auto p-4">
        <TabNavigator />
      </div>
    </motion.div>
  );
};

export default RecentProjectsSection;
