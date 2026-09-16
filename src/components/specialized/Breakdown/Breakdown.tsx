import { fmt } from '@utils';
import type { BreakdownBodyProps, BreakdownProps } from './Breakdown.types';

export default function Breakdown({
  title,
  lead,
  unit = '',
  sub = '',
  parts = [],
  facts = [],
  collapsible = true,
  defaultOpen = true,
  className = '',
}: BreakdownProps) {
  const total = parts.reduce((a, b) => a + (b.value || 0), 0) || 1;

  return (
    <section className={`panel mb-4.5 rounded-(--r-lg) border border-(--line) bg-(--surface) ${className}`}>
      {collapsible ? (
        <details open={defaultOpen}>
          <summary className="ph-btn flex w-full cursor-pointer items-center gap-2.5 border-0 px-4 py-3 text-left">
            <span className="accent" />
            <h2>{title}</h2>
            <span className="ph-sum">
              <span className="v">{typeof lead === 'number' ? fmt(lead) : lead}</span>
              {unit && <span className="u">{unit}</span>}
            </span>
            <svg className="ph-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </summary>
          <div className="ph-body">
            <BreakdownBody sub={sub} parts={parts} facts={facts} total={total} />
          </div>
        </details>
      ) : (
        <>
          <div className="panel-head flex items-center gap-2.5 border-b border-(--line-soft) px-4 py-3">
            <span className="accent" />
            <h2>{title}</h2>
            <div className="right ml-auto flex items-center gap-2">
              <span className="v">{typeof lead === 'number' ? fmt(lead) : lead}</span>
              {unit && <span className="u">{unit}</span>}
            </div>
          </div>
          <BreakdownBody sub={sub} parts={parts} facts={facts} total={total} />
        </>
      )}
    </section>
  );
}

function BreakdownBody({ sub, parts, facts, total }: BreakdownBodyProps) {
  return (
    <>
      <div className="panel-body px-4 pb-3.5 pt-3">
        {sub && <div className="sub">{sub}</div>}
        <div className="stack flex h-2 overflow-hidden rounded-full bg-(--line-soft)">
          {parts.map((p, i) => (
            <span
              key={i}
              className="h-full shrink-0"
              style={{ width: `${((p.value || 0) / total) * 100}%`, background: `var(${p.colorVar})` }}
            />
          ))}
        </div>
        <div className="legend">
          {parts.map((p, i) => (
            <div className="leg" key={i}>
              <span className="sw" style={{ background: `var(${p.colorVar})` }} />
              <span className="n">{p.name}</span>
              <span className="v">{fmt(p.value)}</span>
              <span className="p">{Math.round(((p.value || 0) / total) * 100)} %</span>
            </div>
          ))}
        </div>
      </div>
      {facts.length > 0 && (
        <div className="facts">
          {facts.map((f, i) => (
            <div className="fact" key={i}>
              <div className="k">
                {f.label}
                {f.help && (
                  <span
                    className="info"
                    title={f.help}
                    tabIndex={0}
                    role="note"
                    aria-label={f.help}
                  >
                    i
                  </span>
                )}
              </div>
              <div
                className={`v${f.value === 0 || f.value === '0' ? ' zero' : ''}${
                  f.tone ? ` is-${f.tone}` : ''
                }`}
              >
                {typeof f.value === 'number' ? fmt(f.value) : f.value}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
