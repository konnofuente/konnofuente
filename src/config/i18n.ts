import i18next from "i18next";
import { enMessage, frMessage } from "../lang";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      message: enMessage,
    },
    fr: {
      message: frMessage,
    },
  },
});

export default i18next;
