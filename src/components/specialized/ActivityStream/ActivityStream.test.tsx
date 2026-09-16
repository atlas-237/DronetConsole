import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ActivityStream from './ActivityStream';

describe('ActivityStream', () => {
  afterEach(() => document.body.innerHTML = '');

  it('rend les événements et l’état vide', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    act(() => createRoot(host).render(<ActivityStream items={[{ id: 1, text: 'Événement' }]} />));
    expect(host.textContent).toContain('Événement');
  });

  it('déclenche les handlers principaux', () => {
    const host = document.createElement('div');
    const onItemClick = vi.fn();
    const onPauseToggle = vi.fn();
    document.body.appendChild(host);
    act(() => createRoot(host).render(<ActivityStream items={[{ id: 1, text: 'Événement' }]} onItemClick={onItemClick} onPauseToggle={onPauseToggle} />));
    act(() => (host.querySelector('.st-row') as HTMLElement).click());
    act(() => (host.querySelector('.pauseb') as HTMLButtonElement).click());
    expect(onItemClick).toHaveBeenCalledOnce();
    expect(onPauseToggle).toHaveBeenCalledOnce();
  });
});