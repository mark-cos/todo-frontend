'use client';
import React from 'react';
import GoogleIcon from '@/images/icons/google.svg';
import AppleIcon from '@/images/icons/apple.svg';
import useOauthButtons from './OauthButtons.hook';
import Button from '@/components/atoms/button/Button';
import ROUTE from '@/libs/route';
import { getClientLngAddPath } from '@/utils/common';

const OauthButtons = () => {
  const { t, signIn } = useOauthButtons();
  return (
    <div>
      <Button
        variant="outlined"
        className="flex w-full items-center justify-center"
        onClick={() =>
          signIn('google', {
            callbackUrl: getClientLngAddPath(ROUTE.TASKS.path),
            redirect: true,
          })
        }
      >
        <GoogleIcon /> <p className="ml-2">{t('button.login_google')}</p>
      </Button>
      <Button variant="outlined" className="mt-6 flex w-full items-center justify-center">
        <AppleIcon /> <p className="ml-2">{t('button.login_apple')}</p>
      </Button>
    </div>
  );
};

export default OauthButtons;
