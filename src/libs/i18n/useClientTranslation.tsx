'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { usePathname } from 'next/navigation';
import { i18nLangOptions } from '.';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, ns: string) => import(`@/dictionaries/${language}/${ns}.json`),
    ),
  )
  .init({
    // debug: true,
    lng: undefined, // let detect the language on client side
    preload: runsOnServerSide ? i18nLangOptions.locales : [],
    fallbackLng: i18nLangOptions.locales[0],
  });

export function useClientTranslation(ns: string) {
  const pathname = usePathname();
  const lang = (pathname.match(/([^\/]+)/g) || [])[0];
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  if (runsOnServerSide && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      /*  console.log(222, activeLng, i18n.resolvedLanguage);
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage); */
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.log(333, lang, i18n.resolvedLanguage);
      // if (!lang || !i18n.resolvedLanguage || i18n.resolvedLanguage === lang) return;
      console.log('change');
      i18n.changeLanguage(lang);
    }, [lang, i18n]);
  }
  return ret;
}
