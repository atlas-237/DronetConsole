import { useEffect, useRef, useState } from 'react';
import { Button } from '@components/ui';
import Icon from '@icons';
import type { ActivityItem, ActivityStreamProps } from './ActivityStream.types';

const TONES = {
  obs: 'obs',
  zone: 'dblue',
  capture: 'brand',
  alert: 'danger',
  info: 'info',
  default: 'default',
};

function toneOf(type: ActivityItem['type']) {
  if (!type) return TONES.default;
  if (type.includes('wifi') || type.includes('bluetooth') || type.includes('telemetry')) return TONES.obs;
  if (type.includes('zone')) return TONES.zone;
  if (type.includes('capture') || type.includes('camera')) return TONES.capture;
  if (type.includes('alert') || type.includes('danger')) return TONES.alert;
  return TONES.default;
}

export default function ActivityStream({
  items = [],
  maxHeight = 360,
  paused = false,
  onPauseToggle,
  onViewAll,
  onItemClick,
  className = '',
}: ActivityStreamProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [pending, setPending] = useState(0);
  const prevLenRef = useRef(items.length);

  useEffect(() => {
    const atBottom = scrollRef.current
      ? scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight - 8
      : true;
    if (items.length > prevLenRef.current) {
      if (!paused && atBottom) {
        requestAnimationFrame(() => {
          if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        });
        setPending(0);
      } else if (!atBottom) {
        setPending(p => p + (items.length - prevLenRef.current));
      }
    }
    prevLenRef.current = items.length;
  }, [items.length, paused]);

  const handleScrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    setPending(0);
  };

  return (
    <div className={`stream-wrap relative flex min-h-0 flex-1 flex-col ${className}`}>
      {pending > 0 && (
        <button className="stream-new absolute left-1/2 top-1.5 z-10 -translate-x-1/2 rounded-full border-0 bg-(--dblue) px-2.75 py-1 text-[11.5px] font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,.5)]" type="button" onClick={handleScrollToBottom}>
          <Icon name="chev" size={14} className="-rotate-90" />
          {pending} nouvel{pending > 1 ? 's' : ''} événement{pending > 1 ? 's' : ''}
        </button>
      )}
      <div
        className="stream-scroll min-h-0 flex-1 overflow-y-auto scrollbar-thin"
        ref={scrollRef}
        style={{ maxHeight }}
      >
        <ul className="stream m-0 list-none p-0">
          {items.map((it, i) => (
            <li
              key={it.id ?? i}
              className={`st-row flex items-start gap-2.5 border-b border-(--line) px-4 py-2.5 ${onItemClick ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={() => onItemClick?.(it)}
            >
              <span className="mono min-w-13.5 pt-0.5 text-[11px] text-(--text-3)">
                {it.time ?? '--:--'}
              </span>
              <span className={`st-dot tone-${toneOf(it.type)} mt-1.5 size-2 shrink-0 rounded-full ${
                toneOf(it.type) === TONES.obs ? 'bg-(--dblue)' :
                  toneOf(it.type) === TONES.zone ? 'bg-(--dblue-soft)' :
                  toneOf(it.type) === TONES.capture ? 'bg-(--brand)' :
                  toneOf(it.type) === TONES.alert ? 'bg-(--danger)' : 'bg-(--n500)'
              }`} />
              <div className="st-txt min-w-0 flex-1 text-[13px] leading-[1.4]"
                dangerouslySetInnerHTML={{ __html: it.html ?? it.text ?? String(it) }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="stream-foot flex items-center justify-between border-t border-(--line) px-3 py-2">
        <Button
          variant="quiet"
          size="sm"
          className="pauseb"
          onClick={onPauseToggle}
          icon={<Icon name={paused ? 'obs' : 'bell'} size={14} />}
        >
          {paused ? 'Reprendre' : 'Pause'}
        </Button>
        {onViewAll && (
          <Button variant="quiet" size="sm" onClick={onViewAll}>
            Tout voir
            <Icon name="chev" size={14} />
          </Button>
        )}
      </div>
    </div>
  );
}
