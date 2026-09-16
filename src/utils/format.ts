export function fmt(value: unknown): string {
  if (value == null) return '—';
  if (typeof value === 'number') return Number.isFinite(value) ? new Intl.NumberFormat('fr-FR').format(Math.round(value)) : '—';
  return String(value);
}
export function pad2(value: number): string { return String(value).padStart(2, '0'); }
export function clock(sec: number): string { return `${pad2(Math.floor(sec / 60))}:${pad2(Math.round(sec % 60))}`; }
export function clockHMS(sec: number): string { const h = Math.floor(sec / 3600); const m = Math.floor((sec % 3600) / 60); const s = Math.round(sec % 60); return h > 0 ? `${pad2(h)}:${pad2(m)}:${pad2(s)}` : `${pad2(m)}:${pad2(s)}`; }
export function distanceMeters(meters: number): string { return meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(2).replace('.', ',')} km`; }
export function speedMps(value: number): string { return `${value.toFixed(1)} m/s`; }
export function latLng(lat: number, lng: number, digits = 5): string { return `${lat.toFixed(digits)}, ${lng.toFixed(digits)}`; }
export function battTone(value: number): string { return value <= 20 ? 'var(--danger)' : value <= 40 ? 'var(--warn)' : 'var(--ok)'; }
export function assetColorVariant(assetType: string, name = ''): string { return assetType === 'drone' ? 'var(--cls-drone)' : name.includes('Tab') ? 'var(--cls-tablet)' : 'var(--cls-ground)'; }
export function toCSV<T extends Record<string, unknown>>(rows: T[]): string { if (!rows.length) return ''; const escape = (value: unknown) => { const text = String(value ?? ''); return /[",;\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text; }; const header = Object.keys(rows[0]); return `\ufeff${[header.join(';'), ...rows.map(row => header.map(key => escape(row[key])).join(';'))].join('\n')}`; }
export function downloadBlob(content: BlobPart, filename: string, mime = 'text/plain'): void { const blob = new Blob([content], { type: `${mime};charset=utf-8` }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); window.setTimeout(() => URL.revokeObjectURL(url), 1000); }
