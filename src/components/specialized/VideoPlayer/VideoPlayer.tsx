import { useEffect, useMemo, useRef, useState } from 'react';
import type React from 'react';
import VideoFrame from '../VideoFrame/VideoFrame';
import Icon from '@icons';
import { clockHMS } from '@utils';
import type { TelemetryFieldProps, VideoPlayerProps } from './VideoPlayer.types';

export default function VideoPlayer({
  track = [],
  assetName = '',
  autoPlay = false,
  onTick,
  className = '',
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(autoPlay && track.length > 1);
  const [idx, setIdx] = useState(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  const frame = track[idx] || { alt: 40, dist: 0, t: 0, heading: 0, batt: 80, speed: 0 };
  const totalSec = track.length ? (track[track.length - 1].t || 0) : 0;
  const currentSec = frame.t || 0;

  useEffect(() => {
    if (!playing || track.length < 2) return undefined;
    const fps30 = 1000 / 30;
    let cancelled = false;
    const step = (ts: number) => {
      if (cancelled) return;
      if (!lastTsRef.current) lastTsRef.current = ts;
      const delta = ts - lastTsRef.current;
      if (delta >= fps30) {
        lastTsRef.current = ts;
        setIdx(prev => {
          const next = prev + 1;
          if (next >= track.length) {
            setPlaying(false);
            return track.length - 1;
          }
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelled = true;
      cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [playing, track]);

  useEffect(() => {
    onTick?.(frame, idx);
  }, [frame, idx, onTick]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ratio = Number(e.target.value) / 100;
    setIdx(Math.max(0, Math.min(track.length - 1, Math.floor(ratio * (track.length - 1)))));
  };

  const handleTogglePlay = () => {
    if (idx >= track.length - 1) setIdx(0);
    setPlaying(p => !p);
  };

  const progressPct = totalSec ? (currentSec / totalSec) * 100 : 0;
  const seekPct = track.length > 1 ? (idx / (track.length - 1)) * 100 : 0;

  return (
    <div className={`videobar rounded-xl border border-(--line-1) bg-(--bg-2) p-3 ${className}`}>
      <div className="vb-stage flex gap-3.5">
        <div className="vb-side relative basis-75 shrink-0">
          <VideoFrame {...frame} />
          {assetName && (
            <div className="vb-tc absolute right-3.5 top-2.5 rounded bg-black/60 px-2 py-0.75 font-mono text-[11px] text-white">
              {assetName}
            </div>
          )}
          <span className="vb-rec absolute left-3.5 top-2.5 flex items-center gap-1.5 rounded bg-black/60 px-2 py-0.75 font-mono text-[11px] text-white">
            <span className="size-1.75 rounded-full bg-[#e04b4b]" style={{ animation: 'vb-blink 1.2s steps(1) infinite' }} />
            REC
          </span>
        </div>
        <div className="vb-side flex min-w-0 flex-1 flex-col gap-2.5">
          <div className="vb-ctrl flex items-center gap-3">
            <button
              type="button"
              onClick={handleTogglePlay}
              className="vb-play flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--line-2) bg-(--bg-3) text-(--text)"
              aria-label={playing ? 'Pause' : 'Lecture'}
            >
              {playing ? (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" />
                  <rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M7 5v14l12-7z" />
                </svg>
              )}
            </button>
            <div className="min-w-0 flex-1">
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={seekPct}
                onChange={handleSeek}
                className="w-full"
              />
              <div className="vb-prog mt-1.5 h-0.75 overflow-hidden rounded-full bg-(--line-1)">
                <div className="f h-full bg-(--brand)" style={{ width: `${progressPct}%` }} />
              </div>
            </div>
            <div className="vb-clock min-w-27.5 text-right font-mono text-xs text-(--text-3)">
              {clockHMS(currentSec)} / {clockHMS(totalSec)}
            </div>
          </div>
          <div className="vb-fields grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2.5">
            <TelemetryField label="Vitesse" value={`${frame.speed?.toFixed(1) ?? '0.0'} m/s`} />
            <TelemetryField label="Altitude" value={`${frame.alt ?? 0} m`} />
            <TelemetryField label="Cap" value={`${frame.heading ?? 0}°`} />
            <TelemetryField label="Distance" value={`${(frame.dist ?? 0) < 1000 ? `${Math.round(frame.dist ?? 0)} m` : `${((frame.dist ?? 0) / 1000).toFixed(2).replace('.', ',')} km`}`} />
            <TelemetryField label="Batterie" value={`${frame.batt ?? 0} %`} tone={
              (frame.batt ?? 100) <= 20 ? 'danger' :
              (frame.batt ?? 100) <= 40 ? 'warn' : 'ok'
            } />
          </div>
        </div>
      </div>
      <style>{`@keyframes vb-blink { 50% { opacity: 0.25; } }`}</style>
    </div>
  );
}

function TelemetryField({ label, value, tone }: TelemetryFieldProps) {
  const color =
    tone === 'danger' ? 'var(--danger)' :
    tone === 'warn' ? 'var(--warn)' :
    tone === 'ok' ? 'var(--ok)' : 'var(--text)';
  return (
    <div className="rounded-lg border border-(--line-1) bg-(--bg-3) px-2.5 py-2">
      <div className="text-[10.5px] uppercase tracking-[0.5px] text-(--text-3)">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-[17px] font-semibold" style={{ color }}>
        {value}
      </div>
    </div>
  );
}
