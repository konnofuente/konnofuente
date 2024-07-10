import React, { useEffect, useState } from "react";
import { ButtonIcon } from "../../../shared/components/buttons";
import { useAboutFeature } from "../hooks/useAboutFeature";
import assets from "../../../assets/assets";

const Hero: React.FC = () => {
  const { socialIcon } = useAboutFeature();

  return (
    <div className="p-4">
      <div className="w-full h-auto sm:min-h-[40vh] lg:min-h-[50vh] px-4 sm:px-8  lg:px-[90px] flex flex-col sm:flex-row justify-between items-center">

        <div className="w-ful md:w-[50%] flex flex-col justify-between items-start mb-8 lg:mb-0">
          <div className=" text-primaryNormal lg:text-[55px] text-[35px] font-['Helvetica'] font-bold leading-tight lg:leading-[50px]">
            Hi I’m Konno <br />
            But call me Fuente
          </div>

          <div className="max-w-full  text-whiteDarker font-['Poppins'] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] mt-4">
            Frontend and mobile developer skilled in clean code and UI/UX design, passionate about creating efficient and high-quality applications.
          </div>

          <div className="mt-5 flex justify-start items-center gap-5">
            {socialIcon.map((icon, index) => (
              <ButtonIcon key={index} icon={icon.src} />
            ))}
          </div>
        </div>

        <div className="hidden pt-4 sm:flex justify-center items-center min-w-[40%]">
          <div className="  bg-white rounded-3xl flex flex-col justify-between items-center shadow-lg transform transition-transform duration-300 origin-top-left rotate-0 hover:rotate-1.80deg">
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
