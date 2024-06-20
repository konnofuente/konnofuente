import React from 'react';

interface TabButtonProps {
  isActive: boolean;
  children: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({ isActive, children }) => {
  return (
    <div
      className={`px-5 py-[15px] rounded-${isActive ? '[7px]' : '[8px]'} justify-center items-center gap-2.5 flex ${
        isActive ? 'bg-primaryNormal' : 'bg-primaryLight'
      }`}
    >
      <div
        className={`text-base font-normal font-['Poppins'] leading-none ${
          isActive ? 'text-whiteNormal' : 'text-primaryNormal'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TabButton;
