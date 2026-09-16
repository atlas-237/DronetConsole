import type React from 'react';
import type { ReplayTimebarProps } from './ReplayTimebar.types';

export default function ReplayTimebar({
  mode = 'live',
  value = 0,
  min = 0,
  max = 100,
  nowLabel = 'Maintenant',
  segments = [],
  selectedSegment,
  onModeChange,
  onChange,
  onSegmentChange,
  className = '',
  style,
}: ReplayTimebarProps) {
  const boundedValue = Math.min(max, Math.max(min, value));
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(event.target.value));
  };

  return (
    <div className={`timebar ${className}`.trim()} data-mode={mode} style={style}>
      <div className="tb-range">
        <input
          type="range"
          min={min}
          max={max}
          value={boundedValue}
          onChange={handleRangeChange}
          aria-label="Position dans la relecture"
        />
        <span className="now">{nowLabel}</span>
      </div>
      {segments.length > 0 && (
        <div className="seg" role="group" aria-label="Mode de relecture">
          {segments.map(segment => (
            <button
              key={segment.id}
              type="button"
              aria-pressed={selectedSegment === segment.id}
              onClick={() => onSegmentChange?.(segment.id)}
            >
              {segment.label}
            </button>
          ))}
        </div>
      )}
      <div className="seg" role="group" aria-label="Temps">
        <button type="button" aria-pressed={mode === 'live'} onClick={() => onModeChange?.('live')}>
          Direct
        </button>
        <button type="button" aria-pressed={mode === 'replay'} onClick={() => onModeChange?.('replay')}>
          Replay
        </button>
      </div>
    </div>
  );
}
