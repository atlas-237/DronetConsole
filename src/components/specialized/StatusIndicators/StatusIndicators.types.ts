import type React from 'react';
export interface LiveTagProps { label?: string; pulse?: boolean; className?: string; }
export interface ConnectionIndicatorProps { state?: 'up' | 'warn' | 'down'; label?: string; }
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> { icon: string | React.ReactNode; badge?: number; label: string; variant?: 'default' | 'primary'; size?: 'default' | 'sm'; className?: string; }