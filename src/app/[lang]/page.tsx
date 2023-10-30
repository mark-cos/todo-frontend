import LocaleSwitcher from '@/components/molecules/buttonTest/LocaleSwitcher';

import { InputTest } from '@/components/organisms';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';
import Link from 'next/link';

export type RootPageProps = {
  params: { lang: Locale };
};

export default async function RootPage({ params }: RootPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return (
    <>
      <LocaleSwitcher />
      <h1>{JSON.stringify(params)}</h1>
      <br /> <br /> <br />
      {t['button']}
      <InputTest dictionary={{ button1: t['btn-name'], button2: t['button'] }} />
      server
      <br /> <br /> <br />
      <h2>Link</h2>
      <Link href={'/intro'}> - /intro</Link>
      <br />
      <Link href={'/tasks'}> - /tasks</Link>
    </>
  );
}
