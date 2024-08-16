import React from "react";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Title from "../../../shared/components/Title";
import { TitleSize } from "../../../shared/utils/constants/enum/TitleSize";
import ImageTextSection from "../../../shared/components/section/ImageTextSection";
import { useAboutFeature } from "../hooks/useAboutFeature";



function AboutPage() {
  const { finalizeSections, dailySections } = useAboutFeature();

  return (
    <div className="gradient-background min-h-screen overflow-hidden">
      <Hero />
      <ImageSlider />
      <div className="flex justify-center p-4">
        <div className="text-sky-950 text-[35px] sm:text-[45px] lg:text-[70px] text-center font-bold font-['Helvetica']">
          {" "}
          Let Me Take You Through My Day
        </div>
      </div>

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
