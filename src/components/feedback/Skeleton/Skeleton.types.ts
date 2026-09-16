import type React from 'react';

export type SkeletonDimension = string | number;
export interface SkeletonProps {
  width?: SkeletonDimension;
  height?: SkeletonDimension;
  className?: string;
  style?: React.CSSProperties;
  type?: string;
}
