export const i18nLangOptions = {
  defaultLocale: 'en',
  locales: ['en', 'ko'],
} as const;

export type Locale = (typeof i18nLangOptions)['locales'][number];
