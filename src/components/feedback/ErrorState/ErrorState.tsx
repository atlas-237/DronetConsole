import { useMemo } from 'react';
import Icon from '@icons';
import { Button } from '@components/ui';
import { useToast } from '@context/ToastContext';
import type { ErrorStateProps } from './ErrorState.types';

function generateRefId() { const now = new Date(); const yyyy = now.getFullYear(); const mm = String(now.getMonth() + 1).padStart(2, '0'); const dd = String(now.getDate()).padStart(2, '0'); const rand = Math.floor(Math.random() * 90 + 10); return `INC-${yyyy}-${mm}${dd}-${rand}`; }

export default function ErrorState({ what, onRetry, refId }: ErrorStateProps) {
  const { show } = useToast() as { show: (message: string, options?: { tone?: string }) => unknown };
  const reference = useMemo(() => refId || generateRefId(), [refId]);
  const handleCopy = async () => { try { await navigator.clipboard.writeText(reference); show('Référence copiée.', { tone: 'ok' }); } catch (error) { console.error('Échec de la copie :', error); } };
  return <div className="state is-error mx-auto max-w-110 px-6.5 py-11 text-center"><div className="ico mx-auto mb-3.5 grid size-10 place-items-center rounded-[10px] bg-(--danger-soft) text-(--danger)"><Icon name="alert" size={22} /></div><h3 className="mb-1.5">Impossible de charger {what}</h3><p className="mb-4 text-[13.5px] text-(--text-2)">Une erreur est survenue lors de la récupération des données. Réessayez dans quelques instants.</p>{onRetry && <div className="actions flex flex-wrap justify-center gap-2.25"><Button variant="primary" onClick={onRetry}>Réessayer</Button></div>}<div className="ref mt-3.5 inline-flex items-center gap-1.75 rounded-(--r-sm) border border-(--line) px-2.5 py-1.5 font-mono text-xs text-(--text-2)"><span>{reference}</span><Button variant="quiet" size="sm" onClick={handleCopy}>Copier</Button></div></div>;
}
