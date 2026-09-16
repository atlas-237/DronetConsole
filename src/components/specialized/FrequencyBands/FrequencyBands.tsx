import { fmt } from '@utils';
import type { FrequencyBandsProps } from './FrequencyBands.types';

export default function FrequencyBands({
  bands = { b24: 0, b5: 0, b6: 0, other: 0 },
  className = '',
}: FrequencyBandsProps) {
  const rows: Array<{ k: keyof typeof bands; label: string; var: string }> = [
    { k: 'b24', label: '2.4 GHz', var: 'rssi3' },
    { k: 'b5', label: '5 GHz', var: 'rssi4' },
    { k: 'b6', label: '6 GHz', var: 'brand' },
    { k: 'other', label: 'Hors bandes', var: 'n400' },
  ];
  const total = Object.values(bands).reduce((a, b) => a + (b || 0), 0) || 1;
  return (
    <div className={`bands flex h-full flex-col justify-evenly gap-2.75 py-0.5 ${className}`}>
      {rows.map(({ k, label, var: cv }) => {
        const v = bands[k] || 0;
        return (
          <div className="band-row flex items-center gap-3.5 py-1.5" key={k}>
            <div className="t min-w-25 text-xs text-(--text-2)">{label}</div>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-(--bg-3)">
              <div className="f" style={{
                width: `${(v / total) * 100}%`,
                height: '100%',
                background: cv.startsWith('--') ? `var(${cv})` : (
                  cv === 'rssi3' ? 'var(--rssi3)' :
                  cv === 'rssi4' ? 'var(--rssi4)' :
                  cv === 'brand' ? 'var(--brand)' :
                  'var(--n400)'
                ),
              }} />
            </div>
            <div className="min-w-18 text-right font-mono text-xs font-semibold">
              {fmt(v)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
