import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="btn-container">
      {languages.map((item) => {
        return (
          <button
            className={item.code === i18n.language ? "selected" : ""}
            key={item.code}
            onClick={() => changeLanguage(item.code)}
          >
            {item.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
