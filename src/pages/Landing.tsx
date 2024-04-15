import { useState } from "react";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle/TitleAndSubtitle";
import enMessages from "../lang/enMessages";
import frMessages from "../lang/frMessages";
import CircularImgBox from "../components/base/imgBox/CircularImgBox";
import konnoImg from "../assets/images/konnoImg.jpg";

function LandingPage() {
  const [activeLanguage, setActiveLanguage] = useState("fr");
  const messages = activeLanguage === "en" ? enMessages : frMessages;

  return (
    <div>
      <TitleAndSubtitle
        title={"ABOUT US"}
        subtitle={"Get to know more about me and my values"}
      />
      <button
        onClick={() =>
          setActiveLanguage((prev) => (prev === "fr" ? "en" : "fr"))
        }
      >
        {`Change language: ${activeLanguage}`}
      </button>
      <CircularImgBox>
        <img
          src={konnoImg}
          alt="Hero image"
          className="w-340 h-340 rounded-full border-solid border-[102px] border-primaryNormal"
        />
      </CircularImgBox>
    </div>
  );
}

export default LandingPage;
