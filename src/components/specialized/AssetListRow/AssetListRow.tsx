import { fmt } from '@utils';
import Icon from '@icons';
import DroneIcon from '../DroneIcon/DroneIcon';
import type { AssetListRowProps } from './AssetListRow.types';

export default function AssetListRow({
  asset,
  color,
  icon,
  onClick,
  className = '',
}: AssetListRowProps) {
  const batt = asset.battery ?? 0;
  const battColor = batt <= 20 ? 'var(--danger)' : batt <= 40 ? 'var(--warn)' : 'var(--ok)';
  return (
    <div
      onClick={() => onClick?.(asset)}
      className={`arow flex items-center gap-3 rounded-lg border border-(--line) bg-(--surface-3) px-2.5 py-2 transition-colors ${onClick ? 'cursor-pointer hover:border-(--brand) hover:bg-(--surface-2)' : 'cursor-default'} ${className}`}
    >
      <div className="ic flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ background: `${color ?? 'var(--dblue)'}18`, color: color ?? 'var(--dblue)' }}>
        {icon ?? (asset.asset_type === 'drone' ? <DroneIcon size={25} heading={Number(asset.heading ?? 0)} active={(asset.state ?? 'active') === 'active'} /> : <Icon name="asset" size={16} />)}
      </div>
      <div className="bt min-w-0 flex-1">
        <div className="truncate text-[13px] font-semibold">
          {asset.name || asset.id}
        </div>
        <div className="text-[11px] text-(--text-3)">
          {asset.manufacturer ? `${asset.manufacturer} ${asset.model ?? ''}`.trim() : asset.asset_type}
          {asset.last ? ` · ${asset.last}` : ''}
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-(--line)">
          <div className="h-full" style={{ width: `${Math.max(0, Math.min(100, batt))}%`, background: battColor }} />
        </div>
        <div className="pct mono min-w-10 text-right text-xs font-semibold" style={{ color: battColor }}>
          {fmt(batt)}%
        </div>
      </div>
    </div>
  );
}
