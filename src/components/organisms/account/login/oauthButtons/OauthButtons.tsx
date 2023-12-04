import React from 'react';
import GoogleIcon from '@/images/icons/google.svg';
import AppleIcon from '@/images/icons/apple.svg';
import useOauthButtons from './OauthButtons.hook';
import Button from '@/components/atoms/button/Button';

const OauthButtons = async () => {
  const { t } = await useOauthButtons();
  return (
    <div>
      <Button variant="outlined" className="flex w-full items-center justify-center">
        <GoogleIcon /> <p className="ml-2">{t('button.login_google')}</p>
      </Button>
      <Button variant="outlined" className="mt-6 flex w-full items-center justify-center">
        <AppleIcon /> <p className="ml-2">{t('button.login_apple')}</p>
      </Button>
    </div>
  );
};

export default OauthButtons;
