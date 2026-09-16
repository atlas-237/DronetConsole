import { useEffect, useState } from 'react';
import { Field, Input } from '@components/ui';
import { Modal } from '@components/feedback';
import { Steps, ZoneCapacity } from '@components/specialized';
import type { NewMissionModalProps } from './NewMissionModal.types';

export default function NewMissionModal({ open, onClose, onCreate }: NewMissionModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [touched, setTouched] = useState(false);
  useEffect(() => { if (!open) return; setName(''); setDescription(''); setTouched(false); }, [open]);
  const invalidName = touched && !name.trim();
  return <Modal open={open} onClose={onClose} title="Nouvelle mission" confirmLabel="Créer" onConfirm={() => { setTouched(true); if (!name.trim()) return; onCreate?.({ name: name.trim(), description: description.trim() }); }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Steps steps={[{ label: 'Contexte' }, { label: 'Zones' }, { label: 'Assets' }, { label: 'Revue' }]} current={1} />
      <Field label="Nom de la mission" required><Input placeholder="ex : Avenue Germaine AHIDJO" value={name} onChange={event => setName(event.target.value)} invalid={invalidName} /></Field>
      <Field label="Périmètre / Description" help="Facultatif"><Input as="textarea" rows={3} placeholder="Surveillance de périmètre sur l'axe principal…" value={description} onChange={event => setDescription(event.target.value)} /></Field>
      <ZoneCapacity used={6} max={10} />
    </div>
  </Modal>;
}
