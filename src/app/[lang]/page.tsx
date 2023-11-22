import LocaleSwitcher from '@/components/molecules/buttonTest/LocaleSwitcher';

import { InputTest } from '@/components/organisms';
import IntroTempl from '@/components/templates/intro/IntroTempl';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';
import Link from 'next/link';

export type RootPageProps = {
  params: { lang: Locale };
};

export default async function RootPage({ params }: RootPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return <IntroTempl />;
}
