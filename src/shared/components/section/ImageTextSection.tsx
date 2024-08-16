import React from 'react';
export interface ImageTextSectionProps {
    title: string;
    description: string;
    image: string;
    onClick?: (() => void ) | null;
    imageLeft?: boolean;
  }
  

  const ImageTextSection: React.FC<ImageTextSectionProps> = ({ title, description, image, onClick, imageLeft = false }) => {
    return (
      <div className={`flex flex-col md:flex-row ${imageLeft ? 'md:flex-row-reverse' : ''} items-center gap-10 py-[40px] px-[10px] sm:px-[40px] lg:px-[200px]`}>
        <div className="flex-1">
          <h2 className=" text-[30px] md:text-[35px] lg:text-[45px] font-bold text-primaryNormal ">{title}</h2>
          <p className="mt-4 md:text-[15px] text-lg text-whiteDarker">{description}</p>
  
          {onClick !== null ? (
            <button onClick={onClick} className="mt-6 px-6 py-2 bg-primaryNormal text-white rounded-lg">
              Learn More
            </button>
          ) : null}
        </div>
        <div className={`flex-1 flex ${imageLeft ? 'justify-start' : 'justify-end'}`}>
          <img src={image} alt={title} className="w-full max-w-md rounded-lg" loading="lazy" />
        </div>
      </div>
    );
  };
  
export default ImageTextSection;
