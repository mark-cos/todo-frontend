import React from 'react';
import intro2Img from '@/images/intro2.svg?url';
import Image from 'next/image';

const Intro2 = () => {
  return (
    <div className="container-100svh pt-24">
      <div className="flex-auto">
        <Image src={intro2Img} alt="mainLogo" className="mx-auto" priority />

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold">Manage your tasks</p>
          <p className="mt-8">
            You can easily manage all of your daily
            <br />
            tasks in DoMe for free
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
