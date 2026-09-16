import { useState } from 'react';
import { Button, Badge, Input, SegmentedControl } from '@components/ui';
import { Panel, DataTable } from '@components/data';
import Icon from '@icons';
import type { TableRow } from '@components/data/DataTable/DataTable.types';

export default function ObsView() {
  const [mode, setMode] = useState(0);
  const rows: TableRow[] = [
    { time: '14:07:12', type: 'Wi-Fi', identity: 'AA:BB:CC:11:22:33', vendor: 'Cisco', asset: 'skydroid1', rssi: -48, zone: 'Périmètre nord' },
    { time: '14:07:10', type: 'BT', identity: '84:38:35:AA:BB:01', vendor: 'Apple', asset: 'Triangle1', rssi: -62, zone: 'Couloir aérien' },
    { time: '14:07:08', type: 'Télém.', identity: 'asset:a2', vendor: 'Darta', asset: 'Interceptor1', rssi: -51, zone: 'Périmètre nord' },
    { time: '14:07:05', type: 'Capture', identity: 'cam:a1#1052', vendor: '—', asset: 'skydroid1', zone: 'Couloir aérien' },
    { time: '14:07:02', type: 'Wi-Fi', identity: '00:11:22:33:44:55', vendor: 'TP-Link', asset: 'Triangle1', rssi: -81, zone: '—' },
    { time: '14:07:01', type: 'BT', identity: 'A4:83:E7:FF:EE:10', vendor: 'Sony', asset: 'skydroid1', rssi: -73, zone: 'Périmètre nord' },
  ];
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}><Panel title="Observations" icon={<Icon name="obs" />}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}><SegmentedControl items={['Historique', 'État courant', 'Instantané', 'Changements']} value={mode} onChange={setMode} ariaLabel="Mode d’observation" /><div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>{[['Wi-Fi', 'var(--dblue)', 'square'], ['BT', 'var(--brand)', 'diamond'], ['Télém.', 'var(--cls-drone)', 'circle'], ['Capture', 'var(--warn)', 'square']].map(([label, color, shape]) => <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 9px', background: `${color}22`, color, borderRadius: 999, fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}><span style={{ width: 7, height: 7, borderRadius: shape === 'circle' ? 999 : shape === 'square' ? 2 : 1, transform: shape === 'diamond' ? 'rotate(45deg)' : undefined, background: color }} />{label}</span>)}</div><div style={{ marginLeft: 'auto', width: 260 }}><Input placeholder="Rechercher identité / MAC…" icon={<Icon name="search" size={14} />} /></div></div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--warn-soft)22', border: '1px solid var(--warn-soft)', borderRadius: 8, color: 'var(--warn)', marginBottom: 12, fontSize: 12.5 }}><Icon name="alert" size={16} /><span>Affichage limité à <strong>500</strong> lignes · Utilisez les filtres pour affiner.</span><Button size="sm" variant="quiet" style={{ marginLeft: 'auto' }}>Affiner <Icon name="chev" size={12} /></Button></div>
    <DataTable columns={[{ key: 'time', label: 'Heure' }, { key: 'type', label: 'Type' }, { key: 'identity', label: 'Identité', render: row => <span style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{String(row.identity ?? '')}</span> }, { key: 'vendor', label: 'Fabricant' }, { key: 'asset', label: 'Appareil' }, { key: 'rssi', label: 'RSSI', render: row => { const rssi = Number(row.rssi ?? 0); return <Badge variant={rssi > -55 ? 'ok' : rssi > -70 ? 'default' : rssi > -85 ? 'warn' : 'danger'}>{row.rssi != null ? `${row.rssi} dBm` : '—'}</Badge>; } }, { key: 'zone', label: 'Zone' }]} rows={rows} />
  </Panel></div>;
}
