import React from 'react';

interface TabButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick?:()=>void;
}

export const TabButton: React.FC<TabButtonProps> = ({ isActive, children ,onClick}) => {
  return (
    <div
    onClick={onClick}
      className={`pointer-cursor px-[10px] py-[12px] lg:px-5 lg:py-[15px] rounded-[10px] flex-shrink-0 ${
        isActive ? 'bg-primaryNormal' : 'bg-primaryLight'
      }`}
    >
      <div
        className={`pointer-cursor sm:text-[14px] lg:text-[16px] font-normal font-['Poppins'] leading-none ${
          isActive ? 'text-whiteNormal' : 'text-primaryNormal'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TabButton;
