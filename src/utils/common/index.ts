import { i18nLangOptions } from '@/libs/i18n';

export const throttle = <T extends (...args: any[]) => any>(fn: T, ms: number) => {
  let isExcute = false;

  return (...args: Parameters<T>) => {
    if (!isExcute) {
      isExcute = true;
      setTimeout(() => {
        fn(...args);
        isExcute = false;
      }, ms);
    }
  };
};

export const getLastPathname = (pathname: string) => {
  const regex = /\/([^\/]+)\/?$/;
  const match = pathname.match(regex);
  return match ? match[1] : '';
};

export const getClientLngAddPath = (pathname: string) => {
  let lng = (pathname.match(/([^\/]+)/g) || [])[0];
  lng = lng && ['ko', 'en'].includes(lng) ? lng : i18nLangOptions.defaultLocale;
  return `/${lng}${pathname}`;
};
