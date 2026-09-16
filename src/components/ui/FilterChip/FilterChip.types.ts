import type React from 'react';

export type FilterChipShape = 'circle' | 'square' | 'diamond';

export interface FilterChipProps {
  label: string;
  color?: string;
  shape?: FilterChipShape;
  active?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

export interface FilterChipItem extends Omit<FilterChipProps, 'active'> {
  id?: string | number;
  active?: boolean;
}

export interface FilterChipGroupProps {
  items?: FilterChipItem[];
  activeItems?: Array<string | number>;
  onChange?: (key: string | number, active: boolean, item: FilterChipItem) => void;
  gap?: number;
  style?: React.CSSProperties;
  className?: string;
}
