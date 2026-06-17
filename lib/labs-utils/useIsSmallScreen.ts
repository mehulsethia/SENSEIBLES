'use client';

import { useState, useEffect } from 'react';

const DEFAULT_BREAKPOINT = 768;

export default function useIsSmallScreen(breakpoint: number = DEFAULT_BREAKPOINT) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmallScreen;
}
