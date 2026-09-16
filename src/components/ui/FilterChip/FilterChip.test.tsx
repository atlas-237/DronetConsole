import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import FilterChip, { FilterChipGroup } from './FilterChip';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('FilterChip', () => {
  it('supporte l’activation clavier et les groupes', async () => {
    const onClick = vi.fn();
    const onChange = vi.fn();
    const { container, cleanup } = render(<><FilterChip label="Wi-Fi" onClick={onClick} /><FilterChipGroup items={[{ id: 'wifi', label: 'Wi-Fi' }]} onChange={onChange} /></>);
    await new Promise(resolve => setTimeout(resolve, 0));
    const chip = container.querySelector('[role="button"]') as HTMLElement;
    chip.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(container.textContent).toContain('Wi-Fi');
    cleanup();
  });
});
