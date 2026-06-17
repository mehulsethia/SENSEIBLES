'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

import { splitTextElements } from '@/lib/labs-utils/gsapUtils';
import useStats from '@/lib/lab-stores/useStats';
import Loader from '@/components/labs/Loader';
import Swapper from '@/components/labs/Swapper/Swapper';

const Experience = dynamic(() => import('@/components/labs/Experience/Experience'), {
  ssr: false,
});

const LabsPage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const { handleScopeAnim, scopeAnim } = useStats.getState();
    if (!scopeAnim) {
      handleScopeAnim();
    }
  }, []);

  useEffect(() => {
    const titleNode = titleRef.current;
    const subtitleNode = subtitleRef.current;

    if (!titleNode || !subtitleNode) {
      return;
    }

    splitTextElements(titleNode, 'chars');
    splitTextElements(subtitleNode, 'chars');

    gsap.set(titleNode.querySelectorAll('.char span'), {
      y: '-100%',
      opacity: 0,
    });

    gsap.set(subtitleNode.querySelectorAll('.char span'), {
      y: '-100%',
      opacity: 0,
    });

    const runIntro = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'hop',
          delay: 0.375,
        },
      });

      tl.to(
        titleNode.querySelectorAll('.char span'),
        {
          y: 0,
          opacity: 1,
          duration: 1.25,
          stagger: 0.15,
        },
        0,
      );

      tl.to(
        subtitleNode.querySelectorAll('.char span'),
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.01,
        },
        0.625,
      );
    };

    const unsubscribe = useStats.subscribe(
      (state) => state.scopeAnim,
      () => {
        runIntro();
      },
    );

    if (useStats.getState().scopeAnim) {
      runIntro();
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="relative flex min-h-[100svh] w-full justify-center overflow-hidden bg-gradient-to-b from-[#bfc2cc] via-[#dbdde4] to-[#f5f6f8]">
      <Loader />

      <div className="pointer-events-none absolute inset-0">
        <Experience />
      </div>

      <div
        ref={pageRef}
        className="pointer-events-auto relative z-10 mx-auto flex h-[100svh] w-full max-w-[1920px] flex-col justify-between px-6 pb-6 pt-6 font-main md:px-20 md:pb-[3rem] md:pt-[4rem]"
      >
        <div className="flex flex-col gap-0 font-main md:gap-2">
          <p
            ref={titleRef}
            className="translate-x-[-2px] text-[4rem] normal-case text-white !font-[400] leading-[1.25] tracking-[-0.0275em] md:translate-x-[-6px] md:text-[8rem] md:leading-[0.9]"
          >
            Lab
          </p>
          <p
            ref={subtitleRef}
            className="max-w-[220px] text-[0.75rem] normal-case text-white !font-[400] leading-[1.1] tracking-[-0.0375em] md:max-w-[280px] md:text-[1rem]"
          >
            Showcase of my latest projects, designs and experiments, more on{' '}
            <span
              onClick={() => window.open('https://x.com/tobias_stoulil')}
              className="cursor-pointer !font-[500] underline"
            >
              X
            </span>
          </p>
        </div>

        <div className="flex w-full justify-end">
          <Swapper />
        </div>

        <div id="trig" className="pointer-events-auto absolute inset-0 z-[-1] h-screen w-full bg-transparent" />
      </div>
    </div>
  );
};

export default LabsPage;
