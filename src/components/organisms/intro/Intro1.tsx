'use client';
import Image from 'next/image';
import React, { ForwardedRef, forwardRef } from 'react';
import intro1Img from '@/images/intro1.svg?url';

import Button from '@/components/atoms/button/Button';
import { useClientTranslation } from '@/libs/i18n/useClientTranslation';

const Intro1 = forwardRef(function Intro1({}, ref: ForwardedRef<HTMLDivElement>) {
  console.log('🚀 ~ Intro1 ~ ref:', ref);
  const { t } = useClientTranslation('intro');

  return (
    <div className="container-100svh flex-col items-center justify-center" ref={ref}>
      <Image src={intro1Img} alt="mainLogo" priority />
      <div className="absolute bottom-11 w-full flex-auto px-5">
        {/* <Link href={ROUTE.ACCOUNT.LOGIN.path}> */}
        <Button variant="contained" className="mb-5 w-full">
          {t('button.login')}
        </Button>
        {/* </Link> */}
        {/* <Link href={ROUTE.ACCOUNT.REGISTER.path}> */}
        <Button variant="outlined" className="w-full">
          {t('button.create_account')}
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
});

export default Intro1;
