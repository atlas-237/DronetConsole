import type React from 'react';

export type ButtonVariant = 'default' | 'primary' | 'quiet' | 'danger';

export type ButtonSize = 'default' | 'sm' | 'icon';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

