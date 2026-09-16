import React from 'react';
import type { BadgeProps } from './Badge.types';

const variantStyles = {
  default: { background: 'var(--bg-3)', color: 'var(--text-2)', border: 'var(--line-2)' },
  ok: { background: 'var(--ok-soft)', color: 'var(--ok)', border: 'var(--ok-soft)' },
  warn: { background: 'var(--warn-soft)', color: 'var(--warn)', border: 'var(--warn-soft)' },
  danger: { background: 'var(--danger-soft)', color: 'var(--danger)', border: 'var(--danger-soft)' },
  brand: { background: 'var(--brand-soft)', color: 'var(--brand)', border: 'var(--brand-soft)' },
} as const;

export default function Badge({
  variant = 'default',
  dot = false,
  size = 'md',
  children,
  className = '',
  style,
  ...rest
}: BadgeProps) {
  const palette = variantStyles[variant];
  const sizeClasses = size === 'sm' ? 'px-1.5 py-px text-[10.5px] rounded-[5px]' : 'px-2 py-0.5 text-[11.5px] rounded-md';

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap border font-semibold leading-normal ${sizeClasses} ${className}`}
      style={{ background: palette.background, color: palette.color, borderColor: palette.border, ...style }}
      {...rest}
    >
      {dot && <span className="size-1.5 shrink-0 rounded-full" style={{ background: palette.color }} />}
      {children}
    </span>
  );
}
