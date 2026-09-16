import React from 'react';
import { describe, expect, it } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import Avatar from './Avatar';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('Avatar', () => {
  it('génère les initiales et expose le nom', async () => {
    const { container, cleanup } = render(<Avatar name="Vanella Kenfack" />);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(container.textContent).toContain('VK');
    expect(container.querySelector('[aria-label="Vanella Kenfack"]')).not.toBeNull();
    cleanup();
  });
});
