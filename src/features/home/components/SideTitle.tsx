import { motion } from "framer-motion";
import animationConfig from "../../../config/animationConfig";

const { delays, durations, easing } = animationConfig;

interface Props {
    title: string;
    description: string;
    animateLeft?: boolean;
  }
  
  const SideTitle: React.FC<Props> = ({ title, description, animateLeft }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: animateLeft ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: delays.d3,
          duration: durations.medium,
          ease: easing.easeInOut,
        }}
        className="h-full grid items-center gap-5"
      >
        <div className="flex-col justify-between items-start inline-flex">
          <div className="text-primaryNormal text-[22px] sm:text-[20px] md:text-[45px] lg:text-[55px] font-bold font-['Helvetica'] leading-[70px]">
            {title}
          </div>
          <div className="text-blackNormal hidden md:block sm:text-[12px] md:text-[14px]  lg:text-[16px] text-xl font-normal font-['Helvetica']">
            {description}
          </div>
        </div>
      </motion.div>
    );
  };

  export default SideTitle;