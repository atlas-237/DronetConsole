import type React from 'react';
export type NoticeTone = 'info' | 'ok' | 'warn' | 'danger';
export interface NoticeProps { tone?: NoticeTone; title?: string; children?: React.ReactNode; onClose?: () => void; className?: string; }