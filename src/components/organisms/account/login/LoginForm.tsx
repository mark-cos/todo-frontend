'use client';

import { Button, InputText } from '@/components/atoms';
import React from 'react';
import useLoginForm from './data/useLoginForm';

const LoginForm = () => {
  const { handleSubmit, handleSubmitSuccess, handleSubmitError, register } =
    useLoginForm();
  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 inline-block">
          Email
        </label>
        <InputText {...register('email')} placeholder="email" id="email" />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 inline-block">
          Password
        </label>
        <InputText
          type="password"
          {...register('password')}
          placeholder="password"
          id="password"
        />
      </div>

      <div className="mt-16">
        <Button variant="contained" className="w-full" type="submit">
          Login
        </Button>
      </div>

      <div className="relative my-11 h-[1px] border border-[#979797]">
        <div className="absolute left-[50%] top-[-14px] translate-x-[-50%] bg-black px-1 text-[#979797]">
          or
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
