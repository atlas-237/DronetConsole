import { useState } from 'react';
import type React from 'react';
import Icon from '@icons';
import { Tabs, ListRow, KVGrid } from '@components/data';
import type { MapPanelProps } from './MapPanel.types';

export default function MapPanel({
  tabs = [],
  defaultTab = 0,
  width = 392,
  defaultOpen = true,
  onResize,
  className = '',
}: MapPanelProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [w, setW] = useState(width);
  const active = tabs[activeTab] || null;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startX = e.clientX;
    const startW = w;
    const onMove = (ev: MouseEvent) => {
      const nw = Math.max(240, Math.min(640, startW + (startX - ev.clientX)));
      setW(nw);
      latestWidth = nw;
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      onResize?.(latestWidth);
    };
    let latestWidth = startW;
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  return (
    <div
      className={`mpanel absolute bottom-0 right-0 top-0 z-5 flex flex-col overflow-hidden border-l border-(--line-1) bg-(--bg-1) transition-[width] duration-150 ${className}`}
      data-open={open ? 'true' : 'false'}
      style={{
        width: open ? w : 48,
        transition: 'width 160ms ease',
      }}
    >
      <div
        className="grip absolute bottom-0 left-0 top-0 z-2 w-1 cursor-col-resize"
        onMouseDown={handleMouseDown}
        title="Redimensionner"
      />
      <button
        type="button"
        aria-label={open ? 'Réduire' : 'Développer'}
        onClick={() => setOpen(v => !v)}
        className="absolute left-3 top-3 z-3 flex size-6 cursor-pointer items-center justify-center rounded-md border border-(--line-2) bg-(--bg-2) text-(--text-2)"
      >
        <Icon name="panel" size={13} className="" style={{ transform: open ? 'none' : 'scaleX(-1)' }} />
      </button>
      {open && (
        <>
          {tabs.length > 0 && (
            <div className="mt-12">
              <Tabs
                tabs={tabs.map(t => ({ label: t.label, count: t.count }))}
                defaultTab={activeTab}
                activeTab={activeTab}
                onTabChange={id => setActiveTab(Number(id))}
              />
            </div>
          )}
          <div className="cnt min-h-0 flex-1 overflow-y-auto p-3">
            {active?.type === 'list' && (
              <div className="flex flex-col gap-1">
                {active.items?.map((it, i) => (
                  <ListRow
                    key={it.id ?? i}
                    color={it.color}
                    title={it.title}
                    subtitle={it.subtitle}
                    right={it.right}
                    onClick={() => active.onItemClick?.(it)}
                  />
                ))}
              </div>
            )}
            {active?.type === 'detail' && (
              <KVGrid pairs={active.pairs || []} style={{}} />
            )}
            {active?.type === 'feed' && (
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {active.items?.map((f, i) => (
                  <li key={i} className="feed-item flex gap-2.5 border-b border-(--line-1) py-2">
                    <span className="feed-time min-w-12.5 font-mono text-[11px] text-(--text-3)">
                      {f.time}
                    </span>
                    <span className="feed-txt text-[12.5px] leading-[1.4]"
                      dangerouslySetInnerHTML={{ __html: String(f.text ?? f.html ?? '') }}
                    />
                  </li>
                ))}
              </ul>
            )}
            {active?.render && active.render()}
          </div>
        </>
      )}
    </div>
  );
}
