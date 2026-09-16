import type React from 'react';
export interface RowAction { label: string; onClick?: React.MouseEventHandler<HTMLButtonElement>; icon?: React.ReactNode; disabled?: boolean; danger?: boolean; }
export interface RowActionsProps { actions: RowAction[]; className?: string; }