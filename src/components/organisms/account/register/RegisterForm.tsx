'use client';

import { Button, InputText } from '@/components/atoms';
import React from 'react';
import useRegisterForm from './data/useRegisterForm';

const RegisterForm = () => {
  const { handleSubmit, handleSubmitSuccess, handleSubmitError, register } =
    useRegisterForm();
  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 inline-block">
          Email
        </label>
        <InputText {...register('email')} placeholder="email" id="email" />
      </div>
      <div className="mb-6">
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

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="mb-2 inline-block">
          Confirm Password
        </label>
        <InputText
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm Password"
          id="confirmPassword"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="name" className="mb-2 inline-block">
          name
        </label>
        <InputText type="text" {...register('name')} placeholder="name" id="name" />
      </div>

      <div className="mt-16">
        <Button variant="contained" className="w-full" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
