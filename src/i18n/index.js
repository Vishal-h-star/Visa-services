import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import hiCommon from "./locales/hi/common.json";
import frCommon from "./locales/fr/common.json";

// below is the brake down for every line used here for future updation

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        common: enCommon,
      },
      hi: {
        common: hiCommon,
      },
      fr: {
        common: frCommon,
      },
    },
    ns: ["common", "content"],
    defaultNs: "common",
  });

export default i18n;

// 1 fallbackLang - > is used to  set the language when selected lang is not available
// 2 interpolation -> Interpolation in i18next is the process of inserting dynamic values into translated   strings  using placeholders like {{value}}.
// eg ->   { "welcome " : "hello {{name}} , welcome back"}
// then -> t("welcome" , {name:"vishal"})      {{name}} is the interpolation placeholder.
// name = "<b>Vishal</b>"   then  ** If escaping is ON ? Hello &lt;b&gt;Vishal&lt;/b&gt;  : Hello <b>Vishal</b>  escapeValuse false because react already escape values like this
