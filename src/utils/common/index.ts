import { i18nLangOptions } from '@/libs/i18n';

export const throttle = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
  let isExecute = false;

  return (...args: Parameters<T>) => {
    if (!isExecute) {
      isExecute = true;
      setTimeout(() => {
        fn(...args);
        isExecute = false;
      }, ms);
    }
  };
};

export const getLastPathname = (pathname: string) => {
  const regex = /\/([^\/]+)\/?$/;
  const match = pathname.match(regex);
  return match ? match[1] : '';
};

export const getClientLngAddPath = (_pathname: string) => {
  const runsOnServerSide = typeof window === 'undefined';
  let lng = i18nLangOptions.defaultLocale as string;
  if (!runsOnServerSide) {
    lng =
      (location.pathname.match(/([^\/]+)/g) || [])[0] || i18nLangOptions.defaultLocale;
  }

  return `/${lng}/${_pathname}`;
};
