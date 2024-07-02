import React  from "react";
import assets from "../../../assets/assets";


const ImageSlider: React.FC = () => {

  return (
    <div className="w-full flex justify-center">

    <div className="flex justify-between items-center min-w-[80%]">
      <img src={assets.Images.xbetEvent} alt=""  />
      <img src={assets.Images.atRadioEvent} alt=""  />
      <img src={assets.Images.hackathonEvent} alt=""  />
      <img src={assets.Images.smillingOffice} alt=""  />
      <img src={assets.Images.tableSet} alt=""  />
    </div>
    </div>
  );
};

export default ImageSlider;
