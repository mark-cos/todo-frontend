import { Button } from '@/components/atoms';
import React from 'react';
import GoogleIcon from '@/images/icons/google.svg';
import AppleIcon from '@/images/icons/apple.svg';

const OauthButtons = () => {
  return (
    <div>
      <Button variant="outlined" className="flex w-full items-center justify-center">
        <GoogleIcon /> <p className="ml-2">Login with Google</p>
      </Button>
      <Button variant="outlined" className="mt-6 flex w-full items-center justify-center">
        <AppleIcon /> <p className="ml-2">Login with Apple</p>
      </Button>
    </div>
  );
};

export default OauthButtons;
