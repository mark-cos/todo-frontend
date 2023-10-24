import 'server-only';
import { Locale } from '.';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () =>
    import('@/dictionaries/en/translations.json').then((module) => module.default),
  ko: () =>
    import('@/dictionaries/ko/translations.json').then((module) => module.default),
};

const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
export default getDictionary;
