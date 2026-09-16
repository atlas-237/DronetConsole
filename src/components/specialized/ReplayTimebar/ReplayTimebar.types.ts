import type { CSSProperties, ReactNode } from 'react';

export type ReplayMode = 'live' | 'replay';

export interface ReplaySegment {
  id: string;
  label: string;
}

export interface ReplayTimebarProps {
  mode?: ReplayMode;
  value?: number;
  min?: number;
  max?: number;
  nowLabel?: ReactNode;
  segments?: ReplaySegment[];
  selectedSegment?: string;
  onModeChange?: (mode: ReplayMode) => void;
  onChange?: (value: number) => void;
  onSegmentChange?: (id: string) => void;
  className?: string;
  style?: CSSProperties;
}
