import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';

import Alert from './Alert';

const tick = () =>
  new Promise<void>((resolve) =>
    setTimeout(resolve, 0)
  );

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

describe('Alert', () => {
  it('rend sans erreur', async () => {
    const { container, cleanup } = render(
      <Alert>Information</Alert>
    );

    await tick();

    expect(
      container.querySelector('.alert')
    ).not.toBeNull();

    expect(container.textContent).toContain(
      'Information'
    );

    cleanup();
  });

  it('utilise le tone info par défaut', async () => {
    const { container, cleanup } = render(
      <Alert>Information</Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    );

    expect(alert?.className).toContain(
      'alert-info'
    );

    expect(alert?.getAttribute('role')).toBe(
      'status'
    );

    cleanup();
  });

  it('applique le tone ok', async () => {
    const { container, cleanup } = render(
      <Alert tone="ok">
        Opération réussie
      </Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    );

    expect(alert?.className).toContain(
      'alert-ok'
    );

    expect(alert?.getAttribute('role')).toBe(
      'status'
    );

    cleanup();
  });

  it('applique le tone warn', async () => {
    const { container, cleanup } = render(
      <Alert tone="warn">
        Attention
      </Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    );

    expect(alert?.className).toContain(
      'alert-warn'
    );

    expect(alert?.getAttribute('role')).toBe(
      'alert'
    );

    cleanup();
  });

  it('applique le tone danger', async () => {
    const { container, cleanup } = render(
      <Alert tone="danger">
        Une erreur est survenue
      </Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    );

    expect(alert?.className).toContain(
      'alert-danger'
    );

    expect(alert?.getAttribute('role')).toBe(
      'alert'
    );

    cleanup();
  });

  it('affiche le titre', async () => {
    const { container, cleanup } = render(
      <Alert title="Information">
        Contenu de l’alerte
      </Alert>
    );

    await tick();

    expect(container.textContent).toContain(
      'Information'
    );

    cleanup();
  });

  it('affiche le contenu', async () => {
    const { container, cleanup } = render(
      <Alert>
        Contenu de l’alerte
      </Alert>
    );

    await tick();

    expect(container.textContent).toContain(
      'Contenu de l’alerte'
    );

    cleanup();
  });

  it('affiche le bouton action', async () => {
    const { container, cleanup } = render(
      <Alert action="Réessayer">
        Une erreur est survenue
      </Alert>
    );

    await tick();

    const button = container.querySelector(
      'button'
    );

    expect(button).not.toBeNull();

    expect(button?.textContent).toContain(
      'Réessayer'
    );

    cleanup();
  });

  it('déclenche onAction', async () => {
    const onAction = vi.fn();

    const { container, cleanup } = render(
      <Alert
        action="Réessayer"
        onAction={onAction}
      >
        Une erreur est survenue
      </Alert>
    );

    await tick();

    const button = container.querySelector(
      'button'
    ) as HTMLButtonElement;

    button.click();

    expect(onAction).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it('affiche le bouton de fermeture', async () => {
    const { container, cleanup } = render(
      <Alert dismissible>
        Message
      </Alert>
    );

    await tick();

    const button = container.querySelector(
      'button[aria-label="Fermer l’alerte"]'
    );

    expect(button).not.toBeNull();

    cleanup();
  });

  it('déclenche onDismiss', async () => {
    const onDismiss = vi.fn();

    const { container, cleanup } = render(
      <Alert
        dismissible
        onDismiss={onDismiss}
      >
        Message
      </Alert>
    );

    await tick();

    const button = container.querySelector(
      'button[aria-label="Fermer l’alerte"]'
    ) as HTMLButtonElement;

    button.click();

    expect(onDismiss).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it('ne affiche pas le bouton de fermeture par défaut', async () => {
    const { container, cleanup } = render(
      <Alert>Message</Alert>
    );

    await tick();

    const button = container.querySelector(
      'button[aria-label="Fermer l’alerte"]'
    );

    expect(button).toBeNull();

    cleanup();
  });

  it('priorise action sur dismissible', async () => {
    const { container, cleanup } = render(
      <Alert
        action="Réessayer"
        dismissible
      >
        Message
      </Alert>
    );

    await tick();

    const buttons = container.querySelectorAll(
      'button'
    );

    expect(buttons.length).toBe(1);

    expect(buttons[0].textContent).toContain(
      'Réessayer'
    );

    cleanup();
  });

  it('accepte une icône personnalisée', async () => {
    const { container, cleanup } = render(
      <Alert
        icon={
          <span data-testid="custom-icon">
            !
          </span>
        }
      >
        Message
      </Alert>
    );

    await tick();

    expect(
      container.querySelector(
        '[data-testid="custom-icon"]'
      )
    ).not.toBeNull();

    cleanup();
  });

  it('applique une className personnalisée', async () => {
    const { container, cleanup } = render(
      <Alert className="custom-alert">
        Message
      </Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    );

    expect(alert?.className).toContain(
      'custom-alert'
    );

    cleanup();
  });

  it('applique les styles personnalisés', async () => {
    const { container, cleanup } = render(
      <Alert
        style={{
          marginTop: 20,
          padding: '20px',
        }}
      >
        Message
      </Alert>
    );

    await tick();

    const alert = container.querySelector(
      '.alert'
    ) as HTMLDivElement;

    expect(alert.style.marginTop).toBe(
      '20px'
    );

    expect(alert.style.padding).toBe(
      '20px'
    );

    cleanup();
  });
});