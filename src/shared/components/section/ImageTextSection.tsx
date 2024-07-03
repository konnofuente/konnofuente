import React from 'react';
export interface ImageTextSectionProps {
    title: string;
    description: string;
    image: string;
    onClick: () => void;
    imageLeft?: boolean;
  }
  

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ title, description, image, onClick, imageLeft = false }) => {
  return (
    <div className={`flex flex-col md:flex-row ${imageLeft ? 'md:flex-row-reverse' : ''} items-center gap-10 p-10`}>
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-primaryNormal">{title}</h2>
        <p className="mt-4 text-lg text-whiteDarker">{description}</p>
        <button 
          onClick={onClick} 
          className="mt-6 px-6 py-2 bg-primaryNormal text-white rounded-lg"
        >
          Learn More
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={image} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default ImageTextSection;
