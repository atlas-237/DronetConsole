import { useId } from 'react';
import type { DroneIconProps } from './DroneIcon.types';

export default function DroneIcon({ size = 42, color = 'var(--drone-color, var(--cls-drone))', heading = 0, active = true, className = '', style, ...props }: DroneIconProps) {
  const opacity = active ? 1 : 0.42;
  const id = useId().replace(/:/g, '');
  return <svg viewBox="0 0 64 64" width={size} height={size} fill="none" role="img" aria-label="Drone" className={className} style={{ color, opacity, transform: `rotate(${heading}deg)`, ...style }} {...props}>
    <defs>
      <linearGradient id={`${id}-body`} x1="0.15" y1="0" x2="0.85" y2="1">
        <stop offset="0" stopColor="#59626b" />
        <stop offset="0.5" stopColor="#333a41" />
        <stop offset="1" stopColor="#1b2126" />
      </linearGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="1.6" stdDeviation="1.9" floodColor="#000" floodOpacity=".7" />
      </filter>
    </defs>
    <g filter={`url(#${id}-shadow)`} strokeLinecap="round" strokeLinejoin="round">
      <g stroke="#0b0d0f" strokeWidth="5" strokeOpacity=".45">
        <path d="M23 22 14 14M41 22l9-8M23 42l-9 8M41 42l9 8" />
        <circle cx="12" cy="12" r="5" /><circle cx="52" cy="12" r="5" /><circle cx="12" cy="52" r="5" /><circle cx="52" cy="52" r="5" />
      </g>
      <g stroke="#e6ebef" strokeWidth="1.5" strokeOpacity=".72">
        <path d="M23 22 14 14M41 22l9-8M23 42l-9 8M41 42l9 8" />
        <circle cx="12" cy="12" r="5" /><circle cx="52" cy="12" r="5" /><circle cx="12" cy="52" r="5" /><circle cx="52" cy="52" r="5" />
      </g>
      <path d="M18 25 27 18h10l9 7-5 17-9 6-9-6-5-17Z" fill={`url(#${id}-body)`} stroke="#e6ebef" strokeWidth="1.5" strokeOpacity=".72" />
      <path d="M25 25h14l3 12-10 7-10-7 3-12Z" fill="#0e1216" fillOpacity=".72" />
      <path d="M28 25h8l-4 5-4-5Z" fill="#fff" fillOpacity=".13" />
      <circle cx="32" cy="32" r="3.5" fill="#0e1216" stroke="#e6ebef" strokeWidth="1.1" strokeOpacity=".7" />
      <circle cx="32" cy="32" r="1.4" fill="#33404a" />
      <circle cx="23" cy="46" r="1.4" fill="#ef4444" />
      <circle cx="41" cy="46" r="1.4" fill="#ef4444" />
      <path d="M32 8 35.8 13h-7.6L32 8Z" fill="currentColor" stroke="#0b0d0f" strokeWidth="1" />
      <rect x="25" y="45" width="14" height="2.8" rx="1.4" fill="currentColor" fillOpacity=".9" />
    </g>
  </svg>;
}
