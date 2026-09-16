import { useMemo, useRef, useState } from 'react';
import Icon from '@icons';
import { useDebounce } from '@hooks';
import type { GlobalSearchProps } from './GlobalSearch.types';

export default function GlobalSearch({
  placeholder = 'Rechercher appareils, zones, missions, observations…',
  sources = [],
  onSelect,
  className = '',
}: GlobalSearchProps) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const debounced = useDebounce(q, 160);

  const groups = useMemo(() => {
    const sq = debounced.trim().toLowerCase();
    if (!sq) return [];
    return sources
      .map(src => ({
        title: src.title,
        icon: src.icon,
        items: (src.items || []).filter(it => {
          const hay = `${it.title ?? ''} ${it.subtitle ?? ''} ${it.search ?? ''}`.toLowerCase();
          return hay.includes(sq);
        }).slice(0, src.max ?? 5),
      }))
      .filter(g => g.items.length > 0);
  }, [debounced, sources]);

  const total = groups.reduce((s, g) => s + g.items.length, 0);

  return (
    <div
      ref={wrapRef}
      className={`gsearch relative min-w-60 ${className}`}
      onBlurCapture={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget)) {
          setTimeout(() => setOpen(false), 100);
        }
      }}
    >
      <div className="flex items-center gap-2 rounded-[10px] border border-(--line-2) bg-(--bg-3) px-3 py-1.75">
        <Icon name="search" size={15} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="min-w-0 flex-1 border-0 bg-transparent text-[13px] text-(--text) outline-none"
        />
        {q && (
          <button
            type="button"
            onClick={() => { setQ(''); setOpen(false); }}
            className="cursor-pointer border-0 bg-transparent p-0.5 text-(--text-3)"
            aria-label="Effacer"
          >
            <Icon name="close" size={13} />
          </button>
        )}
      </div>
      {open && (
        <div className="gsearch-results absolute left-0 right-0 top-[calc(100%+6px)] z-20 max-h-95 overflow-y-auto overflow-hidden rounded-[10px] border border-(--line-1) bg-(--bg-1) shadow-[0_12px_32px_rgba(0,0,0,.28)]">
          {total === 0 && (
            <div className="p-6 text-center text-[12.5px] text-(--text-3)">
              Aucun résultat pour «&nbsp;<strong style={{ color: 'var(--text)' }}>{debounced}</strong>&nbsp;».
            </div>
          )}
          {groups.map((g, gi) => (
            <div key={gi} className={gi ? 'border-t border-(--line-1)' : ''}>
              <div className="flex items-center gap-1.5 bg-(--bg-2) px-3.5 py-2 text-[10.5px] font-bold uppercase tracking-[0.6px] text-(--text-3)">
                {g.icon && <Icon name={g.icon} size={12} />}
                {g.title}
                <span className="ml-auto rounded-full bg-(--bg-3) px-1.75 py-px">
                  {g.items.length}
                </span>
              </div>
              {g.items.map((it, i) => (
                <button
                  key={it.id ?? i}
                  type="button"
                  onClick={() => {
                    onSelect?.(it, g);
                    setOpen(false);
                  }}
                  className="flex w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent px-3.5 py-2.25 text-left text-inherit hover:bg-(--bg-2)"
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  {it.color && (
                    <span style={{
                      width: 8, height: 8, borderRadius: it.shape === 'square' ? 2 : it.shape === 'diamond' ? 1 : 999,
                      background: it.color, flexShrink: 0,
                      transform: it.shape === 'diamond' ? 'rotate(45deg)' : undefined,
                    }} />
                  )}
                  {it.icon && (
                    typeof it.icon === 'string'
                      ? <Icon name={it.icon} size={14} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                      : it.icon
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium">{it.title}</div>
                    {it.subtitle && (
                      <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 1 }}>
                        {it.subtitle}
                      </div>
                    )}
                  </div>
                  {it.meta && (
                    <div style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11, color: 'var(--text-3)', marginLeft: 8,
                    }}>
                      {it.meta}
                    </div>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
