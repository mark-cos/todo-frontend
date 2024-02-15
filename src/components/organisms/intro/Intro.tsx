import React, { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';

type IntroProps = {
  viewIntroDivIndex: number;
  introId: number;
  img: string;
  children: React.ReactNode;
};

const Intro = forwardRef(function Intro2(
  { viewIntroDivIndex, introId, img, children }: IntroProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      className="flex h-[100svh] items-center justify-center"
      ref={ref}
      data-intro-id={introId}
    >
      <div
        className={`flex-auto ${
          viewIntroDivIndex >= introId
            ? ' transition-[opacity translate] translate-y-[10%] opacity-100 duration-[1800ms] ease-in-out'
            : 'translate-y-[40%] opacity-0'
        }`}
      >
        <Image src={img} alt="intro-image" className="mx-auto" priority />

        <div className="mt-16 text-center">{children}</div>
      </div>
    </div>
  );
});

export default Intro;
