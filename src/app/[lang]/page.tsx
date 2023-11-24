import IntroTempl from '@/components/templates/intro/IntroTempl';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';

export type RootPageProps = {
  params: { lang: Locale };
};

export default async function RootPage({ params }: RootPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return <IntroTempl />;
}
