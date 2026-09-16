import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'darta-theme';
export type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === 'undefined') return 'dark';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* storage can be unavailable */ }
  }, [theme]);

  const toggle = useCallback(() => setTheme(previous => previous === 'dark' ? 'light' : 'dark'), []);
  return { theme, setTheme, toggle, isDark: theme === 'dark' };
}
