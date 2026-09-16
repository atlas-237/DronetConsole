import type React from 'react';

export interface ListRowProps {
  title?: string;
  subtitle?: string;
  color?: string;
  selected?: boolean;
  onClick?: () => void;
  right?: React.ReactNode;
  className?: string;
}
