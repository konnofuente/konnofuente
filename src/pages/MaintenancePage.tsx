import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import CircularIcons from "../components/common/CircularIcons/CircularIcons";

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
      
      <CircularIcons></CircularIcons>

    </div>
  );
};

export default MaintenancePage;
