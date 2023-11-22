import Image from 'next/image';
import React from 'react';
import intro3Img from '@/images/intro3.svg?url';
const Intro3 = () => {
  return (
    <div className="container-100svh pt-24">
      <div className="flex-auto">
        <Image src={intro3Img} alt="mainLogo" className="mx-auto" priority />

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold">Create daily routine</p>
          <p className="mt-8">
            In Uptodo you can create your
            <br />
            personalized routine to stay productive
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro3;
