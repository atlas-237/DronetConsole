import React from 'react';
import type { FieldProps } from './Field.types';

export default function Field({
  label,
  htmlFor,
  help,
  error,
  required = false,
  children,
  className = '',
}: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className="text-xs font-medium text-(--text-2)">
          {label}
          {required && <span className="ml-0.5 text-(--danger)">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span className="text-[11px] text-(--danger)">{error}</span>
      ) : help ? (
        <span className="text-[11px] text-(--text-3)">{help}</span>
      ) : null}
    </div>
  );
}
