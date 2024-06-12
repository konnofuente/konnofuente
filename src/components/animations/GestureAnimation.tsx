import React from 'react';
import { motion } from 'framer-motion';

const GestureAnimation: React.FC = () => {
  return (
    <div className="grid  items-center justify-center h-screen bg-gray-100">

    <motion.button
    className='bg-blue-500 rounded p-3'
    initial={{}}
    whileHover={{
        scale:2,
        backgroundColor:'red',
        rotate:[0,180,180,]
    }}
    whileTap={{
        scale:1,
        backgroundColor:'blue',
        rotate:[180,0,0,]
    }}
    >
    hover me 
    </motion.button>

      {/* <motion.button
        whileHover={{
          scale: 1.2,
          y:200,
          backgroundColor: '#3b82f6',
          //   rotate: 15,
          transition: { duration: 0.3 },
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Hover Me
      </motion.button> */}

      {/* <motion.button
        whileTap={{
            scale: 0.9,
            x:200,
          backgroundColor: '#1e3a8a',
          transition: { duration: 0.3 },
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Tap Me
      </motion.button>

      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileDrag={{
          backgroundColor: '#3b82f6',
          rotate: 360,
          transition: { duration: 1, ease: 'linear' },
        }}
        className="w-32 h-32 bg-blue-500 rounded"
      />

<motion.input
        initial={{ borderColor: 'gray', scale: 1 }}
        whileFocus={{
          borderColor: 'blue',
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
        className="px-2 py-1 border rounded"
        placeholder="Focus on me"
      /> */}
    </div>
  );
};

export default GestureAnimation;
