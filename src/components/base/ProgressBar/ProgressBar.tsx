import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  texts?: String[];
  duration?:number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ texts = [],duration=10 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [texts]);

  return (
    <div>
      <div className=" bg-whiteLight w-full rounded-full h-4  mt-4">
        <motion.div
          className="bg-primaryNormal h-full rounded-full "
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{
            delay: 2,
            duration: duration,
            type: "just",
            ease: "easeInOut",
          }}
        />
      </div>
      {texts.length > 0 && (
        <p className="mt-2 texts-center text-[14px] font-normal">
          {texts[currentIndex]}
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
