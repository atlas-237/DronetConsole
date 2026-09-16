import type React from 'react';
export interface SearchItem { id?: string | number; title: string; subtitle?: string; search?: string; icon?: string | React.ReactNode; color?: string; shape?: 'square' | 'diamond'; meta?: string; [key: string]: unknown; }
export interface SearchSource { title: string; icon?: string; items?: SearchItem[]; max?: number; }
export interface GlobalSearchProps { placeholder?: string; sources?: SearchSource[]; onSelect?: (item: SearchItem, group: SearchSource) => void; className?: string; }