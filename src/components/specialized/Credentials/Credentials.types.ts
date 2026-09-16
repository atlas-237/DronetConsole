import type React from 'react';
export interface Credential { id: string; jti?: string; kind?: string; status: 'active' | 'revoked' | 'expired' | 'unknown'; issuedAt?: string; expiresAt?: string; lastUsed?: string; token?: string; }
export interface CredentialsSectionProps { credentials?: Credential[]; onRevoke?: (credential: Credential) => void; onIssue?: React.MouseEventHandler<HTMLButtonElement>; className?: string; }
export interface KVLineProps { label: string; value?: string; mono?: boolean; tone?: 'danger' | 'warn'; }
export interface TokenBoxProps { token?: string; onCopy?: (token: string) => void; onDownload?: (token: string) => void; filename?: string; className?: string; style?: React.CSSProperties; }
export interface JwtPartProps { label: string; b64: string; color: string; mono?: boolean; }