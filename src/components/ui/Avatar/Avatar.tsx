import React from 'react';

import type {
  AvatarProps,
  AvatarWithInfoProps,
} from './Avatar.types';

function initialsOf(name?: string): string {
  if (!name) return '?';

  const parts = String(name)
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) return '?';

  if (parts.length === 1) {
    return parts[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return (
    parts[0][0] +
    parts[parts.length - 1][0]
  ).toUpperCase();
}

const avatarPalette = [
  'var(--brand)',
  'var(--dblue)',
  'var(--ok)',
  'var(--warn)',
  'var(--cls-drone)',
  'var(--cls-ground)',
  '#7c5cff',
  '#ff5c8a',
];

function pickColor(seed?: string): string {
  if (!seed) return avatarPalette[0];

  let h = 0;

  for (let i = 0; i < seed.length; i++) {
    h =
      (h * 31 + seed.charCodeAt(i)) >>>
      0;
  }

  return avatarPalette[
    h % avatarPalette.length
  ];
}

function Avatar({
  name,
  size = 32,
  src,
  color,
  style,
  className = '',
  onClick,
}: AvatarProps) {
  const bg =
    color || (src ? undefined : pickColor(name));

  const letterSize = Math.round(size * 0.42);

  return (
    <div
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-label={name || 'Avatar'}
      className={`avatar inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-bold text-white ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      style={{
        width: size,
        height: size,
        background: src ? undefined : bg,
        fontSize: letterSize,
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={name || ''}
          className="size-full object-cover"
        />
      ) : (
        <span>{initialsOf(name)}</span>
      )}
    </div>
  );
}

export default Avatar;

export function AvatarWithInfo({
  name,
  role,
  avatarSize = 30,
  showRole = true,
  onClick,
  avatarProps,
  style,
  className = '',
}: AvatarWithInfoProps) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`avatar-info inline-flex items-center gap-2 rounded-full border px-0.5 py-0.5 pr-2.5 ${onClick ? 'cursor-pointer' : 'cursor-default'} ${className}`}
      style={{
        background: 'var(--bg-3)',
        borderColor: 'var(--line-2)',
        ...style,
      }}
    >
      <Avatar
        name={name}
        size={avatarSize}
        {...avatarProps}
      />

      {showRole && (
        <div style={{ lineHeight: 1.1 }}>
          <div className="text-[12.5px] font-semibold">
            {name}
          </div>

          {role && (
            <div className="text-[10.5px] text-(--text-3)">
              {role}
            </div>
          )}
        </div>
      )}
    </div>
  );
}