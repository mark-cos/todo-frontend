import Image from 'next/image';
import React from 'react';
import intro1Img from '@/images/intro1.svg?url';
import Button from '@/components/atoms/button/Button';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import ClientLink from '@/components/atoms/link/ClientLink';
import ROUTE from '@/libs/route';

const Intro1 = () => {
  const { t } = useClientTranslation('intro');

  return (
    <div className="container-100svh flex-col items-center justify-center">
      <Image src={intro1Img} alt="mainLogo" priority />
      <div className="absolute bottom-11 w-full flex-auto px-5">
        <ClientLink href={ROUTE.ACCOUNT.LOGIN.path}>
          <Button variant="contained" className="mb-5 w-full">
            {t('button.login')}
          </Button>
        </ClientLink>
        <ClientLink href={ROUTE.ACCOUNT.REGISTER.path}>
          <Button variant="outlined" className="w-full">
            {t('button.create_account')}
          </Button>
        </ClientLink>
      </div>
    </div>
  );
};

export default Intro1;
