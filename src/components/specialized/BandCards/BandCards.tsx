import Sparkline from '../Sparkline/Sparkline';
import { fmt } from '@utils';
import type { BandCardsProps } from './BandCards.types';

export default function BandCards({
  cells = [],
  className = '',
}: BandCardsProps) {
  return (
    <div className={`band ${className}`} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 1, background: 'var(--line-1)',
      borderRadius: 12, overflow: 'hidden',
      border: '1px solid var(--line-1)',
    }}>
      {cells.map((c, i) => {
        const tone = c.tone === 'danger' ? 'var(--danger)' :
          c.tone === 'warn' ? 'var(--warn)' :
          c.tone === 'ok' ? 'var(--ok)' :
          'var(--text)';
        const deltaTone = c.deltaTone === 'danger' ? 'var(--danger)' :
          c.deltaTone === 'warn' ? 'var(--warn)' :
          c.deltaTone === 'ok' ? 'var(--ok)' :
          'var(--text-3)';
        return (
          <div className="bcell" key={i} style={{
            padding: 16, background: 'linear-gradient(180deg, var(--bg-2), var(--bg-3))',
            minWidth: 0,
          }}>
            <div className="row" style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', gap: 8,
            }}>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: 0.6 }}>
                  {c.label}
                </div>
                <div style={{
                  fontSize: 30, fontWeight: 700,
                  fontFamily: 'var(--mono)',
                  color: tone, marginTop: 4,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {typeof c.value === 'number' ? fmt(c.value) : c.value}
                  {c.unit && <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-3)', marginLeft: 4 }}>{c.unit}</span>}
                </div>
              </div>
              {c.delta != null && (
                <div className="delta" style={{
                  fontSize: 11, fontWeight: 600, color: deltaTone,
                  background: `${deltaTone}18`,
                  padding: '3px 8px', borderRadius: 999,
                  whiteSpace: 'nowrap',
                }}>
                  {typeof c.delta === 'number' && c.delta > 0 ? '+' : ''}{typeof c.delta === 'number' ? fmt(c.delta) : c.delta}{c.deltaUnit ?? ''}
                </div>
              )}
            </div>
            {c.series && c.series.length > 0 && (
              <div className="spark" style={{ marginTop: 10, height: 32 }}>
                <Sparkline
                  series={c.series}
                  color={c.sparkColor ?? (tone === 'var(--text)' ? 'var(--brand)' : tone)}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
