import LocaleSwitcher from '@/components/molecules/buttonTest/LocaleSwitcher';
import { InputTest } from '@/components/organisms';
import { Locale } from '@/libs/i18n';
import getDictionary from '@/libs/i18n/getDictionary';
import Image from 'next/image';
import logoImage from '../../../../public/images/logo.svg'; //FIXME: tsconfig path로..

export type IntroPageProps = {
  params: { lang: Locale };
};

export default async function IntroPage({ params }: IntroPageProps) {
  const t = (await getDictionary(params.lang))['button'];
  return (
    <div className="container-100svh w-screen flex-col items-center justify-center">
      <div className="p-base flex-none">
        <Image alt="logo" src={logoImage} width={95} height={80} loading="lazy" />
      </div>

      <div className="flex-none text-4xl font-bold">UpTodo</div>
    </div>
  );
}
