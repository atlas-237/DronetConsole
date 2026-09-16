import type React from 'react';
export interface Asset { id?: string; name?: string; battery?: number; manufacturer?: string; model?: string; asset_type?: string; last?: string; [key: string]: unknown; }
export interface AssetListRowProps { asset: Asset; color?: string; icon?: React.ReactNode; onClick?: (asset: Asset) => void; className?: string; }