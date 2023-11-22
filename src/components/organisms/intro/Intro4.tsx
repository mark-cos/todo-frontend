import React from 'react';
import intro4Img from '@/images/intro4.svg?url';
import Image from 'next/image';

const Intro4 = () => {
  return (
    <div className="container-100svh pt-24">
      <div className="flex-auto">
        <Image src={intro4Img} alt="mainLogo" className="mx-auto" priority />

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold">Orgonaize your tasks</p>
          <p className="mt-8">
            You can organize your daily tasks
            <br />
            by adding your tasks into separate categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro4;
