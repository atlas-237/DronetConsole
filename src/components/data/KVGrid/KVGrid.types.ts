import type React from 'react';

export type KVValue = React.ReactNode;
export type KVTone = 'ok' | 'warn' | 'danger';
export interface KVOptions { tone?: KVTone; }
export interface KVEntry {
  key?: string;
  label?: string;
  value: KVValue;
  unit?: string;
  tone?: KVTone;
}
export type KVPair = [string, KVValue, KVOptions?] | KVEntry;
export interface KVGridProps {
  items?: KVEntry[];
  pairs?: KVPair[];
  className?: string;
  style?: React.CSSProperties;
}
