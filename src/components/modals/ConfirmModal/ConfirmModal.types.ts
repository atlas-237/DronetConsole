import type React from 'react';
export interface ConfirmModalProps { open: boolean; onClose?: () => void; title?: string; message?: React.ReactNode; confirmLabel?: string; cancelLabel?: string; danger?: boolean; onConfirm?: () => void; footer?: React.ReactNode; }
