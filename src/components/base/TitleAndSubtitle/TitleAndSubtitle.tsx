import React from "react";
interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}
const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="titleAndSubtitle">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-primaryNormal font-raleway text-5xl font-extrabold leading-18 uppercase">
          {title}
        </h1>
        <h2 className="text-whiteDarkActive text-center font-raleway text-base font-normal leading-9">
          {subtitle}
        </h2>
      </div>
    </div>
  );
};
export default TitleAndSubtitle;
