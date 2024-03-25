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
    detection: {
      lookupCookie: 'lng',
    },
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
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(lng);
    if (activeLng !== i18n.resolvedLanguage) {
      i18n.changeLanguage(lng);
    }
  }
  return ret;
}
