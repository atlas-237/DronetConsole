import type React from 'react';

export interface SegmentedItem {
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  items: Array<string | SegmentedItem>;
  value?: number;
  onChange?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}
