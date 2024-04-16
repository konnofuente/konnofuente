import { useState } from "react";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle/TitleAndSubtitle";

import { useIntl } from "react-intl";
import Hero from "../features/hero/hero";

function LandingPage() {
  const { formatMessage } = useIntl();

  const [activeLanguage, setActiveLanguage] = useState("fr");
  // const messages = activeLanguage === "en" ? enMessages : frMessages;

  return (
    <div>
      <Hero />
      <TitleAndSubtitle
        title={"ABOUT US"}
        subtitle={"Get to know more about me and my values"}
      />
      <span>{formatMessage({ id: "bonjour" })}</span>

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
