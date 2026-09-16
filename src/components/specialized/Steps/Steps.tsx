import type { StepsProps } from './Steps.types';

export default function Steps({
  steps = [],
  current = 0,
  className = '',
}: StepsProps) {
  return (
    <div className={`steps flex items-center overflow-auto rounded-[10px] border border-(--line-1) bg-(--bg-2) p-2 ${className}`}>
      {steps.map((s, i) => {
        const state = i < current ? 'done' : i === current ? 'current' : 'todo';
        const color =
          state === 'done' ? 'var(--ok)' :
          state === 'current' ? 'var(--brand)' :
          'var(--text-3)';
        return (
          <div
            key={i}
            className={`step is-${state} relative flex min-w-35 flex-1 items-center`}
            data-state={state}
          >
            {i > 0 && (
              <div className="absolute left-[-50%] right-1/2 top-3.25 z-0 h-0.5" style={{ background: i <= current ? color : 'var(--line-2)' }} />
            )}
            <div className="relative z-10 flex flex-col items-start gap-1.5">
              <div className="flex size-7 items-center justify-center rounded-full text-[13px] font-bold" style={{ background: state === 'done' ? color : 'var(--bg-3)', color: state === 'done' ? '#fff' : color, border: `2px solid ${color}` }}>
                {state === 'done' ? '✓' : i + 1}
              </div>
              <div className="text-xs" style={{ fontWeight: state === 'current' ? 700 : 500, color }}>
                {s.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
