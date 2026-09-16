export interface AssetRecord { id?: string; name?: string; manufacturer?: string; model?: string; asset_type?: string; serial?: string; notes?: string; battery?: number; last?: string; }
export interface SavedAsset { id: string; name: string; manufacturer: string; model: string; asset_type: string; serial?: string; notes?: string; battery: number; last: string; }
export interface AssetFormModalProps { open: boolean; onClose?: () => void; initialAsset?: AssetRecord | null; onSave?: (asset: SavedAsset) => void; }
