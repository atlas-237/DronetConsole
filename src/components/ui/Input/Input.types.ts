import type React from 'react';

export type InputElement = 'input' | 'select' | 'textarea';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
  as?: 'input';
  icon?: React.ReactNode;
  invalid?: boolean;
}

export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  as: 'select';
  icon?: React.ReactNode;
  invalid?: boolean;
  children?: React.ReactNode;
}

export interface TextareaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
  icon?: React.ReactNode;
  invalid?: boolean;
}

export type InputComponentProps = InputProps | SelectInputProps | TextareaInputProps;
