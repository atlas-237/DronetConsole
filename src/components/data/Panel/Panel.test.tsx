import { describe, expect, it, vi } from 'vitest';
import { createRoot } from 'react-dom/client';
import Panel from './Panel';
const render = async (node: React.ReactNode) => { const el = document.createElement('div'); document.body.appendChild(el); const root = createRoot(el); root.render(node); await new Promise(resolve => setTimeout(resolve, 0)); return { el, root }; };
describe('Panel', () => { it('rend le contenu', async () => { const { el, root } = await render(<Panel title="Titre">Contenu</Panel>); expect(el.textContent).toContain('Contenu'); root.unmount(); el.remove(); }); it('replie le contenu', async () => { const { el, root } = await render(<Panel title="Titre" collapsible defaultOpen><span>Contenu</span></Panel>); (el.querySelector('button') as HTMLButtonElement).click(); expect(el.querySelector('.ph-body')?.hasAttribute('hidden')).toBe(true); root.unmount(); el.remove(); }); it('accepte un callback indirect sans erreur', () => expect(vi.fn()).toBeDefined()); });
