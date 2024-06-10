import React from 'react';
import './CircularIcons.css';
import assets from "../../../assets/assets";

const icons = [
    { src: assets.Icons.trelloIcon, alt: "trelloIcon" },
    { src: assets.Icons.reactIcon, alt: "reactIcon" },
    { src: assets.Icons.vuejsIcon, alt: "vuejsIcon" },
    { src: assets.Icons.flutterIcon, alt: "flutterIcon" },
    { src: assets.Icons.firebaseIcon, alt: "firebaseIcon" },
  ];

const CircularIcons: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-green-200">
      <div className="absolute flex flex-col items-center">
        <p className="text-center text-lg font-semibold mb-4">
          Currently updating my portfolio <span role="img" aria-label="emoji">😎</span>
        </p>
      </div>
      <div className="relative w-64 h-64">
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 360;
          const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
          return (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="absolute w-12 h-12 transform"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CircularIcons;