import type React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm?: () => void;
  hideFooter?: boolean;
  footer?: React.ReactNode;
  size?: ModalSize;
  hideCloseButton?: boolean;
  closeLabel?: string;
}
