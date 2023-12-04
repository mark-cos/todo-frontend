import Image from 'next/image';
import React from 'react';
import intro1Img from '@/images/intro1.svg?url';
import useServerTranslation from '@/libs/i18n/useServerTranslation';
import ROUTE from '@/libs/route';
import Link from '@/components/atoms/link/Link';
import Button from '@/components/atoms/button/Button';

const Intro1 = async () => {
  const { t } = await useServerTranslation('intro');

  return (
    <div className="container-100svh flex-col items-center justify-center">
      <Image src={intro1Img} alt="mainLogo" priority />
      <div className="absolute bottom-11 w-full flex-auto px-5">
        <Link href={ROUTE.ACCOUNT.LOGIN.path}>
          <Button variant="contained" className="mb-5 w-full">
            {t('button.login')}
          </Button>
        </Link>
        <Link href={ROUTE.ACCOUNT.REGISTER.path}>
          <Button variant="outlined" className="w-full">
            {t('button.create_account')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Intro1;
