import React from 'react';
import ImageTextSection from '../../../shared/components/section/ImageTextSection';
import assets from '../../../assets/assets';

interface SectionDailyProps {
  children?: React.ReactNode;
}

const SectionDaily: React.FC<SectionDailyProps> = ({ children }) => {
    const handleClick = () => {
        console.log('Section clicked!');
      };

  return (
    <section>
       <ImageTextSection
        title="Day Scheduling"
        description="I start my day at 3 AM by scheduling and planning. I check my emails, ensure all tasks are updated in Google Calendar, and organize my day and team activities using Trello. I set up my workspace with GitHub, VS Code, and Figma. With a coffee by my side, I’m ready to start the day."
        image={assets.Images.atRadioEvent}
        imageLeft={true}
        onClick={handleClick}
      />
    </section>
  );
};

export default SectionDaily;
