import React from 'react';
import { describe, expect, it } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import Badge from './Badge';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('Badge', () => {
  it('rend son contenu et son indicateur', async () => {
    const { container, cleanup } = render(<Badge variant="ok" dot>Actif</Badge>);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(container.querySelector('span')?.textContent).toContain('Actif');
    expect(container.querySelectorAll('span').length).toBe(2);
    cleanup();
  });
});
