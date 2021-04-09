import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { assetsEnglish } from 'locales/translation/en';
import { assetsVietnamese } from 'locales/translation/vi';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: assetsEnglish,
      },
      vi: {
        translations: assetsVietnamese,
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // keySeparator: false, // we use content as keys
    keySeparator: '.',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
