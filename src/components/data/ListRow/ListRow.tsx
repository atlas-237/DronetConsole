import type { ListRowProps } from './ListRow.types';

export default function ListRow({ title, subtitle, color, selected = false, onClick, right, className = '' }: ListRowProps) {
  const classes = ['listrow'];
  if (className) classes.push(className);
  return <button type="button" className={classes.join(' ')} aria-selected={selected} onClick={onClick}>{color && <span className="swatch" style={{ background: color }} />}<span className="body"><span className="t">{title}</span>{subtitle && <span className="s">{subtitle}</span>}</span>{right}</button>;
}
