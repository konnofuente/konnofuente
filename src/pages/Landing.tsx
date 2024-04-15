import React, { useState } from "react";
import enMessages from "../lang/enMessages";
import frMessages from "../lang/frMessages";
import Header from "../components/layout/Header/Header";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle/TitleAndSubtitle";

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
      </div>

  );
}

export default LandingPage;
