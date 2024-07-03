import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
}

const Title: React.FC<TitleProps> = ({ children, size }) => {
  let fontSize: string;

  switch (size) {
    case 'small':
      fontSize = '12px';
      break;
    case 'medium':
      fontSize = '16px';
      break;
    case 'large':
      fontSize = '70px';
      break;
    default:
      fontSize = '16px';
  }

  return (
    <div style={{ fontSize }} className='text-center py-[50px]'>
    <div className="text-primaryNormal font-bold font-['Helvetica'] leading-[70px]"> Let Me Take You Through My Day</div>
    </div>
  );
};

export default Title;
