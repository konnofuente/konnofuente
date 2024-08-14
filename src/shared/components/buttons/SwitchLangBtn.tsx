import React from "react";
import iconRight from "../../../assets/icons/icons_right-solid.png";
import { useTranslation } from "react-i18next";

const SwitchLangBtn = () => {
  const [t, i18n] = useTranslation("message");

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <div>
      <h1 className="font-Raleway text-blackNormal text-xl font-extrabold uppercase">
        {t("about.salut")}
      </h1>
      <button onClick={ handleChangeLanguage}>
        {i18n.language === "en" ? "en" : "fr"}
      </button>
      <div className="flex justify-center items-center w-[220px] h-[64px] gap-[10px] sm:rounded-lg bg-primaryNormal">
        <p className="text-WhiteNormal text-[20px] text-center font-Raleway font-bold text-whiteNormal">
          ffff
        </p>
        <img src={iconRight} alt="Icon right"></img>
      </div>
    </div>
  );
};

export default SwitchLangBtn;
