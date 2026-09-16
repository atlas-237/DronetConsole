import { useMemo } from 'react';
import { fmt } from '@utils';
import type { GalleryCardProps, GalleryItem, GalleryProps } from './Gallery.types';

export default function Gallery({
  items = [],
  size = 'default',
  onClick,
  className = '',
}: GalleryProps) {
  const cls = size === 'mini'
    ? 'gal-mini grid grid-cols-[repeat(auto-fill,minmax(76px,1fr))] gap-2'
    : 'gal grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-3 p-3.5';
  return (
    <div className={`${cls} ${className}`}>
      {items.map((it, i) => (
        <GalleryCard key={it.id ?? i} item={it} size={size} onClick={onClick} />
      ))}
    </div>
  );
}

function GalleryCard({ item, size = 'default', onClick }: GalleryCardProps) {
  const thumb = useMemo(() => artifactThumb(item), [item]);
  if (size === 'mini') {
    return (
      <div
        className={`gcard overflow-hidden rounded-(--r-md) border border-(--line) bg-(--surface-2) text-left text-(--text) transition-transform ${onClick ? 'cursor-pointer hover:-translate-y-0.5 hover:border-(--brand)' : 'cursor-default'}`}
        onClick={() => onClick?.(item)}
      >
        <div
          className="im min-h-19 overflow-hidden rounded-md"
          dangerouslySetInnerHTML={{ __html: thumb }}
        />
      </div>
    );
  }
  return (
    <div
      className={`gcard overflow-hidden rounded-(--r-md) border border-(--line) bg-(--surface-2) text-left text-(--text) transition-transform ${onClick ? 'cursor-pointer hover:-translate-y-0.5 hover:border-(--brand)' : 'cursor-default'}`}
      onClick={() => onClick?.(item)}
    >
      <div
        className="im relative aspect-4/3 overflow-hidden rounded-lg"
        dangerouslySetInnerHTML={{ __html: thumb }}
      >
        {item.time && (
          <div className="tag absolute left-2 top-2 rounded-full bg-black/55 px-2 py-0.5 font-mono text-[11px] text-white">
            {item.time}
          </div>
        )}
      </div>
      <div className="inf px-1 py-2">
        <div className="a text-[13px] font-semibold">{item.title || item.asset || `Artefact #${(item.id ?? '')}`}</div>
        {item.subtitle && (
          <div className="b mt-0.5 text-[11px] opacity-65">{item.subtitle}</div>
        )}
      </div>
    </div>
  );
}

export function artifactThumb(item: GalleryItem = {}) {
  const W = 320, H = 240;
  const seed = (item.id ?? 'art') + (item.time ?? '');
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
  const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const isNight = rnd() > 0.6;
  const sky = isNight ? ['#0a1426', '#162842'] : ['#4e74a0', '#a6c0d8'];
  const ground = isNight ? '#0d1a12' : '#3e4f2a';
  let bld = '';
  for (let i = 0; i < 11; i++) {
    const x = 8 + i * 28 + rnd() * 10;
    const bw = 16 + rnd() * 18;
    const bh = 30 + rnd() * 90;
    bld += `<rect x="${x.toFixed(0)}" y="${(H - bh - 40).toFixed(0)}" width="${bw.toFixed(0)}" height="${bh.toFixed(0)}" fill="#000" opacity="${(0.3 + rnd() * 0.35).toFixed(2)}"/>`;
    if (isNight) {
      for (let j = 0; j < 3; j++) {
        if (rnd() > 0.5) {
          bld += `<rect x="${(x + 3 + j * 5).toFixed(0)}" y="${(H - bh - 30 + j * 12).toFixed(0)}" width="3" height="3" fill="#f0c869" opacity=".85"/>`;
        }
      }
    }
  }
  const lat = item.lat != null ? item.lat.toFixed(4) : '';
  const lng = item.lng != null ? item.lng.toFixed(4) : '';
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sky[0]}"/>
        <stop offset="1" stop-color="${sky[1]}"/>
      </linearGradient>
      <radialGradient id="v" cx="50%" cy="50%" r="80%">
        <stop offset="0.6" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#000" stop-opacity=".6"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    <rect y="${H - 40}" width="${W}" height="40" fill="${ground}"/>
    ${bld}
    <rect width="${W}" height="${H}" fill="url(#v)"/>
    ${lat || lng ? `<g font-family="var(--mono)" font-size="10" fill="#fff" fill-opacity=".9">
      <rect x="8" y="${H - 24}" width="${Math.max(140, (lat.length + lng.length + 4) * 6 + 28)}" height="18" rx="3" fill="rgba(0,0,0,0.55)"/>
      <text x="16" y="${H - 11}">${lat}°, ${lng}°</text>
    </g>` : ''}
    <rect x="${W - 14}" y="6" width="6" height="6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
    <rect x="8" y="6" width="6" height="6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
    <rect x="8" y="${H - 12}" width="6" height="6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
    <rect x="${W - 14}" y="${H - 12}" width="6" height="6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1"/>
  </svg>`;
}
