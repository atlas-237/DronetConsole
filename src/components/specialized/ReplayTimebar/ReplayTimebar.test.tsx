import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ReplayTimebar from './ReplayTimebar';

describe('ReplayTimebar', () => {
  afterEach(() => { document.body.innerHTML = ''; });

  it('expose la position et le mode', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const onChange = vi.fn();
    const onModeChange = vi.fn();
    act(() => createRoot(host).render(<ReplayTimebar mode="replay" value={20} onChange={onChange} onModeChange={onModeChange} />));
    const range = host.querySelector('input[type="range"]') as HTMLInputElement;
    expect(range.value).toBe('20');
    act(() => range.dispatchEvent(new Event('change', { bubbles: true })));
    act(() => (host.querySelector('button[aria-pressed="true"]') as HTMLButtonElement).click());
    expect(host.querySelector('[data-mode="replay"]')).not.toBeNull();
    expect(onModeChange).toHaveBeenCalled();
  });
});
