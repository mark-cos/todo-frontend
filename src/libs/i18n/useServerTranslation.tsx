import i18next, { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { cookies } from 'next/headers';
import { Locale, i18nLangOptions } from '.';

const initI18next = async (lng: Locale, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, ns: string) => import(`@/dictionaries/${language}/${ns}.json`),
      ),
    )
    .init({
      // debug: true,
      supportedLngs: i18nLangOptions.locales,
      fallbackLng: i18nLangOptions.defaultLocale,
      lng,
      ns,
    });
  return i18nInstance;
};

async function useServerTranslation(ns: string) {
  const lng = cookies().get('lng')?.value || i18nLangOptions.defaultLocale;
  const i18nextInstance = await initI18next(lng as Locale, ns);

  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}

export default useServerTranslation;
