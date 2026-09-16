import type React from 'react';

export interface ToastProps {
  msg: React.ReactNode;
  undo?: () => void;
  onDismiss: () => void;
}
