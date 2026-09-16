export const CONFIG = { GOOGLE_MAPS_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? '', API_BASE: '/api/v1', MAP_DEFAULT: { lat: 4.0511, lng: 9.7679, zoom: 12 }, LIVE_REFRESH_MS: 500, MAX_AREAS_PER_MISSION: 10, MAX_POINTS_PER_AREA: 1000 } as const;
export const ASSET_TYPES = { DRONE: 'drone', STATION: 'monitoring-station', TABLET: 'tablet' } as const;
export const ASSET_COLORS_CSS = { drone: '--cls-drone', ground: '--cls-ground', tablet: '--cls-tablet' } as const;
export const OBSERVATION_TYPES = [['radio.wifi', 0.42], ['radio.bluetooth', 0.36], ['asset.telemetry', 0.16], ['camera.capture', 0.06]] as const;
export const VENDORS = ['Apple', 'Samsung', 'Huawei', 'Intel', 'Cisco', 'TP-Link', 'Xiaomi', 'Sony', 'inconnu'] as const;
export const PERM = { admin: { '*': true }, operator: { 'asset.list': true, 'asset.view': true, 'mission.list': true, 'mission.view': true, 'mission.create': true, 'zone.*': true, 'obs.*': true, 'gallery.*': true }, viewer: { 'asset.list': true, 'asset.view': true, 'mission.list': true, 'mission.view': true, 'obs.list': true, 'obs.view': true, 'gallery.view': true }, super: { '*': true } } as const;
export type Role = keyof typeof PERM;
export function hasPerm(role: Role | undefined, action: string): boolean { if (!role) return false; const permissions = PERM[role]; if (permissions['*']) return true; const namespace = action.split('.')[0]; return Boolean(permissions[action as keyof typeof permissions] || permissions[`${namespace}.*` as keyof typeof permissions]); }
