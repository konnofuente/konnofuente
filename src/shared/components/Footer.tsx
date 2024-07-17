import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primaryNormal py-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
      <div className="text-white/80 text-sm md:text-lg font-normal font-['Poppins'] leading-[30px] mb-2 md:mb-0">
        © 2024. Made with passion by Konno Fuente.
      </div>
      <div className="text-stone-50 text-sm md:text-lg font-normal font-['Poppins'] leading-[30px]">
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
