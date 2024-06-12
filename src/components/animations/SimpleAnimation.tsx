import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import assert from "assert";
import assets from "../../assets/assets";

const SimpleAnimation: React.FC = () => {
  const [isClicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const onClicked = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="mt-[100px] grid gap-2 items-center justify-center h-screen bg-gray-100">
      {isVisible && (

        <AnimatePresence>

        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:2}}
        className="flex justify-center items-center" onClick={onClicked}>
          <motion.div
            //    initial={false}
            // animate={{ y: -200, x:-200, scale:1.5} }
            animate={
              isClicked ? { y: -200, x: -200, scale: 1.5 } : { y: 0, x: 0 }
            }
            transition={{ ease: "backInOut", duration: 2 }}
            style={{ backgroundColor: isClicked ? "red" : "blue" }}
            className="w-32 h-32 bg-blue-500"
          />
          <motion.p
            animate={isClicked ? { scale: 2 } : {}}
            transition={{ ease: "backInOut", duration: 2 }}
          >
            CLICK HOVITICH
          </motion.p>
          <motion.div
            animate={
              isClicked ? { y: -200, x: 200, scale: 1.5 } : { x: 0, y: 0 }
            }
            transition={{ ease: "backInOut", duration: 2 }}
            className="w-32 h-32 bg-blue-500"
          />
        </motion.div>
        </AnimatePresence>
      )}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white"
      >
        Toggle Visibility
      </button>

        <motion.img
        animate={{  rotate:[360,0],}}
        transition={{ease:'easeInOut',duration:1,repeat:Infinity}}

        src={assets.Logos.darkLogo}
        alt=""
        >
            </motion.img>
      <div className="flex items-center justify-center  bg-gray-100">

    <motion.div
       className="w-32 h-32 bg-blue-500 text-center "
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >

    {/* <p>Loading</p> */}
    </motion.div>
    </div>

      
    </div>
  );
};

export default SimpleAnimation;
