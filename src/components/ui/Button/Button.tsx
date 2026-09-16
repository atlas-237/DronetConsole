import React, { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'default',
    size = 'default',
    disabled = false,
    icon,
    iconRight,
    children,
    onClick,
    className = '',
    type = 'button',
    ...rest
  },
  ref
) {
  const classes = ['inline-flex items-center justify-center gap-2 rounded-md border text-[13px] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--brand) disabled:pointer-events-none disabled:opacity-50'];

  if (variant === 'primary') classes.push('btn-primary', 'border-(--brand)', 'bg-(--brand)', 'text-(--on-brand)', 'hover:bg-(--brand-hi)');
  else if (variant === 'quiet') classes.push('btn-quiet', 'border-transparent', 'bg-transparent', 'text-(--text-2)', 'hover:bg-(--bg-3)', 'hover:text-(--text)');
  else if (variant === 'danger') classes.push('btn-danger', 'border-(--danger)', 'bg-(--danger)', 'text-white', 'hover:opacity-90');
  else classes.push('border-(--line-2)', 'bg-(--bg-2)', 'text-(--text-2)', 'hover:bg-(--bg-3)', 'hover:text-(--text)');

  if (size === 'sm') classes.push('btn-sm', 'min-h-7.5', 'px-2.5', 'py-1', 'text-xs');
  else if (size === 'icon') classes.push('btn-icon', 'size-9', 'p-0');
  else classes.push('min-h-9.5', 'px-3.5', 'py-2');

  if (className) classes.push(className);

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes.join(' ')}
      {...rest}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
});

export default Button;

