import { useEffect, useState } from 'react';

export const BREAKPOINTS = {
  xs: 0, sm: 560, md: 640, lg: 900, xl: 1100, '2xl': 1180, '3xl': 1280,
} as const;
export type Breakpoint = keyof typeof BREAKPOINTS;

export function useBreakpoint() {
  const [width, setWidth] = useState(() => typeof window === 'undefined' ? 1280 : window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  const active = (Object.entries(BREAKPOINTS).reduce((current, [name, minimum]) => width >= minimum ? name : current, 'xs')) as Breakpoint;
  const is = Object.fromEntries(Object.entries(BREAKPOINTS).map(([name, minimum]) => [name, width >= minimum])) as Record<Breakpoint, boolean>;
  return { width, active, is, lt: (breakpoint: Breakpoint) => width < BREAKPOINTS[breakpoint] };
}
