import type React from 'react';
import type { SkeletonProps } from './Skeleton.types';

export default function Skeleton({ width, height, className = '', style, type }: SkeletonProps) {
  const inlineStyle = { ...style } as React.CSSProperties;
  if (type === 'row') { if (width === undefined) inlineStyle.width = '100%'; if (height === undefined) inlineStyle.height = 24; }
  if (width !== undefined) inlineStyle.width = typeof width === 'number' ? `${width}px` : width;
  if (height !== undefined) inlineStyle.height = typeof height === 'number' ? `${height}px` : height;
  return <div className={`skel ${className}`.trim()} style={inlineStyle} />;
}
