import { useMemo } from 'react';
import type { TimelineDensityProps } from './TimelineDensity.types';

export default function TimelineDensity({
  columns = 72,
  data = [],
  cursorIndex = null,
  highlightNow = true,
  className = '',
  onCursorChange,
}: TimelineDensityProps) {
  const bars = useMemo(() => {
    const result = new Array(columns).fill(null).map(() => ({
      obs: 0, zone: 0, capture: 0, alert: 0, total: 0,
    }));
    (data || []).forEach(item => {
      const idx = Math.max(0, Math.min(columns - 1, item.colIdx ?? 0));
      if (item.type === 'obs' || item.type === 'radio.wifi' || item.type === 'radio.bluetooth' || item.type === 'asset.telemetry') {
        result[idx].obs += (item.value || 1);
      } else if (item.type === 'zone') {
        result[idx].zone += (item.value || 1);
      } else if (item.type === 'capture' || item.type === 'camera.capture') {
        result[idx].capture += (item.value || 1);
      } else if (item.type === 'alert') {
        result[idx].alert += (item.value || 1);
      }
      result[idx].total += (item.value || 1);
    });
    const max = Math.max(1, ...result.map(r => r.total));
    return result.map(r => ({
      ...r,
      obsH: (r.obs / max) * 100,
      zoneH: (r.zone / max) * 100,
      captureH: (r.capture / max) * 100,
      alertH: (r.alert / max) * 100,
    }));
  }, [data, columns]);

  return (
    <div className={`tl-track ${className}`}>
      {bars.map((b, i) => (
        <div
          className="tl-col"
          key={i}
          style={{ cursor: onCursorChange ? 'pointer' : 'default' }}
          onClick={() => onCursorChange?.(i)}
        >
          <div
            className="seg alert"
            style={{ height: `${b.alertH}%`, background: 'var(--danger-soft)' }}
          />
          <div
            className="seg capture"
            style={{ height: `${b.captureH}%`, background: 'var(--brand-soft)' }}
          />
          <div
            className="seg zone"
            style={{ height: `${b.zoneH}%`, background: 'var(--dblue-soft)' }}
          />
          <div
            className="seg obs"
            style={{ height: `${b.obsH}%`, background: 'var(--dblue)' }}
          />
        </div>
      ))}
      {cursorIndex != null && (
        <div
          className="tl-cursor"
          style={{ left: `${(cursorIndex / Math.max(1, columns - 1)) * 100}%` }}
        />
      )}
      {highlightNow && (
        <div className="tl-now" style={{ left: '97%' }} />
      )}
    </div>
  );
}
