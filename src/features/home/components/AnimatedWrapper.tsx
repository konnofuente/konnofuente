import React from 'react';
import { motion } from 'framer-motion';
import animationConfig from '../../../config/animationConfig';


interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay: number;
  duration: number;
  className?: string;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay,
  duration,
  className,
}) => {
  const { easing } = animationConfig;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration,
        ease: easing.easeInOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
