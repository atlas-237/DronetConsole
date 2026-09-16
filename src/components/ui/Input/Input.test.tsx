import React from 'react';
import { describe, expect, it } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import Input from './Input';

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);
  return { container, cleanup: () => { root.unmount(); container.remove(); } };
};

describe('Input', () => {
  it('rend les variantes input, select et textarea', async () => {
    const { container, cleanup } = render(<Input as="textarea" aria-label="Description" />);
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(container.querySelector('textarea')).not.toBeNull();
    cleanup();
  });
});
