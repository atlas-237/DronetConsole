import { act } from 'react';
import { describe, expect, it } from 'vitest';
import { createRoot } from 'react-dom/client';
import ProfileButton from './ProfileButton';
describe('ProfileButton', () => { it('affiche le profil et son état', async () => { const el = document.createElement('div'); document.body.appendChild(el); const root = createRoot(el); await act(async () => { root.render(<ProfileButton name="Aline" open />); }); expect(el.querySelector('.profbtn')?.textContent).toContain('Aline'); expect(el.querySelector('button')?.getAttribute('aria-expanded')).toBe('true'); root.unmount(); el.remove(); }); });