import type { ReactNode } from 'react';

export interface AttentionItem {
  id: string;
  label: string;
  detail?: ReactNode;
  disabled?: boolean;
}

export interface AttentionPopoverProps {
  items?: AttentionItem[];
  open?: boolean;
  calm?: boolean;
  onToggle?: () => void;
  onSelect?: (item: AttentionItem) => void;
  onClose?: () => void;
  className?: string;
}
