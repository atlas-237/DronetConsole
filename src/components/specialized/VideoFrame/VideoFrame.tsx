import { useMemo } from 'react';
import type { VideoFrameProps } from './VideoFrame.types';

export default function VideoFrame({
  alt = 40,
  dist = 0,
  t = 0,
  heading = 0,
  batt = 80,
  className = '',
}: VideoFrameProps) {
  const { svg, meta } = useMemo(() => {
    const W = 320, H = 180;
    const night = (t % 600) > 420;
    const horizon = Math.max(34, Math.min(96, 104 - alt * 0.32));
    const sky = night ? ['#0a1420', '#132436'] : ['#43617f', '#8fa6b8'];
    const soil = night ? '#0e1a14' : '#43512f';
    let g = '';
    const off = (dist / 6) % 60;
    for (let i = 0; i < 9; i++) {
      const x = (((i * 60 - off) + 60) % 380) - 30;
      const persp = 0.5 + (i % 3) * 0.25;
      const bh = 16 + ((i * 37) % 34) * persp;
      const bw = 20 + ((i * 23) % 22);
      g += `<rect x="${x.toFixed(1)}" y="${(H - bh - ((i % 4) * 9)).toFixed(1)}" width="${bw}" height="${bh}" fill="#000" opacity="${(0.24 + (i % 3) * 0.09).toFixed(2)}"/>`;
      if (night && i % 2 === 0) {
        g += `<rect x="${(x + bw * 0.35).toFixed(1)}" y="${(H - bh - ((i % 4) * 9) + 4).toFixed(1)}" width="2.4" height="2.4" fill="#f0c869" opacity=".75"/>`;
      }
    }
    let roads = '';
    for (let i = 0; i < 4; i++) {
      const x0 = 40 + i * 80 - off * 0.6;
      roads += `<path d="M${x0.toFixed(1)} ${H} L${(160 + (x0 - 160) * 0.18).toFixed(1)} ${horizon + 6}" stroke="#000" stroke-opacity=".22" stroke-width="${(9 - i).toFixed(0)}" fill="none"/>`;
    }
    const battColor = batt <= 20 ? '#e04b4b' : batt <= 40 ? '#e69837' : '#37c48a';
    return {
      svg: `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/>
          </linearGradient>
          <radialGradient id="vig" cx="50%" cy="50%" r="72%">
            <stop offset=".55" stop-color="#000" stop-opacity="0"/>
            <stop offset="1" stop-color="#000" stop-opacity=".55"/>
          </radialGradient>
        </defs>
        <rect width="${W}" height="${horizon}" fill="url(#vsky)"/>
        <rect y="${horizon}" width="${W}" height="${H - horizon}" fill="${soil}"/>
        ${roads}${g}
        <rect width="${W}" height="${H}" fill="url(#vig)"/>
        <g stroke="#f2f5f7" stroke-opacity=".62" stroke-width="1.1" fill="none">
          <path d="M152 90 h-11 M168 90 h11 M160 82 v-11 M160 98 v11"/>
          <path d="M14 14 h13 M14 14 v13 M306 14 h-13 M306 14 v13 M14 166 h13 M14 166 v-13 M306 166 h-13 M306 166 v-13"/>
        </g>
        <circle cx="160" cy="90" r="2" fill="none" stroke="#f2f5f7" stroke-opacity=".62"/>
        <g stroke="#2fd6ae" stroke-opacity=".55" stroke-width="1">
          <line x1="0" y1="${horizon}" x2="${W}" y2="${horizon}"/>
          <line x1="0" y1="${horizon - 16}" x2="${W}" y2="${horizon - 16}" stroke-opacity=".28"/>
          <line x1="0" y1="${horizon + 18}" x2="${W}" y2="${horizon + 18}" stroke-opacity=".28"/>
        </g>
        <g font-family="var(--mono)" font-size="9" fill="#2fd6ae" fill-opacity=".85">
          <text x="10" y="14">ALT ${alt.toFixed(0)}m  VIT 0.0m/s</text>
          <text x="${W - 118}" y="14" text-anchor="end">CAP ${Math.round(heading).toString().padStart(3, '0')}°</text>
          <text x="${W - 10}" y="${H - 8}" text-anchor="end">BAT ${batt}%</text>
        </g>
        <rect x="10" y="${H - 14}" width="60" height="6" fill="none" stroke="${battColor}" stroke-opacity=".9"/>
        <rect x="11" y="${H - 13}" width="${Math.max(0, Math.min(58, 58 * batt / 100))}" height="4" fill="${battColor}" fill-opacity=".85"/>
      </svg>`,
      meta: { horizon, night }
    };
  }, [alt, dist, t, heading, batt]);

  return (
    <div
      className={`vb-screen relative aspect-video overflow-hidden rounded-lg bg-black ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
