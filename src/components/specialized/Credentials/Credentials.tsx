import { useState } from 'react';
import { Button } from '@components/ui';
import Badge from '@components/ui/Badge/Badge';
import Icon from '@icons';
import { fmt } from '@utils';
import type { CredentialsSectionProps, JwtPartProps, KVLineProps, TokenBoxProps } from './Credentials.types';

export default function CredentialsSection({
  credentials = [],
  onRevoke,
  onIssue,
  className = '',
}: CredentialsSectionProps) {
  return (
    <section className={`credsec panel ${className}`}>
      <div className="panel-head">
        <Icon name="shield" />
        <h2>Identifiants & jetons</h2>
        <div className="right">
          {onIssue && (
            <Button variant="primary" size="sm" onClick={onIssue} icon={<Icon name="shield" size={14} />}>
              Émettre un jeton
            </Button>
          )}
        </div>
      </div>
      <div className="panel-body">
        <div className="cred flex flex-col gap-2.5">
          {credentials.map((c) => {
            const variant =
              c.status === 'active' ? 'ok' :
              c.status === 'revoked' ? 'danger' :
              c.status === 'expired' ? 'warn' : 'default';
            return (
              <div key={c.jti || c.id} className="rounded-[10px] border border-(--line-1) bg-(--bg-2) p-3">
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Badge variant={variant} dot>
                      {c.status === 'active' ? 'Actif' :
                        c.status === 'revoked' ? 'Révoqué' :
                        c.status === 'expired' ? 'Expiré' : 'Inconnu'}
                    </Badge>
                    <span className="rounded bg-(--bg-3) px-2 py-0.75 font-mono text-[11px] text-(--text-3)">
                      {c.kind ?? 'JWT'}
                    </span>
                  </div>
                  {c.status === 'active' && onRevoke && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => onRevoke(c)}
                    >
                      Révoquer
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3 text-[12.5px]">
                  <KVLine label="JTI (ID)" mono value={c.jti ?? c.id} />
                  <KVLine label="Émis le" value={c.issuedAt} />
                  <KVLine label="Expire le" value={c.expiresAt} tone={c.status === 'expired' ? 'danger' : undefined} />
                  <KVLine label="Dernier appel" value={c.lastUsed} />
                </div>
                {c.token && <TokenBox token={c.token} style={{ marginTop: 12 }} />}
              </div>
            );
          })}
          {credentials.length === 0 && (
            <div className="p-8 text-center text-[13px] text-(--text-3)">
              Aucun identifiant pour le moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function KVLine({ label, value, mono, tone }: KVLineProps) {
  const color = tone === 'danger' ? 'var(--danger)' : tone === 'warn' ? 'var(--warn)' : undefined;
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-[0.5px] text-(--text-3)">
        {label}
      </div>
      <div
        className="mt-0.5 truncate text-[13px] font-medium"
        style={{ fontFamily: mono ? 'var(--mono)' : undefined, color }}
        title={String(value ?? '')}
      >
        {value ?? '—'}
      </div>
    </div>
  );
}

export function TokenBox({
  token,
  onCopy,
  onDownload,
  filename = 'token.jwt',
  className = '',
  style,
}: TokenBoxProps) {
  const [copied, setCopied] = useState(false);
  const parts = String(token || '').split('.');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(token || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
      onCopy?.(token || '');
    } catch (_) { /* noop */ }
  };

  const handleDownload = () => {
    const blob = new Blob([token || ''], { type: 'application/jwt;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    onDownload?.(token || '');
  };

  return (
    <div className={`tokenbox overflow-hidden rounded-[10px] border border-(--brand-soft) ${className}`} style={{ background: `var(--brand-soft)22`, ...style }}>
      <div className="tokenval overflow-x-auto p-3 font-mono text-[11.5px] leading-[1.6]">
        {parts.length === 3 ? (
          <>
            <span style={{ color: 'var(--dblue)' }}>{parts[0]}</span>
            <span style={{ color: 'var(--text-3)' }}>.</span>
            <span style={{ color: 'var(--text)' }}>{parts[1]}</span>
            <span style={{ color: 'var(--text-3)' }}>.</span>
            <span style={{ color: 'var(--brand)' }}>{parts[2]}</span>
          </>
        ) : (
          <span style={{ color: 'var(--text)' }}>{token || '—'}</span>
        )}
      </div>
      <div className="flex justify-end gap-2 border-t border-(--line-1) bg-(--bg-2) px-3 py-2">
        <Button variant="quiet" size="sm" onClick={handleCopy} icon={<Icon name="obs" size={13} />}>
          {copied ? 'Copié' : 'Copier'}
        </Button>
        <Button variant="quiet" size="sm" onClick={handleDownload} icon={<Icon name="inbox" size={13} />}>
          Télécharger
        </Button>
      </div>
      {parts.length === 3 && (
        <div className="jwtparts grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-t border-(--line-1)">
          <JwtPart label="Header" b64={parts[0]} color="var(--dblue)" />
          <JwtPart label="Payload" b64={parts[1]} color="var(--text-2)" />
          <JwtPart label="Signature" b64={parts[2]} color="var(--brand)" mono />
        </div>
      )}
    </div>
  );
}

function JwtPart({ label, b64, color, mono }: JwtPartProps) {
  const decoded = (() => {
    try {
      const s = atob(b64.replace(/-/g, '+').replace(/_/g, '/'));
      const json = JSON.parse(s);
      return JSON.stringify(json, null, 2);
    } catch (_) {
      return null;
    }
  })();
  return (
    <div className="min-w-0 border-r border-(--line-1) p-3">
      <div className="mb-1.5 text-[10.5px] font-bold uppercase tracking-[0.6px]" style={{ color }}>
        {label}
      </div>
      <pre className="m-0 max-h-40 overflow-auto whitespace-pre-wrap break-all rounded-md bg-(--bg-3) p-2 text-[11px]" style={{ fontFamily: mono ? 'var(--mono)' : undefined, color: decoded ? 'var(--text)' : 'var(--text-3)' }}>
        {decoded ?? b64}
      </pre>
    </div>
  );
}
