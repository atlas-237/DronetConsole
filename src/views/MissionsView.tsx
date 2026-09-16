import { useState } from 'react';
import { Badge } from '@components/ui';
import { Panel, Tabs, ListRow } from '@components/data';
import Icon from '@icons';
import { Steps, ZoneCapacity } from '@components/specialized';

export default function MissionsView() {
  const [tab, setTab] = useState(0);
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Panel title="Wizard mission · Contexte" icon={<Icon name="mission" />}>
      <Steps steps={[{ label: 'Contexte' }, { label: 'Zones' }, { label: 'Assets' }, { label: 'Revue' }]} current={2} />
      <ZoneCapacity used={8} max={10} style={{ marginTop: 16 }} />
    </Panel>
    <Panel title="Liste des missions" icon={<Icon name="mission" />}>
      <Tabs tabs={[{ label: 'Actives', count: 1 }, { label: 'En attente', count: 1 }, { label: 'Terminées', count: 3 }, { label: 'Archivées', count: 12 }]} active={tab} onChange={setTab} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 8 }}>
        <ListRow color="#2f8fd0" title="Avenue Germaine AHIDJO" subtitle="Active · 10 zones · 3 appareils · A. Nkoa" right={<Badge variant="brand">M1</Badge>} />
        <ListRow color="#c99a3a" title="San Jose International Airport" subtitle="Désactivée · 2 zones · Opérateur indisponible" right={<Badge variant="warn">OFF</Badge>} />
        <ListRow color="#2f8fd0" title="Périmètre Bonanjo" subtitle="En attente · 0 zones · Vanella Kenfack" right={<Badge variant="default">PENDING</Badge>} />
      </div>
    </Panel>
  </div>;
}
