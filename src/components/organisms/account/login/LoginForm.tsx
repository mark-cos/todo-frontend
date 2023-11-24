import { Button, InputText } from '@/components/atoms';
import React from 'react';
import GoogleIcon from '@/images/icons/google.svg';
import AppleIcon from '@/images/icons/apple.svg';

const LoginForm = () => {
  return (
    <form>
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 inline-block">
          Email
        </label>
        <InputText name="email" placeholder="email" id="email" />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 inline-block">
          Password
        </label>
        <InputText type="password" name="password" placeholder="password" id="password" />
      </div>

      <div className="mt-16">
        <Button variant="contained" className="w-full">
          Login
        </Button>
      </div>

      <div className="relative my-11 h-[1px] border border-[#979797]">
        <div className="absolute left-[50%] top-[-14px] translate-x-[-50%] bg-black px-1 text-[#979797]">
          or
        </div>
      </div>

      {/* snsLogin */}
      <div>
        <Button variant="outlined" className="flex w-full items-center justify-center">
          <GoogleIcon /> <p className="ml-2">Login with Google</p>
        </Button>
        <Button
          variant="outlined"
          className="mt-6 flex w-full items-center justify-center"
        >
          <AppleIcon /> <p className="ml-2">Login with Apple</p>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
