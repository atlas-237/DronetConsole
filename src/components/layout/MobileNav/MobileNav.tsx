import Icon from '@icons';
import type { MobileNavProps } from './MobileNav.types';

export default function MobileNav({ items = [], overflowItems, onOverflowClick, active, onChange, onMore }: MobileNavProps) {
  const showOverflow = (overflowItems && overflowItems.length > 0) || !!onMore;
  return <nav className="mobilenav fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-(--line-soft) bg-(--surface)" aria-label="Navigation principale">
    {items.map(item => {
      const Tag = item.href ? 'a' : 'button';
      const isActive = active != null ? active === item.id : !!item.active;
      return <Tag key={item.id} href={item.href || undefined} onClick={event => { if (item.href) return; event.preventDefault(); if (onChange) onChange(item.id, item); else item.onClick?.(item); }} {...(isActive ? { 'aria-current': 'page' as const } : {})} type={Tag === 'button' ? 'button' : undefined} className="relative flex flex-1 flex-col items-center justify-center gap-0.5 border-0 bg-transparent py-2 text-[10px] text-(--text-3)" style={isActive ? { color: 'var(--brand)' } : undefined}>
        <div className="relative"><Icon name={item.icon} size={18} />{item.badge != null && <span className="absolute -right-2 -top-1 flex size-3.5 min-w-3.5 items-center justify-center rounded-full bg-(--danger) px-0.75 text-[9px] font-bold text-white">{item.badge > 99 ? '99+' : item.badge}</span>}</div><span>{item.label}</span>
      </Tag>;
    })}
    {showOverflow && <button type="button" className="flex flex-1 flex-col items-center justify-center gap-0.5 border-0 bg-transparent py-2 text-[10px] text-(--text-3)" onClick={() => { if (onMore) onMore(); else onOverflowClick?.(); }}><Icon name="grid" size={18} /><span>Plus</span></button>}
  </nav>;
}
