import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const icons = [
  { src: assets.Icons.trelloIcon, alt: "trelloIcon" },
  { src: assets.Icons.reactIcon, alt: "reactIcon" },
  { src: assets.Icons.vuejsIcon, alt: "vuejsIcon" },
  { src: assets.Icons.flutterIcon, alt: "flutterIcon" },
  { src: assets.Icons.firebaseIcon, alt: "firebaseIcon" },
];



const MaintenancePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-200">
      <div className="absolute">
        <motion.div
          className="flex w-full space-x-5 "
      
          animate={{ y: -40 }}
          transition={{ delay: 1, type: "Tween" }}
       
        >
          {icons.map((icon, index) => (
            <motion.div key={index} 
     
            >
              <img className="" src={icon.src} alt={icon.alt} />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-center text-xl font-semibold"
          animate={{ y: 40 }}
          transition={{ delay: 1, type: "Tween" }}
        >
          Currently updating my portfolio{" "}
          <span role="img" aria-label="emoji">
            😎
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default MaintenancePage;
