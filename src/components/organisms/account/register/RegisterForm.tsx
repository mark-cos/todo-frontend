'use client';

import React from 'react';
import useRegisterForm from './RegisterForm.hook';
import InputText from '@/components/atoms/inputText/InputText';
import Button from '@/components/atoms/button/Button';

const RegisterForm = () => {
  const { t, handleSubmit, handleSubmitSuccess, handleSubmitError, register } =
    useRegisterForm();
  return (
    <form onSubmit={handleSubmit(handleSubmitSuccess, handleSubmitError)}>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 inline-block">
          {t('input.email.label')}
        </label>
        <InputText {...register('email')} placeholder={t('input.email.placeholder')} />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="mb-2 inline-block">
          {t('input.password.label')}
        </label>
        <InputText
          type="password"
          {...register('password')}
          placeholder={t('input.password.placeholder')}
          id="password"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="mb-2 inline-block">
          {t('input.confirmPassword.label')}
        </label>
        <InputText
          type="password"
          {...register('confirmPassword')}
          placeholder={t('input.confirmPassword.placeholder')}
          id="confirmPassword"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="name" className="mb-2 inline-block">
          {t('input.name.label')}
        </label>
        <InputText
          type="text"
          {...register('name')}
          placeholder={t('input.name.placeholder')}
          id="name"
        />
      </div>

      <div className="mt-16">
        <Button variant="contained" className="w-full" type="submit">
          {t('button.register')}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
