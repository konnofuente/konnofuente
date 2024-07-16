import React, { useState } from "react";
import { motion } from "framer-motion";
import assets from "../../../assets/assets";

const ImageSlider: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageSources = [
    assets.Images.xbetEvent,
    assets.Images.atRadioEvent,
    assets.Images.hackathonEvent,
    assets.Images.smillingOffice,
    assets.Images.tableSet,
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-center overflow-x-scroll overscroll-contain scrollbar-hide">
        <div className="flex justify-between items-center min-w-[80%] space-x-4 px-4 py-2">
          {imageSources.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`event-${index}`}
              className=" rounded-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <motion.img
              src={selectedImage}
              alt="Selected Event"
              className="rounded-lg h-[50vh]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 text-red-600 text-[40px] bg-white  h-auto"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
