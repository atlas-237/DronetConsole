import type React from 'react';
export interface Fact { label: string; value: React.ReactNode; mono?: boolean; tone?: 'default' | 'ok' | 'warn' | 'danger'; }
export interface FactsGridProps { facts: Fact[]; columns?: number; className?: string; }