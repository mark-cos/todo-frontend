import LoginForm from '@/components/organisms/account/login/loginForm/LoginForm';
import OauthButtons from '@/components/organisms/account/login/oauthButtons/OauthButtons';
import React from 'react';

const LoginTempl = () => {
  return (
    <>
      <LoginForm />
      <OauthButtons />
    </>
  );
};

export default LoginTempl;
