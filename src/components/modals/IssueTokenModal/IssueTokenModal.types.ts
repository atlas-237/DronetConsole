export interface TokenAsset { id: string; name: string; asset_type: string; manufacturer: string; model: string; battery: number; }
export interface IssuedToken { jti: string; kind: string; status: string; issuedAt: string; expiresAt: string; lastUsed: string; token: string; }
export interface IssueTokenModalProps { open: boolean; onClose?: () => void; asset?: TokenAsset; onCreate?: (token: IssuedToken) => void; }
