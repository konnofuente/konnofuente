import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const icons = [
  { src: assets.Icons.trelloIcon, alt: 'trelloIcon' },
  { src: assets.Icons.reactIcon, alt: 'reactIcon' },
  { src: assets.Icons.vuejsIcon, alt: 'vuejsIcon' },
  { src: assets.Icons.flutterIcon, alt: 'flutterIcon' },
  { src: assets.Icons.firebaseIcon, alt: 'firebaseIcon' },
];


const MaintenancePage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-200">
      <div className="absolute">
        <p className="text-center text-lg font-semibold">
          Currently updating my portfolio <span role="img" aria-label="emoji">😎</span>
        </p>
        <motion.div
          className="w-24 h-24 border-4 border-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

    </div>
  );
};

export default MaintenancePage;
