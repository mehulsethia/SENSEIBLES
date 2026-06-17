'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import useStats from '@/lib/lab-stores/useStats';
import labsAssets, { LabsAssetGroup } from '@/lib/labs-data/assets';
import { splitTextElements } from '@/lib/labs-utils/gsapUtils';
import useClickTrigger from '@/lib/labs-utils/useClickTrig';

import ArrowStraight from './ArrowStraight';

type ExperimentsGroup = Extract<LabsAssetGroup, { name: 'experiments' }>;

const Swapper = () => {
  const experiments = useMemo(() => {
    const group = labsAssets.find(
      (asset): asset is ExperimentsGroup => asset.name === 'experiments',
    );
    return group?.items ?? [];
  }, []);

  const pages = experiments;

  const index = useStats((state) => state.index);
  const increaseIndex = useStats.getState().increaseIndex;
  const setIndex = useStats.getState().setIndex;
  const activePage = pages[index];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useClickTrigger(() => setIsMenuOpen(false));

  const liveRef = useRef<HTMLDivElement | null>(null);
  const liveTextRef = useRef<HTMLParagraphElement | null>(null);
  const swapperRef = useRef<HTMLDivElement | null>(null);
  const titleRef1 = useRef<HTMLParagraphElement | null>(null);
  const titleRef2 = useRef<HTMLParagraphElement | null>(null);
  const arrowIconRef = useRef<{ scaleInAnimation?: () => void; scaleOutAnimation?: () => void } | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const countRef = useRef(0);
const delayRef = useRef(false);
const isTransitioning = useRef(false);
const clickingHelper = useRef(false);
const TRANSITION_LOCK_MS = 900;

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    if (!pages.length) {
      return;
    }

    const titleEl1 = titleRef1.current;
    const titleEl2 = titleRef2.current;
    const liveTextEl = liveTextRef.current;
    const swapperEl = swapperRef.current;
    const liveEl = liveRef.current;
    const menuEl = menuRef.current;

    if (!titleEl1 || !titleEl2 || !liveTextEl || !swapperEl || !liveEl || !menuEl) {
      return;
    }

    titleEl1.textContent = pages[0].swapperContent[0] ?? '';
    titleEl2.textContent = pages[0].swapperContent[0] ?? '';

    splitTextElements(titleEl1, 'chars');
    splitTextElements(titleEl2, 'chars');
    splitTextElements(liveTextEl, 'chars');

    gsap.set(titleEl1.querySelectorAll('.char span'), {
      y: '-100%',
      opacity: 0,
    });
    gsap.set(titleEl2.querySelectorAll('.char span'), {
      y: '-100%',
      opacity: 0,
    });
    gsap.set(liveTextEl.querySelectorAll('.char span'), {
      y: '-100%',
      opacity: 0,
    });

    gsap.set(swapperEl, { opacity: 0 });
    gsap.set(liveEl, { opacity: 0 });
    gsap.set(menuEl, { opacity: 0 });

    const runIntro = () => {
      isTransitioning.current = true;

      const tl = gsap.timeline({
        defaults: {
          ease: 'hop',
          delay: 1.475,
          onComplete: () => {
            isTransitioning.current = false;
          },
        },
      });

      tl.to(
        swapperEl,
        {
          opacity: 1,
          duration: 0.675,
        },
        0,
      );

      tl.to(
        menuEl,
        {
          opacity: 1,
          duration: 0.675,
        },
        0.25,
      );

      tl.to(
        liveEl,
        {
          opacity: 1,
          duration: 0.675,
        },
        0.125,
      );

      tl.to(
        titleEl1.querySelectorAll('.char span'),
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.05,
        },
        0,
      );

      tl.to(
        liveTextEl.querySelectorAll('.char span'),
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.05,
        },
        0.175,
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

    return () => unsubscribe();
  }, [pages]);

  useEffect(() => {
    if (!pages.length) {
      return;
    }

    delayRef.current = true;
    const timer = setTimeout(() => {
      delayRef.current = false;
    }, TRANSITION_LOCK_MS);

    const unsubscribe = useStats.subscribe(
      (state) => state.index,
      (value, prevValue) => {
        isTransitioning.current = true;
        clickingHelper.current = !clickingHelper.current;

        delayRef.current = true;
        setTimeout(() => {
          delayRef.current = false;
        }, TRANSITION_LOCK_MS);
        countRef.current = value;

        const activeTitle = clickingHelper.current ? titleRef2.current : titleRef1.current;
        if (!activeTitle) {
          return;
        }

        activeTitle.textContent = pages[value].swapperContent[0] ?? '';
        splitTextElements(activeTitle, 'chars');

        if (clickingHelper.current) {
          inTransition();
        } else {
          endTransition();
        }
      },
    );

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [pages]);

  useEffect(() => {
    if (!pages.length) {
      return;
    }

    const interval = setInterval(() => {
      if (pages.length <= 1) {
        return;
      }

      if (isTransitioning.current || delayRef.current) {
        return;
      }

      const { index: currentIndex } = useStats.getState();
      const nextIndex = (currentIndex + 1) % pages.length;

      isTransitioning.current = true;
      setIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [pages.length, setIndex]);

  const inTransition = () => {
    const titleEl1 = titleRef1.current;
    const titleEl2 = titleRef2.current;

    if (!titleEl1 || !titleEl2) {
      return;
    }

    const titleTl = gsap.timeline({
      defaults: {
        ease: 'hop',
        onComplete: () => {
          isTransitioning.current = false;
        },
      },
    });

    titleTl.to(
      titleEl1.querySelectorAll('.char span'),
      {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      },
      0,
    );

    titleTl.to(
      titleEl2.querySelectorAll('.char span'),
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      },
      0,
    );
  };

  const endTransition = () => {
    const titleEl1 = titleRef1.current;
    const titleEl2 = titleRef2.current;

    if (!titleEl1 || !titleEl2) {
      return;
    }

    const titleTl = gsap.timeline({
      defaults: {
        ease: 'hop',
        onComplete: () => {
          isTransitioning.current = false;
        },
      },
    });

    titleTl.to(
      titleEl1.querySelectorAll('.char span'),
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      },
      0,
    );

    titleTl.to(
      titleEl2.querySelectorAll('.char span'),
      {
        y: '100%',
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      },
      0,
    );
  };

  if (!pages.length) {
    return null;
  }

  return (
    <div
      style={{ transformOrigin: 'right bottom' }}
      className="absolute right-0 bottom-0 z-40 flex min-w-fit max-w-fit scale-[0.75] flex-col items-end justify-center gap-3 md:scale-100 md:gap-3"
    >
      <motion.div
        ref={menuRef}
        style={{
          opacity: 1,
          willChange: 'transform, opacity',
          transformOrigin: 'center center',
          cursor: 'default',
          overscrollBehavior: 'none',
          overflow: 'hidden',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
        animate={{
          width: isMenuOpen ? '280px' : 0,
          maxHeight: isMenuOpen ? '420px' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.325,
          delay: isMenuOpen ? 0.25 : 0.425,
          ease: 'easeInOut',
        }}
        className="pointer-events-auto z-50 scale-100 overflow-y-auto rounded-[16px] border-[4px] border-[#b1b1b141] bg-white px-3 py-3 font-main shadow-2xl"
      >
        {pages.map((page, i) => (
          <motion.div
            key={page.id}
            onClick={() => {
              if (isTransitioning.current) {
                return;
              }

              delayRef.current = true;
              isTransitioning.current = true;
              setIndex(i);

              setTimeout(() => {
                delayRef.current = false;
              }, TRANSITION_LOCK_MS);
            }}
            className="flex w-full cursor-pointer select-none flex-row items-center justify-between rounded-[8px] bg-transparent px-2 py-2 text-black transition duration-100 ease-in-out hover:bg-[#b1b1b12a]"
            animate={{
              background:
                i === index
                  ? isMenuOpen
                    ? 'rgba(121,121,121,0.16)'
                    : 'rgba(0,0,0,0)'
                  : 'rgba(0,0,0,0)',
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{
              background: {
                duration: 0.125,
                ease: 'easeOut',
              },
              opacity: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: isMenuOpen ? 0.35 + i * 0.05 : (pages.length - i) * 0.01,
              },
            }}
          >
            <h1 className="min-w-fit text-nowrap text-[0.95rem] font-semibold uppercase tracking-[0.02em]">
              {page.swapperContent.join(' ')}
            </h1>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex w-fit flex-row items-center justify-end gap-[32px] md:gap-16">
        <div
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="pointer-events-auto rounded-[330px] border-[4px] border-[#b1b1b141] bg-white px-3 py-2 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 0.925 }}
            className="relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-black"
          >
            <div className="flex items-center justify-center gap-[3px]">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{
                    opacity: isMenuOpen ? (dot === 1 ? 0.4 : 0.8) : 1,
                    scale: isMenuOpen ? 0.85 : 1,
                  }}
                  transition={{ duration: 0.35, ease: [0.55, 0, 0.3, 1] }}
                  className="h-[6px] w-[6px] rounded-full bg-white"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={liveRef}
          style={{
            willChange: 'transform, opacity',
            transformOrigin: 'center center',
            cursor: 'default',
            overscrollBehavior: 'none',
          }}
          className="pointer-events-auto flex items-center gap-3 rounded-[330px] border-[4px] border-[#b1b1b141] bg-white px-4 py-2 shadow-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            onClick={() => {
              if (activePage?.pageUrl) {
                window.open(activePage.pageUrl, '_blank', 'noopener');
              }
            }}
            className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-black transition hover:scale-95"
          >
            <ArrowStraight ref={arrowIconRef} fill="#fff" className="pointer-events-none -rotate-45" />
          </button>
          <p ref={liveTextRef} className="text-nowrap text-[0.775rem] font-bold uppercase text-black md:text-[0.875rem]">
            Live
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={swapperRef}
        style={{
          opacity: 0,
          willChange: 'transform',
          transformOrigin: 'center center',
          cursor: 'default',
          filter: 'invert(0)',
          overscrollBehavior: 'none',
        }}
        initial={{ width: '320px' }}
        animate={{
          width: isHovered ? (isMobile ? '320px' : '360px') : '320px',
        }}
        transition={{
          duration: isHovered ? 0.4 : 0.525,
          delay: isHovered ? 0 : 0.05,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="pointer-events-auto w-[320px] scale-100 font-main md:w-[360px]"
      >
        <div className="pointer-events-none flex flex-row items-center justify-between gap-3 rounded-[330px] border-[4px] border-[#b1b1b141] bg-white py-0 pl-3 pr-3 shadow-2xl">
          <div className="pointer-events-auto relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center">
            <motion.div
              style={{
                willChange: 'transform',
              }}
              onClick={() => {
                if (isTransitioning.current) {
                  return;
                }

                delayRef.current = true;
                isTransitioning.current = true;

                if (index > 0) {
                  setIndex(index - 1);
                } else {
                  setIndex(pages.length - 1);
                  countRef.current = 0;
                }

                setTimeout(() => {
                  delayRef.current = false;
                }, TRANSITION_LOCK_MS);
              }}
              whileHover={{ scale: 0.925 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="absolute inset-0 h-[44px] w-[44px] rounded-full bg-black"
            />
            <ArrowStraight ref={arrowIconRef} fill="#fff" className="pointer-events-none rotate-180" />
          </div>

          <div className="flex h-full min-w-fit flex-col items-start justify-center gap-[4px]">
            <div className="relative flex min-w-fit items-start justify-center text-nowrap text-[0.775rem] font-bold uppercase text-black md:text-[0.875rem]">
              <p
                ref={titleRef1}
                className="relative flex h-full w-full min-w-fit items-start justify-center text-nowrap px-1"
              >
                {pages[0].swapperContent.join(' ')}
              </p>
              <p ref={titleRef2} className="absolute left-0 top-0 min-w-fit text-nowrap px-1">
                {pages[0].swapperContent.join(' ')}
              </p>
            </div>
          </div>

          <div className="pointer-events-auto relative flex h-[44px] w-[44px] cursor-pointer items-center justify-center">
            <motion.div
              style={{
                willChange: 'transform',
              }}
              onClick={() => {
                if (isTransitioning.current) {
                  return;
                }

                delayRef.current = true;
                isTransitioning.current = true;
                countRef.current += 1;

                if (countRef.current < pages.length) {
                  increaseIndex();
                } else {
                  setIndex(0);
                  countRef.current = 0;
                }

                setTimeout(() => {
                  delayRef.current = false;
                }, TRANSITION_LOCK_MS);
              }}
              whileHover={{ scale: 0.925 }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="absolute inset-0 h-[44px] w-[44px] rounded-full bg-black"
            />
            <ArrowStraight ref={arrowIconRef} fill="#fff" className="pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Swapper;
