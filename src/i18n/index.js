import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import frCommon from "./locales/fr/common.json";
import deCommon from "./locales/de/common.json";
import itCommon from "./locales/it/common.json";
import jaCommon from "./locales/ja/common.json";
import ruCommon from "./locales/ru/common.json";
import esCommon from "./locales/es/common.json";
import suCommon from "./locales/su/common.json";


// importing document languages
import enDoc from "./locales/en/document.json"
import fnDoc from "./locales/fr/document.json"
import deDoc from "./locales/de/document.json"
import itDoc from './locales/it/document.json'
import jaDoc from './locales/ja/document.json'
import ruDoc from './locales/ru/document.json'
import esDoc from './locales/es/document.json'
import suDoc from './locales/su/document.json'

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
        docsContent : enDoc
      },
      fr: {
        common: frCommon,
        docsContent : fnDoc
      },
      de: {
        common: deCommon,
         docsContent : deDoc
      },
      it: {
        common: itCommon,
         docsContent : itDoc
      },
      ja: {
        common: jaCommon,
         docsContent : jaDoc
      },
      ru: {
        common: ruCommon,
        docsContent : ruDoc
      },
      es: {
        common: esCommon,
         docsContent : esDoc
      },
      su: {
        common: suCommon,
        docsContent : suDoc
      },
    },
    ns: ["common", "docsContent"],
    defaultNs: "common",
  });

export default i18n;

// 1 fallbackLang - > is used to  set the language when selected lang is not available
// 2 interpolation -> Interpolation in i18next is the process of inserting dynamic values into translated   strings  using placeholders like {{value}}.
// eg ->   { "welcome " : "hello {{name}} , welcome back"}
// then -> t("welcome" , {name:"vishal"})      {{name}} is the interpolation placeholder.
// name = "<b>Vishal</b>"   then  ** If escaping is ON ? Hello &lt;b&gt;Vishal&lt;/b&gt;  : Hello <b>Vishal</b>  escapeValuse false because react already escape values like this
