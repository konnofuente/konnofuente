import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "./lang/enMessages";
import frMessages from "./lang/frMessages";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  const [activeLanguage, setActiveLanguage] = useState("fr");
  const messages = activeLanguage === "en" ? enMessages : frMessages;

  return (
    <IntlProvider locale={activeLanguage} messages={messages}>
      <DefaultLayout></DefaultLayout>
    </IntlProvider>
  );
}

export default App;
