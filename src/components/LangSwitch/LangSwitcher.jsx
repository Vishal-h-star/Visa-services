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
        <option value="fr">French</option> 
        <option value="de">German</option> 
        <option value="it">Italian</option> 
        <option value="ja">Japanese</option> 
        <option value="ru">Russian</option> 
        <option value="es">Spanish</option> 
        <option value="su">Swedish</option> 
      </select>
    </div>
  );
};

export default LangSwitcher;
