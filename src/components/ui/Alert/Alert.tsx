import React from 'react';

import Icon from '@icons';
import Button from '../Button/Button';

import type { AlertProps } from './Alert.types';

const palette = {
  info: {
    bg: 'var(--brand-soft)22',
    border: 'var(--brand-soft)',
    color: 'var(--brand)',
    icon: 'info',
  },
  ok: {
    bg: 'var(--ok-soft)33',
    border: 'var(--ok-soft)',
    color: 'var(--ok)',
    icon: 'check',
  },
  warn: {
    bg: 'var(--warn-soft)22',
    border: 'var(--warn-soft)',
    color: 'var(--warn)',
    icon: 'alert',
  },
  danger: {
    bg: 'var(--danger-soft)22',
    border: 'var(--danger-soft)',
    color: 'var(--danger)',
    icon: 'alert',
  },
} as const;

const Alert = ({
  tone = 'info',
  title,
  children,
  action,
  onAction,
  icon,
  dismissible = false,
  onDismiss,
  style,
  className = '',
}: AlertProps) => {
  const currentPalette = palette[tone];

  return (
    <div
      role={
        tone === 'danger' || tone === 'warn'
          ? 'alert'
          : 'status'
      }
      className={`alert alert-${tone} flex items-start gap-2.5 rounded-lg border px-3.5 py-2.5 text-xs leading-[1.45] ${className}`}
      style={{
        background: currentPalette.bg,
        borderColor: currentPalette.border,
        borderRadius: 8,
        color: currentPalette.color,
        ...style,
      }}
    >
      <div
        className="flex shrink-0 pt-px"
      >
        {icon ?? (
          <Icon name={currentPalette.icon}
                size={16}
                className={undefined}
            />
        )}
      </div>

      <div
        className="min-w-0 flex-1"
      >
        {title && (
          <div
            className="mb-0.5 font-bold"
          >
            {title}
          </div>
        )}

        <div className="text-(--text-2)">
          {children}
        </div>
      </div>

      {action && (
        <Button
          size="sm"
          variant="quiet"
          onClick={onAction}
          className="shrink-0"
          style={{ color: currentPalette.color, borderColor: currentPalette.border }}
        >
          {action}
        </Button>
      )}

      {dismissible && !action && (
        <button
          type="button"
          aria-label="Fermer l’alerte"
          onClick={onDismiss}
          className="inline-flex shrink-0 cursor-pointer border-0 bg-transparent p-0.5 opacity-70"
          style={{ color: currentPalette.color }}
        >
          <Icon 
            name="close"
            size={13}
            className={undefined}
            />
        </button>
      )}
    </div>
  );
};

export default Alert;