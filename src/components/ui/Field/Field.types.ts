import type React from 'react';

export interface FieldProps {
  label?: string;
  htmlFor?: string;
  help?: string;
  error?: string;
  invalid?: boolean;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}
