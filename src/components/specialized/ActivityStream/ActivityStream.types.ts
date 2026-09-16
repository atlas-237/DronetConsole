import type React from 'react';

export interface ActivityItem {
  id?: string | number;
  time?: string;
  type?: string;
  html?: string;
  text?: string;
  [key: string]: unknown;
}

export interface ActivityStreamProps {
  items?: ActivityItem[];
  maxHeight?: number;
  paused?: boolean;
  onPauseToggle?: React.MouseEventHandler<HTMLButtonElement>;
  onViewAll?: React.MouseEventHandler<HTMLButtonElement>;
  onItemClick?: (item: ActivityItem) => void;
  className?: string;
}