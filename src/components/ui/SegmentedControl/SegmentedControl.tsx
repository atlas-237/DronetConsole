import React from 'react';
import type { SegmentedControlProps } from './SegmentedControl.types';

export default function SegmentedControl({
  items,
  value,
  onChange,
  className = '',
  style,
  ariaLabel = 'Sélecteur',
}: SegmentedControlProps) {
  return (
    <div
      className={`inline-flex gap-0.5 rounded-lg border border-(--line-1) bg-(--bg-2) p-0.5 ${className}`}
      style={style}
      role="group"
      aria-label={ariaLabel}
    >
      {items.map((item, index) => {
        const label = typeof item === 'string' ? item : item.label;
        const disabled = typeof item === 'string' ? false : Boolean(item.disabled);
        const active = index === value;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onChange?.(index)}
            disabled={disabled}
            aria-pressed={active}
            className="rounded-md border-0 px-2.5 py-1.5 text-xs font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--brand) disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              background: active ? 'var(--brand)' : 'transparent',
              color: active ? '#fff' : 'var(--text-2)',
              fontWeight: active ? 700 : 500,
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
