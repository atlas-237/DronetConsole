import { Button, Badge } from '@components/ui';
import { Panel, DataTable } from '@components/data';
import { EmptyState, ErrorState, LoadingState, Skeleton } from '@components/feedback';
import Icon from '@icons';
import { hasPerm } from '@utils';

export default function AdminView() {
  const permissions = [['asset.list', '✓', '✓', '✓', '✓'], ['asset.create', '✓', '✓', '—', '—'], ['mission.create', '✓', '✓', '✓', '—'], ['user.manage', '✓', '✓', '—', '—'], ['token.issue', '✓', '✓', '—', '—']];
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Panel title="RBAC — Matrice de permissions" icon={<Icon name="shield" />}>
      <DataTable columns={[{ key: 'action', label: 'Action' }, { key: 'super', label: 'Super' }, { key: 'admin', label: 'Admin' }, { key: 'operator', label: 'Opérateur' }, { key: 'viewer', label: 'Lecture seule' }]} rows={permissions.map(([action, superRole, admin, operator, viewer]) => { const badge = (value: string) => value === '✓' ? <Badge variant="ok" size="sm">ok</Badge> : <span style={{ color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>—</span>; return { action, super: badge(superRole), admin: badge(admin), operator: badge(operator), viewer: badge(viewer) }; })} />
      <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: 'var(--warn-soft)22', border: '1px solid var(--warn-soft)', fontSize: 12.5 }}><strong style={{ color: 'var(--warn)' }}>Sécurité :</strong> Le RBAC est actuellement implémenté côté client uniquement. Pour la mise en production, chaque endpoint API doit revérifier les permissions côté serveur.<div style={{ marginTop: 6, opacity: 0.85 }}>Exemple : <code>hasPerm('operator', 'mission.create')</code> → <strong style={{ color: hasPerm('operator', 'mission.create') ? 'var(--ok)' : 'var(--danger)' }}>{String(hasPerm('operator', 'mission.create'))}</strong></div></div>
    </Panel>
    <Panel title="États d'interface" icon={<Icon name="alert" />}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
        <EmptyState iconName="inbox" title="Aucun résultat" text="Aucun appareil ne correspond aux critères." actionLabel="Réinitialiser" onAction={() => undefined} />
        <ErrorState what="la carte" onRetry={() => undefined} />
        <LoadingState rows={4} rowHeight={42} />
        <div><div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 8 }}>Skeleton · chargement tableau</div><div style={{ background: 'var(--bg-2)', padding: 14, borderRadius: 10, border: '1px solid var(--line-1)' }}>{[0, 1, 2, 3].map(index => <Skeleton key={index} type="row" style={{ marginBottom: index < 3 ? 10 : 0 }} />)}</div></div>
      </div>
    </Panel>
  </div>;
}
