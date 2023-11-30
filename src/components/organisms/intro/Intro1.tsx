import Image from 'next/image';
import React from 'react';
import intro1Img from '@/images/intro1.svg?url';
import { Button } from '@/components/atoms';
import Link from 'next/link';

const Intro1 = () => {
  return (
    <div className="container-100svh flex-col items-center justify-center">
      <Image src={intro1Img} alt="mainLogo" priority />
      <div className="absolute bottom-11 w-full flex-auto px-5">
        <Link href={'/account/login'}>
          <Button variant="contained" className="mb-5 w-full">
            LOGIN
          </Button>
        </Link>
        <Link href={'/account/register'}>
          <Button variant="outlined" className="w-full">
            CREATE ACCOUNT
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Intro1;
