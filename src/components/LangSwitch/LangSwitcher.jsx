import React from "react";
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const LangChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="select-wrapper">
      <select
        className="custom-select"
        value={i18n.language}
        onChange={(e) => LangChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
