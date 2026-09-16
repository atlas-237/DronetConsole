import { Modal } from '@components/feedback';
import type { ConfirmModalProps } from './ConfirmModal.types';

export default function ConfirmModal({ open, onClose, title, message, confirmLabel, cancelLabel, danger, onConfirm, footer }: ConfirmModalProps) {
  return <Modal open={open} onClose={onClose} title={title} confirmLabel={confirmLabel} cancelLabel={cancelLabel} danger={danger} onConfirm={onConfirm} footer={footer}>{typeof message === 'string' ? <div className="text-(--text-2) text-[13.5px] leading-normal">{message}</div> : message}</Modal>;
}
