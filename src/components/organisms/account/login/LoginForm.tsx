'use client';

import { Button, InputText } from '@/components/atoms';
import { Login, UserJoin, loginSchema, userJoinSchema } from '@/types/user/user.typs';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitSuccess = (loginInfo: Login) => {
    console.log(loginInfo);
  };

  const handleSubmitError = (e: FieldErrors<Login>) => {
    for (const [key, value] of Object.entries(e)) {
      toast.error(value.message);
      return;
    }
  };
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
