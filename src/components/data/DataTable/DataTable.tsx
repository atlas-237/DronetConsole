import { useState } from 'react';
import type React from 'react';
import Icon from '@icons';
import type { DataTableColumn, DataTableProps, SortState, TableRow } from './DataTable.types';

function DefaultCellContent({ value }: { value: unknown }) {
  if (value == null) return null;
  if (typeof value === 'object' && 'main' in value) {
    const cell = value as { main: unknown; sub?: unknown };
    return <><div className="cellmain">{cell.main as React.ReactNode}</div>{cell.sub != null && <div className="cellsub">{cell.sub as React.ReactNode}</div>}</>;
  }
  return <div className="cellmain">{value as React.ReactNode}</div>;
}

export default function DataTable({ columns, rows, selectedId, onRowClick, onSort, emptyNode, className = '' }: DataTableProps) {
  const [sortState, setSortState] = useState<SortState>({ key: null, dir: 'asc' });
  const normCols: DataTableColumn[] = columns.map(column => ({ ...column, header: column.header ?? column.label, key: column.key }));
  const handleSort = (column: DataTableColumn) => {
    if (!column.sortable) return;
    const dir: SortState['dir'] = sortState.key === column.key && sortState.dir === 'asc' ? 'desc' : 'asc';
    setSortState({ key: column.key, dir });
    onSort?.(column.key, dir);
  };
  const wrapperClasses = ['tablewrap'];
  if (className) wrapperClasses.push(className);
  return <div className={wrapperClasses.join(' ')}><table className="tbl"><thead><tr>{normCols.map(column => {
    const isSorted = sortState.key === column.key;
    return <th key={column.key}>{column.sortable ? <button type="button" onClick={() => handleSort(column)}><span>{column.header}</span>{isSorted && <Icon name="chev" size={12} className={sortState.dir === 'desc' ? 'rotate-90' : '-rotate-90'} />}</button> : column.header}</th>;
  })}</tr></thead><tbody>{rows.length === 0 ? <tr><td colSpan={normCols.length}>{emptyNode}</td></tr> : rows.map((row, rowIdx) => {
    const rowId = row.id as string | number | undefined;
    const isSelected = selectedId !== undefined && rowId === selectedId;
    return <tr key={rowId ?? rowIdx} aria-selected={isSelected} onClick={() => onRowClick?.(row)} className={onRowClick ? 'cursor-pointer' : undefined}>{normCols.map(column => { const rawValue = row[column.key]; const content = column.render ? column.render(row, rawValue) : <DefaultCellContent value={rawValue} />; return <td key={column.key}>{content}</td>; })}</tr>;
  })}</tbody></table></div>;
}
