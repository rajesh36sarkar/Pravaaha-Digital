import en from './translations/en.json';
import hi from './translations/hi.json';
import bn from './translations/bn.json';

const dictionaries = { en, hi, bn };

export const getTranslation = (locale) => {
  return dictionaries[locale] || dictionaries.en;
};

export const PLAN_NAMES = {
  en: { pro: 'PRO', max: 'MAX', ultra: 'ULTRA' },
  hi: { pro: 'CHAL', max: 'DHAMAKA', ultra: 'AFLAATOON' },
  bn: { pro: 'CHOL', max: 'FATAFATI', ultra: 'DURDANTO' },
};