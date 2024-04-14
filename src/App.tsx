import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./lang/enMessages";
import frMessages from "./lang/frMessages";
import LandingPage from "./pages/Landing";

function App() {
  const [activeLanguage, setActiveLanguage] = useState("fr");
  const messages = activeLanguage === "en" ? enMessages : frMessages;

  return (
    <IntlProvider locale={activeLanguage} messages={messages}>
   <LandingPage></LandingPage>
    </IntlProvider>
  );
}

export default App;
