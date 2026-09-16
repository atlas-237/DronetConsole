export interface MissionRecord { id?: string; name?: string; description?: string; operator?: string; status?: string; zoneCount?: number; assetCount?: number; color?: string; badge?: string; }
export interface SavedMission { id: string; name: string; description: string; operator: string; status?: string; zoneCount: number; assetCount: number; color: string; }
export interface MissionEditModalProps { open: boolean; onClose?: () => void; initialMission?: MissionRecord | null; onSave?: (mission: SavedMission) => void; assets?: unknown[]; zones?: unknown[]; operatorName?: string; }
