import type React from 'react';

export interface PanelProps {
  title?: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
  tightBody?: boolean;
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
}
