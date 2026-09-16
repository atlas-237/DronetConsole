import React from 'react';
import { describe, expect, it } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import Field from './Field';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('Field', () => {
  it('associe le label et affiche l’aide ou l’erreur', async () => {
    const { container, cleanup } = render(<Field label="Nom" htmlFor="name" error="Requis"><input id="name" /></Field>);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(container.querySelector('label')?.getAttribute('for')).toBe('name');
    expect(container.textContent).toContain('Requis');
    cleanup();
  });
});
