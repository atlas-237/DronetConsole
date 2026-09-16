import { useEffect, useRef } from 'react';

type Cleanup = () => void;
type TimerId = ReturnType<typeof setInterval>;
interface PageStore { timers: Set<TimerId>; cleanups: Set<Cleanup>; }

let store: PageStore | null = null;
function getStore(): PageStore | null {
  if (typeof window === 'undefined') return null;
  if (!store) store = { timers: new Set(), cleanups: new Set() };
  return store;
}

export function setPageInterval(fn: () => void, ms: number) {
  const id = setInterval(fn, ms);
  getStore()?.timers.add(id);
  return id;
}
export function clearPageInterval(id: TimerId) { getStore()?.timers.delete(id); clearInterval(id); }
export function onPageLeave(fn: Cleanup) { getStore()?.cleanups.add(fn); return () => getStore()?.cleanups.delete(fn); }
export function flushPageLifecycle() {
  const current = getStore();
  if (!current) return;
  current.timers.forEach(id => clearInterval(id));
  current.timers.clear();
  current.cleanups.forEach(cleanup => { try { cleanup(); } catch { /* cleanup must not block others */ } });
  current.cleanups.clear();
}

export function usePageLifecycle() {
  const timerIds = useRef(new Set<TimerId>());
  const cleanups = useRef(new Set<Cleanup>());
  useEffect(() => () => {
    timerIds.current.forEach(id => clearInterval(id));
    cleanups.current.forEach(cleanup => { try { cleanup(); } catch { /* cleanup must not block unmount */ } });
    timerIds.current.clear(); cleanups.current.clear();
  }, []);
  return {
    setPageInterval: (fn: () => void, ms: number) => { const id = setInterval(fn, ms); timerIds.current.add(id); return id; },
    clearPageInterval: (id: TimerId) => { timerIds.current.delete(id); clearInterval(id); },
    onPageLeave: (fn: Cleanup) => { cleanups.current.add(fn); return () => cleanups.current.delete(fn); },
  };
}
