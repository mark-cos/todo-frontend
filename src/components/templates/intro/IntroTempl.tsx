'use client';

import Intro1 from '@/components/organisms/intro/Intro1';
import Intro2 from '@/components/organisms/intro/Intro2';
import Intro3 from '@/components/organisms/intro/Intro3';
import Intro4 from '@/components/organisms/intro/Intro4';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const IntroTempl = () => {
  const [ref, inView, entry] = useInView({});

  return (
    <>
      <Intro1 ref={ref} />
      <Intro2 />
      <Intro3 />
      <Intro4 />
    </>
  );
};

export default IntroTempl;
