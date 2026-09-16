import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import SegmentedControl from './SegmentedControl';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('SegmentedControl', () => {
  it('signale l’option sélectionnée', async () => {
    const onChange = vi.fn();
    const { container, cleanup } = render(<SegmentedControl items={['A', 'B']} value={1} onChange={onChange} />);
    await new Promise(resolve => setTimeout(resolve, 0));
    const buttons = container.querySelectorAll('button');
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    buttons[0].click();
    expect(onChange).toHaveBeenCalledWith(0);
    cleanup();
  });
});
