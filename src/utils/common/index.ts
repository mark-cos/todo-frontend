import { i18nLangOptions } from '@/libs/i18n';
import { usePathname } from 'next/navigation';

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

export const getClientLngAddPath = (pathname: string) => {
  let lng = (pathname.match(/([^\/]+)/g) || [])[0];
  lng = lng && ['ko', 'en'].includes(lng) ? lng : i18nLangOptions.defaultLocale;
  console.log('🚀 _ getClientLngAddPath _ lng:', lng, location.href);

  return `/${lng}${pathname}`;
};
