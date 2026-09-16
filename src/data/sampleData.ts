import { buildTrackFromPath } from '@utils';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'ops', badge: 3 },
  { id: 'map', label: 'Carte & Flotte', icon: 'map' },
  { id: 'assets', label: 'Appareils', icon: 'asset', badge: 12 },
  { id: 'missions', label: 'Missions', icon: 'mission' },
  { id: 'obs', label: 'Observations', icon: 'obs', badge: 247 },
  { id: 'gallery', label: 'Galerie', icon: 'image' },
  { id: 'admin', label: 'Admin', icon: 'admin', perm: 'admin' },
] as const;

export const SAMPLE_ASSETS = [
  { id: 'a1', name: 'skydroid1', asset_type: 'drone', manufacturer: 'Skydroid', model: 'H16', battery: 82, last: 'il y a 4 s' },
  { id: 'a2', name: 'Interceptor1', asset_type: 'drone', manufacturer: 'Darta', model: 'INT-2', battery: 41, last: 'il y a 7 s' },
  { id: 'a3', name: 'Triangle1', asset_type: 'monitoring-station', manufacturer: 'Darta', model: 'TRI', battery: 97, last: 'il y a 12 s' },
  { id: 'a4', name: "Francois's Galaxy Tab S5e", asset_type: 'monitoring-station', manufacturer: 'Samsung', model: 'SM-T720', battery: 63, last: 'il y a 41 s' },
];

export const SAMPLE_CREDENTIALS = [
  { id: 'c1', jti: 'jti_a1_2026x77de', kind: 'asset.drone.a1', status: 'active', issuedAt: '2026-09-12 08:14', expiresAt: '2026-12-12 08:14', lastUsed: 'il y a 2 min', token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRhcnRhLWFzc2V0LTIwMjYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJkYXJ0YS5zeXN0ZW1zLmFpL2NvbnNvbGUiLCJzdWIiOiJhc3NldDphMSIsImF1ZCI6WyJhc3NldC5yZXBvcnQiLCJvYnMuaW5nZXN0Il0sImlhdCI6MTc1NzY2NjA0MCwiZXhwIjoxNzY1NDQyMDQwLCJqdGkiOiJqdGlfYTFfMjAyNng3N2RlIiwidHlwZSI6ImFzc2V0LmRyb25lLmExIiwib3duZXIiOiJ2YW5lbGxhLmtlbmZhY2tAbG9nbWFzcy53b3JrIn0.3J2_SIM_LCG_FAKE_SIG___x8Z9m2' },
  { id: 'c2', jti: 'jti_a2_2026x0042', kind: 'asset.drone.a2', status: 'expired', issuedAt: '2026-06-01 09:00', expiresAt: '2026-09-01 09:00', lastUsed: 'il y a 14 j', token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRhcnRhLWFzc2V0LTIwMjYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJkYXJ0YS5zeXN0ZW1zLmFpL2NvbnNvbGUiLCJzdWIiOiJhc3NldDphMiIsImF1ZCI6WyJhc3NldC5yZXBvcnQiXSwiaWF0IjoxNzQ4ODUwNDAwLCJleHAiOjE3NTY2MjY0MDAsImp0aSI6Imp0aV9hMl8yMDI2eDAwNDIiLCJ0eXBlIjoiYXNzZXQuZHJvbmUuYTIifQ._EXPIRED_SIG' },
] as const;

export const SAMPLE_STREAM = [
  { id: 's1', time: '14:07', type: 'obs', html: '<strong>skydroid1</strong> · rapport télémétrie · <em>batterie 82 %</em>' },
  { id: 's2', time: '14:06', type: 'zone', html: 'Entrée en zone <strong>Couloir aérien</strong> · skydroid1' },
  { id: 's3', time: '14:06', type: 'capture', html: 'Capture caméra #1052 · Interceptor1 · 3,2 MP' },
  { id: 's4', time: '14:05', type: 'alert', html: '<strong style="color:var(--danger)">Niveau batterie critique</strong> · Triangle2 (9 %)' },
  { id: 's5', time: '14:04', type: 'obs', html: 'AP Wi-Fi détecté : <code style="background:var(--bg-3);padding:1px 6px;border-radius:4px;">Darta-Corp-5G</code> · Triangle1' },
  { id: 's6', time: '14:02', type: 'zone', html: 'Sortie de zone <strong>Périmètre nord</strong> · Interceptor1' },
  { id: 's7', time: '14:01', type: 'obs', html: 'Périphérique BT détecté : iPhone 15 Pro · Triangle3' },
];

const sparkRnd = (seed: number, count = 24) => { let current = seed >>> 0; const random = () => { current = (current * 1664525 + 1013904223) >>> 0; return current / 4294967296; }; return new Array(count).fill(0).map((_, index) => 40 + random() * 40 + Math.sin(index / 3) * 8); };
export const SAMPLE_BAND_CELLS = (() => { const first = sparkRnd(42, 18); const second = sparkRnd(42, 24); return [{ label: 'Appareils déclarés', value: 5, unit: 'actifs', delta: 1, deltaTone: 'ok', series: first }, { label: 'Observations Wi-Fi', value: 1595, delta: 217, deltaTone: 'ok', series: second.map(value => value * 1.2 + 20) }, { label: 'Observations BT', value: 2450, delta: 38, deltaTone: 'warn', series: second.map(value => value * 1.6) }, { label: 'Surface surveillée', value: '4,21', unit: 'km²', delta: '0,12', deltaUnit: ' km²', deltaTone: 'ok', series: second }, { label: 'Alertes critiques', value: 0, tone: 'ok', delta: 0, series: second.map(() => 0) }]; })();
export const SAMPLE_TIMELINE = (() => { const result: Array<{ colIdx: number; type: string; value: number }> = []; let seed = 1234; const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; for (let index = 0; index < 72; index += 1) { if (random() > 0.25) result.push({ colIdx: index, type: 'obs', value: Math.round(1 + random() * 12) }); if (random() > 0.7) result.push({ colIdx: index, type: 'zone', value: Math.round(random() * 4) }); if (random() > 0.85) result.push({ colIdx: index, type: 'capture', value: 1 }); if (random() > 0.95) result.push({ colIdx: index, type: 'alert', value: 1 }); } return result; })();
export const SAMPLE_GALLERY = (() => { let seed = 777; const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; return new Array(12).fill(0).map((_, index) => ({ id: `g${index}`, asset: SAMPLE_ASSETS[index % SAMPLE_ASSETS.length].name, title: `Capture #${1040 + index}`, subtitle: `Zone ${['Périmètre nord', 'Couloir aérien', 'Opération'][index % 3]}`, time: `${String(6 + (index % 10)).padStart(2, '0')}:${String((index * 7) % 60).padStart(2, '0')}`, lat: 4.05 + random() * 0.02, lng: 9.76 + random() * 0.02 })); })();
export const SAMPLE_TRACK = (() => { let seed = 20260907; const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; const path = new Array(36).fill(0).map((_, index) => ({ lat: 4.0538 + Math.sin(index / 4) * 0.004 + random() * 0.001, lng: 9.7602 + Math.cos(index / 5) * 0.006 + random() * 0.001 })); return buildTrackFromPath(SAMPLE_ASSETS[0], path, 18); })();
