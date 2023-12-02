'use client';

import { Button, InputText } from '@/components/atoms';
import React from 'react';
import useLoginForm from './LoginForm.hook';
import ROUTE from '@/libs/route';

const LoginForm = () => {
  const { t, handleSubmit, handleSubmitSuccess, handleSubmitError, register } =
    useLoginForm();
  console.log(ROUTE.ACCOUNT.LOGIN.path);
  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 inline-block">
          {t('input.email.label')}
        </label>
        <InputText
          {...register('email')}
          placeholder={t('input.email.placeholder')}
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 inline-block">
          {t('input.password.label')}
        </label>
        <InputText
          type="password"
          {...register('email')}
          placeholder={t('input.password.placeholder')}
          id="password"
        />
      </div>

      <div className="mt-16">
        <Button variant="contained" className="w-full" type="submit">
          Login
        </Button>
      </div>

      <div className="relative my-11 h-[1px] border border-secondary">
        <div className="absolute left-[50%] top-[-14px] translate-x-[-50%] bg-black px-1 text-secondary">
          or
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
