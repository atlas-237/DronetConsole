import type { MetricItem, MetricsGridProps } from './MetricsGrid.types';

export default function MetricsGrid({ items, metrics, className = '' }: MetricsGridProps) {
  const classes = ['metrics'];
  if (className) classes.push(className);
  const list: MetricItem[] = items || metrics || [];
  return <div className={`${classes.join(' ')} grid grid-cols-[repeat(auto-fill,minmax(148px,1fr))] gap-px bg-(--line-soft)`}>{list.map((item, idx) => {
    const vClasses = ['v'];
    const isZero = item.value === 0 || item.value === '0' || item.value == null;
    if (isZero) vClasses.push('zero');
    if (item.tone === 'warn') vClasses.push('is-warn'); else if (item.tone === 'danger') vClasses.push('is-danger'); else if (item.tone === 'ok') vClasses.push('is-ok');
    const kLabel = item.key ?? item.label ?? '';
    const helpTxt = item.infoTooltip ?? item.help;
    const unit = item.unit ? ` ${item.unit}` : '';
    return <div className="metric relative bg-(--surface) p-[13px_15px]" key={idx}><div className="k flex items-center gap-1.25 text-xs text-(--text-2)">{kLabel}{helpTxt && <span className="info" title={helpTxt}>i</span>}</div><div className={`${vClasses.join(' ')} mt-1 font-mono text-[21px] font-semibold tracking-[-.02em]`}>{item.value}{unit}</div></div>;
  })}</div>;
}
