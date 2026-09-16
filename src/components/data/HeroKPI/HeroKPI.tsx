import type { HeroKPIProps } from './HeroKPI.types';

export default function HeroKPI({ items, className = '' }: HeroKPIProps) {
  const classes = ['hero-row', 'mb-[22px] grid grid-cols-3 gap-px overflow-hidden rounded-[var(--r-lg)] border border-(--line) bg-(--line-soft)'];
  if (className) classes.push(className);
  return <div className={classes.join(' ')}>{items.map((item, idx) => {
    const vClasses = ['v'];
    if (item.tone === 'warn') vClasses.push('is-warn'); else if (item.tone === 'danger') vClasses.push('is-danger'); else if (item.tone === 'ok') vClasses.push('is-ok');
    const kLabel = item.key ?? item.label ?? '';
    const unit = item.unit ? ` ${item.unit}` : '';
    const noteTxt = item.note ?? item.sub;
    return <div className="hero bg-(--surface) p-4 px-4.5" key={idx}><div className="k flex items-center gap-1.5 text-[12.5px] text-(--text-2)">{kLabel}</div><div className={`${vClasses.join(' ')} mt-1.25 font-mono text-[30px] font-bold tracking-[-.03em]`}>{item.value}{unit}</div>{noteTxt && <div className="n mt-0.75 text-[12.5px] text-(--text-3)">{noteTxt}</div>}</div>;
  })}</div>;
}
