import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ["en", "de"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    lng: 'en',
    preload: languages,
    fallbackLng: 'en',
    whitelist: languages,
    keySeparator: false,
    react: {
      useSuspense: false,
    }
  });

  export default i18n;