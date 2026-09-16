import Icon from '@icons';
import type { ConnectionIndicatorProps, IconButtonProps, LiveTagProps } from './StatusIndicators.types';

export default function LiveTag({
  label = 'En direct',
  pulse = true,
  className = '',
}: LiveTagProps) {
  return (
    <span
      className={`livetag ${className}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '3px 10px 3px 6px',
        background: 'var(--dblue-soft)',
        color: 'var(--dblue)',
        borderRadius: 999,
        fontSize: 11.5,
        fontWeight: 600,
        letterSpacing: 0.2,
      }}
    >
      <span
        className="d"
        style={{
          width: 7, height: 7, borderRadius: 999,
          background: 'currentColor',
          animation: pulse ? 'livetag-pulse 1.5s ease-in-out infinite' : 'none',
        }}
      />
      {label}
      <style>{`@keyframes livetag-pulse {
        0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 currentColor; }
        50% { opacity: .6; transform: scale(1.15); box-shadow: 0 0 0 4px transparent; }
      }`}</style>
    </span>
  );
}

export function ConnectionIndicator({ state = 'up', label }: ConnectionIndicatorProps) {
  const t = state === 'up' ? 'ok' : state === 'warn' ? 'warn' : 'danger';
  const color =
    t === 'ok' ? 'var(--ok)' :
    t === 'warn' ? 'var(--warn)' :
    'var(--danger)';
  return (
    <span
      className="conn"
      data-state={state}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '3px 10px 3px 6px',
        background: `${color}1a`,
        color,
        borderRadius: 999,
        fontSize: 11.5,
        fontWeight: 600,
      }}
    >
      <span
        className="pulse"
        style={{
          width: 7, height: 7, borderRadius: 999,
          background: color,
          animation: 'conn-pulse 1.8s ease-in-out infinite',
        }}
      />
      {label ?? (state === 'up' ? 'Connecté' : state === 'warn' ? 'Instable' : 'Déconnecté')}
      <style>{`@keyframes conn-pulse {
        0%, 100% { opacity: 1; box-shadow: 0 0 0 0 ${color}aa; }
        50% { opacity: .5; box-shadow: 0 0 0 4px transparent; }
      }`}</style>
    </span>
  );
}

export function IconButton({
  icon,
  badge,
  onClick,
  label,
  variant = 'default',
  size = 'default',
  className = '',
  ...rest
}: IconButtonProps) {
  const sizeCls = size === 'sm' ? 32 : 38;
  const bg = variant === 'primary' ? 'var(--brand)' : 'var(--bg-3)';
  const color = variant === 'primary' ? '#fff' : 'var(--text)';
  const border = variant === 'primary' ? 'var(--brand)' : 'var(--line-2)';
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`iconbtn ${className}`}
      style={{
        position: 'relative',
        width: sizeCls, height: sizeCls,
        background: bg,
        color,
        border: `1px solid ${border}`,
        borderRadius: 10,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}
      {...rest}
    >
      {typeof icon === 'string' ? <Icon name={icon} size={size === 'sm' ? 15 : 17} className="" /> : icon}
      {badge != null && Number(badge) > 0 && (
        <span
          className="bell-dot"
          style={{
            position: 'absolute', top: -4, right: -4,
            minWidth: 18, height: 18, padding: '0 5px',
            background: 'var(--danger)', color: '#fff',
            fontSize: 10, fontWeight: 700,
            borderRadius: 999,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid var(--bg-1)',
          }}
        >
          {badge > 99 ? '99+' : badge}
        </span>
      )}
    </button>
  );
}
