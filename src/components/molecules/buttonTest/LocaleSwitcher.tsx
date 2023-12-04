'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18nLangOptions } from '@/libs/i18n';
import Button from '@/components/atoms/button/Button';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <p>Locale switcher:</p>

      <div className="flex">
        {i18nLangOptions.locales.map((locale) => {
          return (
            <div className="flex-none" key={locale}>
              <Button variant="outlined" className="">
                <Link href={redirectedPathName(locale)}>{locale}</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
