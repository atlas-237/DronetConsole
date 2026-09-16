import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import Button from './Button';

const tick = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

const render = (ui: React.ReactElement) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  root.render(ui);

  return {
    container,
    root,
    cleanup: () => {
      root.unmount();
      container.remove();
    },
  };
};

describe('Button', () => {
  it('rend sans erreur', async () => {
    const { container, cleanup } = render(<Button>Valider</Button>);
    await tick();
    expect(container.querySelector('button')?.textContent).toContain('Valider');
    cleanup();
  });

  it('applique la variante primary', async () => {
    const { container, cleanup } = render(<Button variant="primary">OK</Button>);
    await tick();
    expect(container.querySelector('button')?.className).toContain('btn-primary');
    cleanup();
  });

  it('déclenche onClick', async () => {
    const onClick = vi.fn();
    const { container, cleanup } = render(<Button onClick={onClick}>OK</Button>);
    await tick();
    (container.querySelector('button') as HTMLButtonElement).click();
    expect(onClick).toHaveBeenCalledTimes(1);
    cleanup();
  });

  it('gère disabled', async () => {
    const onClick = vi.fn();
    const { container, cleanup } = render(
      <Button disabled onClick={onClick}>
        OK
      </Button>
    );
    await tick();
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    button.click();
    expect(onClick).toHaveBeenCalledTimes(0);
    cleanup();
  });
});

