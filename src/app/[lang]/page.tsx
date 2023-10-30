import LocaleSwitcher from '@/components/molecules/buttonTest/LocaleSwitcher';
import DialogTest from '@/components/molecules/dialogTest/DialogTest';
import { InputTest } from '@/components/organisms';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';

export type RootPageProps = {
  params: { lang: Locale };
};

export default async function RootPage({ params }: RootPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return (
    <>
      <LocaleSwitcher />
      <h1>{JSON.stringify(params)}</h1>
      {t['button']}
      <InputTest dictionary={{ button1: t['btn-name'], button2: t['button'] }} />
      server
      <DialogTest />
    </>
  );
}
