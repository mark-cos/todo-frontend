'use client';

import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { i18nLangOptions } from '.';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

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
    fallbackLng: i18nLangOptions.defaultLocale,
  });

export function useClientTranslation(ns: string) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const lng =
    session?.user.language ||
    (pathname.match(/([^\/]+)/g) || [])[0] ||
    i18nLangOptions.defaultLocale;
  const ret = useTranslationOrg(ns);

  console.log('🚀 _ useClientTranslation _ lng:', lng);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(lng);
    if (activeLng !== i18n.resolvedLanguage) {
      console.log('change lng');
      i18n.changeLanguage(lng);
    }
    console.log(
      '🚀 _ useClientTranslation _ i18n.resolvedLanguage:',
      i18n.resolvedLanguage,
    );

    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(activeLng);
    }, [i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    /*  useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      // setActiveLng(activeLng);

      console.log('🚀 _ useEffect _ (i18n.resolvedLanguage:', 11111111);
    }, [activeLng, i18n.resolvedLanguage]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
      console.log('🚀 _ useEffect _ (i18n.resolvedLanguage:', 2222222);
    }, [lng, i18n]); */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    /* useEffect(() => {
      console.log('🚀 _ useEffect _ (i18n.resolvedLanguage:', 3333);
    }, [lng]); */
  }
  return ret;
}
