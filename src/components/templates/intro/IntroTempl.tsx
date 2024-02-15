'use client';

import Intro from '@/components/organisms/intro/Intro';
import Intro1 from '@/components/organisms/intro/Intro1';
import React, { useEffect, useRef, useState } from 'react';
import intro2Img from '@/images/intro2.svg?url';
import intro3Img from '@/images/intro3.svg?url';
import intro4Img from '@/images/intro4.svg?url';

const IntroTempl = () => {
  // 표시된 인트로 컨텐츠 인덱스. 로그인 UI 제외
  const INTRO_CONTENT_LENGTH = 3;
  const [indicatedIntroIndex, setIndicatedIntroIndex] = useState(-1);
  const introDivRefs = useRef<HTMLDivElement[]>(new Array(INTRO_CONTENT_LENGTH));

  /**
   * 화면에 표시된 인트로 div(`introDivRefs`)의 attribute `introId`값을 기준으로
   * 본 인트로 인덱스(`setIndicatedIntroIndex`) 설정
   * `indicatedIntroIndex`를 기준으로 `<Intro>`컴포넌트에서 transition 설정
   */
  const handleObserver = async (
    entrys: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entrys.forEach((entry) => {
      const introId = Number((entry.target as HTMLDivElement).dataset.introId);

      if (entry.isIntersecting) {
        // 스크롤이 최상단이 아닌 상태에서 새로고침 시
        // 현재 보여진 인트로를 iewIntroDivIndex설정하여 해당 위의 인트로를 모두 보여준다.
        if (indicatedIntroIndex === -1 && introId !== 0) {
          setIndicatedIntroIndex(introId);
        } else if (introId > indicatedIntroIndex) {
          setIndicatedIntroIndex((pre) => pre + 1);
        }

        if (introId + 1 === INTRO_CONTENT_LENGTH) {
          observer.disconnect();
          return;
        }
      }
    });
  };

  // introDivRefs에 IntersectionObserver를 사용하여 화면에 표시 여부 감시 설정
  useEffect(() => {
    if (!introDivRefs.current) return;
    const option: IntersectionObserverInit = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    introDivRefs.current.forEach((introDivRef) => {
      observer.observe(introDivRef);
    });

    return () => {
      observer && observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Intro1 />
      <Intro
        ref={(ref: HTMLDivElement) => (introDivRefs.current![0] = ref)}
        viewIntroDivIndex={indicatedIntroIndex}
        introId={0}
        img={intro2Img}
      >
        <p className="text-2xl font-bold">Manage your tasks</p>
        <p className="mt-8">
          You can easily manage all of your daily
          <br />
          tasks in DoMe for free
        </p>
      </Intro>

      <Intro
        ref={(ref: HTMLDivElement) => (introDivRefs.current![1] = ref)}
        viewIntroDivIndex={indicatedIntroIndex}
        introId={1}
        img={intro3Img}
      >
        <p className="text-2xl font-bold">Create daily routine</p>
        <p className="mt-8">
          In Uptodo you can create your
          <br />
          personalized routine to stay productive
        </p>
      </Intro>

      <Intro
        ref={(ref: HTMLDivElement) => (introDivRefs.current![2] = ref)}
        viewIntroDivIndex={indicatedIntroIndex}
        introId={2}
        img={intro4Img}
      >
        <p className="text-2xl font-bold">Orgonaize your tasks</p>
        <p className="mt-8">
          You can organize your daily tasks
          <br />
          by adding your tasks into separate categories
        </p>
      </Intro>
    </div>
  );
};

export default IntroTempl;
