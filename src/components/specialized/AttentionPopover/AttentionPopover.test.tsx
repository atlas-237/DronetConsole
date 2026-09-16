import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import AttentionPopover from './AttentionPopover';

describe('AttentionPopover', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('affiche le compteur et sélectionne une alerte', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const onSelect = vi.fn();
    const item = { id: 'battery', label: 'Batterie faible' };
    act(() => createRoot(host).render(<AttentionPopover open items={[item]} onSelect={onSelect} />));
    expect(host.querySelector('.attn-n')?.textContent).toBe('1');
    act(() => (host.querySelector('.attn-row') as HTMLButtonElement).click());
    expect(onSelect).toHaveBeenCalledWith(item);
  });
});
