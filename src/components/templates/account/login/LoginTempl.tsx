import { authOptions } from '@/app/api/(auth)/[...nextauth]/route';
import LoginForm from '@/components/organisms/account/login/loginForm/LoginForm';
import OauthButtons from '@/components/organisms/account/login/oauthButtons/OauthButtons';
import React from 'react';

const LoginTempl = async () => {
  return (
    <>
      <LoginForm />
      <OauthButtons />
    </>
  );
};

export default LoginTempl;
