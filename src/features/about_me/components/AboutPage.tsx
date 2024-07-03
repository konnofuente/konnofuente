import React from "react";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Title from "../../../shared/components/Title";
import { TitleSize } from "../../../shared/utils/constants/enum/TitleSize";
import ImageTextSection from "../../../shared/components/section/ImageTextSection";
import assets from "../../../assets/assets";

type AboutSection = {
  title: string;
  description: string;
  image: string;
  imageLeft: boolean;
};

const dailySections: AboutSection[] = [
  {
    title: "Day Scheduling",
    description:
      "I start my day at 3 AM by scheduling and planning. I check my emails, ensure all tasks are updated in Google Calendar, and organize my day and team activities using Trello. I set up my workspace with GitHub, VS Code, and Figma. With a coffee by my side, I’m ready to start the day.",
    image: assets.Images.scheduleChart,
    imageLeft: false,
  },
  {
    title: "Coding",
    description:
      "Following my Trello plan, I open VS Code and dive into coding with my Rize app open for productivity. I work on web applications using ReactJS or VueTS, or I’m immersed in a mobile application project, which I particularly enjoy with Flutter and React Native.",
    image: assets.Images.myStackPc,
    imageLeft: true,
  },
  {
    title: "Seeking Knowledge",
    description:
      "After several hours of work, I take a break to seek new knowledge. I open LinkedIn to share tips or engage with courses and books on software architecture, clean coding, or other topics to enhance my skills. Alternatively, I relax with YouTube videos on sports or other interesting topics.",
    image: assets.Images.seekingKnowledge,
    imageLeft: false,
  }
];

const finalizeSections: AboutSection[] = [
  {
    title: "Passion for Entrepreneurship",
    description:
      "I have a deep interest in the entrepreneurial lifestyle. I am passionate about creating and growing innovative solutions. I enjoy brainstorming new ideas, working on business strategies, and networking with other entrepreneurs. This entrepreneurial spirit drives me to continuously improve and stay ahead in the tech industry.",
    image: assets.Images.entrepreneurPassion,
    imageLeft: false,
  },
  {
    title: "Weekends and Leisure",
    description:
      "On weekends, I love to travel and explore new places. My most fancy hobby is baking and cooking, and I enjoy making vlogs about it to share my culinary adventures. I spend quality time with friends, whether it's visiting new spots, watching sports matches together, or just hanging out. These activities help me relax and recharge for the upcoming week.",
    image: assets.Images.weekendLeisure,
    imageLeft: false,
  }
];

function AboutPage() {
  return (
    <div className="gradient-background min-h-screen overflow-hidden">
      <Hero />
      <ImageSlider />
      <Title size={TitleSize.Large} title="Let Me Take You Through My Day" />

      {dailySections.map((section, index) => (
        <ImageTextSection
          key={index}
          title={section.title}
          description={section.description}
          image={section.image}
          imageLeft={section.imageLeft}
          onClick={null}
        />
      ))}

      <Title
        size={TitleSize.Medium}
        title="Finalizing My Day"
        description="Towards the end of the day, I complete my tasks, ensure all necessary work is finished, and close out the day. I spend quality time with my family and then enjoy a good night sleep to recharge for the next day."
      />

      {finalizeSections.map((section, index) => (
        <ImageTextSection
          key={`final-${index}`}
          title={section.title}
          description={section.description}
          image={section.image}
          imageLeft={section.imageLeft}
          onClick={null}
        />
      ))}
    </div>
  );
}

export default AboutPage;
