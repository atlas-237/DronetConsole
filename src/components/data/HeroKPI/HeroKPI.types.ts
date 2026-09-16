import type React from 'react';

export type KPIValue = string | number;
export type KPITone = 'ok' | 'warn' | 'danger';

export interface HeroKPIItem {
  key?: string;
  label?: string;
  value: KPIValue;
  unit?: string;
  tone?: KPITone;
  note?: React.ReactNode;
  sub?: React.ReactNode;
}

export interface HeroKPIProps {
  items: HeroKPIItem[];
  className?: string;
}
