import React from 'react';
import assets from "../../../assets/assets";
import ProgressBar from '../../base/ProgressBar/ProgressBar';
import { updateTexts } from '../../../constants/data/data';
import { useTranslation } from 'react-i18next';
import { Button } from '../../base';

const icons = [
    { src: assets.Icons.trelloIcon, alt: "trelloIcon" },
    { src: assets.Icons.reactIcon, alt: "reactIcon" },
    { src: assets.Icons.vuejsIcon, alt: "vuejsIcon" },
    { src: assets.Icons.flutterIcon, alt: "flutterIcon" },
    { src: assets.Icons.firebaseIcon, alt: "firebaseIcon" },
  ];

const MaintenanceLoader: React.FC = () => {

const [t] = useTranslation("message")

  return (
    <div className="relative w-full flex items-center justify-center bg-green-200">
      <div className="absolute  flex-col items-center">
        <p className="text-center text-black text-xl font-normal   font-['Poppins'] ">
          {t('data.updatingPlatform')} <span role="img" aria-label="emoji">😎..</span>

        </p>
         <div className='w-full mb-10' >

          <ProgressBar texts={updateTexts} duration={20} />
         </div>
        
         <div className=" md:hidden flex justify-center w-full ">
          <Button
            textButton={t('data.contactMe')}
            isFilled={true}
            customCss='py-3 w-3/4 rounded-full text-center z-10'
            link="https://linktr.ee/konnofuente"
          />
        </div>
      </div>
      <div className="relative w-[700px] h-[700px]">
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 360;
          const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
          return (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="absolute  w-10 h-10 md:w-12 md:h-12 transform"
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

export default MaintenanceLoader;
