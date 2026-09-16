import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import Toast from '@components/feedback/Toast/Toast';

export type ToastTone = 'info' | 'ok' | 'warn' | 'danger';
export interface ToastOptions { tone?: ToastTone; undo?: () => void; }
export interface ToastContextValue { show: (message: ReactNode, options?: ToastOptions) => number; push: (message: ReactNode, undo?: () => void) => number; }
interface ToastEntry { id: number; message: ReactNode; undo?: () => void; }

const ToastContext = createContext<ToastContextValue | null>(null);
let idCounter = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);
  const push = useCallback((message: ReactNode, undo?: () => void) => { const id = ++idCounter; setToasts(previous => [...previous, { id, message, undo }]); return id; }, []);
  const dismiss = useCallback((id: number) => setToasts(previous => previous.filter(toast => toast.id !== id)), []);
  const show = useCallback((message: ReactNode, options: ToastOptions = {}) => push(message, options.undo), [push]);
  const value = useMemo(() => ({ show, push }), [show, push]);
  return <ToastContext.Provider value={value}><>{children}</><div id="toasts" className="toasts" aria-live="polite" aria-atomic="true">{toasts.map(toast => <Toast key={toast.id} msg={toast.message} undo={toast.undo} onDismiss={() => dismiss(toast.id)} />)}</div></ToastContext.Provider>;
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast doit être utilisé à l'intérieur d'un ToastProvider");
  return context;
}

export default ToastContext;
