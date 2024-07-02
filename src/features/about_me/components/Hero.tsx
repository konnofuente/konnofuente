import React, { useEffect, useState } from "react";
import { ButtonIcon } from "../../../shared/components/buttons";
import { useAboutFeature } from "../hooks/useAboutFeature";
import assets from "../../../assets/assets";

const Hero: React.FC = () => {
  const { socialIcon } = useAboutFeature();

  return (
    <div className="p-4">
      <div className="w-full h-auto sm:min-h-[60vh] px-4 sm:px-8 lg:px-[150px] flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-start mb-8 lg:mb-0">
          <div className="text-primaryNormal text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-['Helvetica'] font-bold leading-tight lg:leading-[70px]">
            Hi I’m Konno <br />
            But call me Fuente
          </div>
          <div className="max-w-full lg:max-w-[491px] text-whiteDarker font-['Poppins'] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] mt-4">
            Frontend and mobile developer skilled in clean code and UI/UX design, passionate about creating efficient and high-quality applications.
          </div>
          <div className="mt-5 flex justify-start items-center gap-5">
            {socialIcon.map((icon, index) => (
              <ButtonIcon key={index} icon={icon.src} />
            ))}
          </div>
        </div>

        <div className=" pt-4 flex justify-center items-center min-w-[40%]">
          <div className="min-w-[400px] min-h-[300px] bg-white rounded-3xl flex flex-col justify-between items-center shadow-lg transform transition-transform duration-300 origin-top-left rotate-0 hover:rotate-1.80deg">
            <img
              className="w-full max-w-xs lg:max-w-none"
              src={assets.Images.sittinAtOffice}
              alt=""
            />
            <div className="text-black text-[20px] font-normal font-['Poppins'] leading-[30px] mt-4">
              time to focus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
