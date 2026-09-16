import type { KVEntry, KVGridProps, KVOptions, KVPair } from './KVGrid.types';

export default function KVGrid({ items, pairs, className = '', style }: KVGridProps) {
  const classes = ['kv'];
  if (className) classes.push(className);
  const list = items || pairs || [];
  const normalized: KVEntry[] = list.map(entry => {
    if (Array.isArray(entry)) {
      const [key, value, options = {}] = entry as [string, KVEntry['value'], KVOptions?];
      return { key, value, tone: options.tone };
    }
    return entry;
  });
  return <div className={`${classes.join(' ')} grid grid-cols-2 gap-px bg-(--line-soft)`} style={style}>{normalized.map((item, idx) => {
    const vClasses = ['v'];
    if (item.tone === 'warn') vClasses.push('is-warn'); else if (item.tone === 'danger') vClasses.push('is-danger'); else if (item.tone === 'ok') vClasses.push('is-ok');
    if ((item.value === 0 || item.value === '0' || item.value == null) && !item.tone) vClasses.push('zero');
    return <div className="bg-(--surface) p-[11px_14px]" key={idx}><div className="k text-[11.5px] text-(--text-3)">{item.key ?? item.label}</div><div className={`${vClasses.join(' ')} mt-0.5 font-mono text-data font-medium`}>{item.value}{item.unit ? ` ${item.unit}` : ''}</div></div>;
  })}</div>;
}
