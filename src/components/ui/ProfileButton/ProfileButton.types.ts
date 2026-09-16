import type React from 'react';

export interface ProfileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  initials?: string;
  avatarText?: string;
  open?: boolean;
}