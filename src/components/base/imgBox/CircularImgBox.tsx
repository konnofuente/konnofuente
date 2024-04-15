import React, { ReactNode } from "react";

interface CircularImgBoxProps {
  children: ReactNode;
}

const CircularImgBox: React.FC<CircularImgBoxProps> = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  );
};

export default CircularImgBox;
