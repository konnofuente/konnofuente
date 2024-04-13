import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./lang/enMessages";
import frMessages from "./lang/frMessages";
import Header from "./components/Header/Header";
import TitleAndSubtitle from "./components/TitleAndSubtitle/TitleAndSubtitle";

function App() {
  const [activeLanguage, setActiveLanguage] = useState("fr");

  const messages = activeLanguage === "en" ? enMessages : frMessages;

  return (
    <IntlProvider locale={activeLanguage} messages={messages}>
      <div>
        <Header />
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
    </IntlProvider>
  );
}

export default App;
