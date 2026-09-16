import React from 'react';
import type { FilterChipGroupProps, FilterChipProps } from './FilterChip.types';

export default function FilterChip({
  label,
  color = 'var(--brand)',
  shape = 'square',
  active = true,
  onClick,
  style,
  className = '',
}: FilterChipProps) {
  const dotRadius = shape === 'circle' ? '999px' : shape === 'square' ? '2px' : '1px';
  const dotTransform = shape === 'diamond' ? 'rotate(45deg)' : undefined;

  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(event) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onClick();
        }
      }}
      className={`inline-flex select-none items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-semibold transition-colors ${className}`}
      style={{
        background: active ? `${color}22` : 'var(--bg-3)',
        color: active ? color : 'var(--text-3)',
        borderColor: active ? `${color}44` : 'var(--line-2)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      <span className="size-1.5 shrink-0" style={{ borderRadius: dotRadius, transform: dotTransform, background: color }} />
      {label}
    </span>
  );
}

export function FilterChipGroup({
  items = [],
  activeItems,
  onChange,
  gap = 6,
  style,
  className = '',
}: FilterChipGroupProps) {
  return (
    <div className={`inline-flex flex-wrap ${className}`} style={{ gap, ...style }}>
      {items.map((item, index) => {
        const key = item.id ?? item.label ?? index;
        const active = activeItems ? activeItems.includes(key) : item.active ?? true;
        return (
          <FilterChip
            key={key}
            {...item}
            active={active}
            onClick={onChange ? () => onChange(key, !active, item) : item.onClick}
          />
        );
      })}
    </div>
  );
}
