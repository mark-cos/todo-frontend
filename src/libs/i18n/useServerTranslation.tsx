import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { headers } from 'next/headers';
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
      fallbackLng: i18nLangOptions.locales[0],
      lng,
      ns,
    });
  return i18nInstance;
};

async function useServerTranslation(ns: string) {
  const pathname = headers().get('x-pathname') ?? '';
  const lng = (pathname.match(/([^\/]+)/g) || [])[0] ?? 'en';
  console.log('lng', lng, pathname, '///' + headers().get('x-pathname'));
  const i18nextInstance = await initI18next(lng as Locale, ns);

  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}

export default useServerTranslation;
