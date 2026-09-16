import type React from 'react';

export type TableRow = Record<string, unknown>;
export interface DataTableColumn {
  key: string;
  header?: string;
  label?: string;
  sortable?: boolean;
  render?: (row: TableRow, value: unknown) => React.ReactNode;
}
export interface SortState { key: string | null; dir: 'asc' | 'desc'; }
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: TableRow[];
  selectedId?: string | number;
  onRowClick?: (row: TableRow) => void;
  onSort?: (key: string, dir: SortState['dir']) => void;
  emptyNode?: React.ReactNode;
  className?: string;
}
