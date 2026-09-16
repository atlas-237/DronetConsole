import { useMemo } from 'react';
import type { SparklineProps } from './Sparkline.types';

export default function Sparkline({
  series = [],
  color = 'var(--brand)',
  width = 100,
  height = 26,
  className = '',
}: SparklineProps) {
  const { lineD, areaD } = useMemo(() => {
    if (!series || !series.length) return { lineD: '', areaD: '' };
    const min = Math.min(...series);
    const max = Math.max(...series);
    const span = (max - min) || 1;
    const pts = series.map((v, i) => [
      (i / ((series.length - 1) || 1)) * width,
      height - ((v - min) / span) * (height - 4) - 2,
    ]);
    const d = pts
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(2)} ${p[1].toFixed(2)}`)
      .join(' ');
    return {
      lineD: d,
      areaD: `${d} L${width} ${height} L0 ${height} Z`,
    };
  }, [series, width, height]);

  if (!series || !series.length) return null;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`spark ${className}`}
      style={{ display: 'block', width: '100%', height }}
    >
      <path d={areaD} fill={color} fillOpacity="0.14" />
      <path
        d={lineD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
