import { fmt } from '@utils';
import type { ZoneCapacityProps } from './ZoneCapacity.types';

export default function ZoneCapacity({
  used = 0,
  max = 10,
  warnAt = 0.8,
  dangerAt = 1,
  className = '',
}: ZoneCapacityProps) {
  const ratio = Math.min(1, used / (max || 1));
  const tone = ratio >= dangerAt ? 'danger' : ratio >= warnAt ? 'warn' : 'ok';
  const color =
    tone === 'danger' ? 'var(--danger)' :
    tone === 'warn' ? 'var(--warn)' :
    'var(--dblue)';
  return (
    <div className={`zonecap rounded-[10px] border p-3 ${className}`} style={{ borderColor: tone === 'warn' ? 'var(--warn-soft)' : 'var(--line-1)', background: tone === 'warn' ? 'var(--warn-soft)22' : 'var(--bg-2)' }}>
      <div className="mb-2 flex items-center justify-between text-[12.5px]">
        <span className="text-(--text-2)">Capacité zones</span>
        <span className="font-mono font-bold" style={{ color }}>
          {fmt(used)} / {fmt(max)}
        </span>
      </div>
      <div className="bar h-2 overflow-hidden rounded-full bg-(--line-2)">
        <div className="full h-full transition-[width] duration-200" style={{ width: `${ratio * 100}%`, background: color }} />
      </div>
    </div>
  );
}
