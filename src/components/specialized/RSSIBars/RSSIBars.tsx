import { fmt } from '@utils';
import type { RSSIBarsProps } from './RSSIBars.types';

export default function RSSIBars({
  distribution = { near: 0, mid: 0, far: 0, weak: 0 },
  total,
  className = '',
}: RSSIBarsProps) {
  const keys: Array<{ k: keyof typeof distribution; label: string; var: string }> = [
    { k: 'near', label: 'Proche (<-55 dBm)', var: 'rssi4' },
    { k: 'mid', label: 'Moyen (-55 à -70 dBm)', var: 'rssi3' },
    { k: 'far', label: 'Lointain (-70 à -85 dBm)', var: 'rssi2' },
    { k: 'weak', label: 'Faible (>-85 dBm)', var: 'rssi1' },
  ];
  const t = total ?? (keys.reduce((s, { k }) => s + (distribution[k] || 0), 0) || 1);
  return (
    <div className={`rssi flex h-full flex-col justify-evenly gap-1.5 py-0.5 ${className}`}>
      {keys.map(({ k, label, var: cv }) => {
        const v = distribution[k] || 0;
        return (
          <div className="rssi-row grid grid-cols-[1fr_220px_46px] items-center gap-3" key={k}>
            <div className="rssi-track h-1.75 overflow-hidden rounded bg-(--surface-3)">
              <div
                className="rssi-fill"
                style={{
                  width: `${(v / t) * 100}%`,
                  background: `var(${cv})`,
                }}
              />
            </div>
            <div className="rssi-label min-w-55 text-xs text-(--text-2)">{label}</div>
            <div className="rssi-val text-right text-sm font-semibold tabular-nums">
              <strong style={{ fontFamily: 'var(--mono)' }}>{fmt(v)}</strong>
              <span className="ml-1.5 opacity-60">
                {Math.round((v / t) * 100)} %
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
