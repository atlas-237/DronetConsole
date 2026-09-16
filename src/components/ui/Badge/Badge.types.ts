import type React from 'react';

export type BadgeVariant = 'default' | 'ok' | 'warn' | 'danger' | 'brand';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  size?: BadgeSize;
  children?: React.ReactNode;
}
