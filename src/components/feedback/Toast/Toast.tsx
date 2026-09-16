import { useEffect, useRef, useState } from 'react';
import { Button } from '@components/ui';
import type { ToastProps } from './Toast.types';

export default function Toast({ msg, undo, onDismiss }: ToastProps) {
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => { timerRef.current = setTimeout(() => { setFading(true); fadeRef.current = setTimeout(onDismiss, 300); }, 6000); return () => { if (timerRef.current) clearTimeout(timerRef.current); if (fadeRef.current) clearTimeout(fadeRef.current); }; }, [onDismiss]);
  const handleDismiss = () => { if (timerRef.current) clearTimeout(timerRef.current); setFading(true); fadeRef.current = setTimeout(onDismiss, 300); };
  const handleUndo = () => { if (undo) { undo(); handleDismiss(); } };
  return <div className="toast flex w-full items-center gap-2.75 rounded-(--r-md) border border-(--line) bg-(--surface-3) px-3.5 py-2.75 text-[13.5px] shadow-[0_14px_40px_rgba(0,0,0,.62)]" style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(8px)' : 'translateY(0)', transition: 'opacity .3s ease, transform .3s ease' }} role="status" aria-live="polite"><span>{msg}</span>{undo && <Button variant="quiet" size="sm" className="undo ml-auto" onClick={handleUndo}>Annuler</Button>}</div>;
}
