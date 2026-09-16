import React, { forwardRef } from 'react';
import type { InputComponentProps } from './Input.types';

const baseClasses = 'w-full rounded-lg border border-(--line-1) bg-(--bg-2) px-3 py-2 text-[13px] text-(--text) outline-none transition-colors placeholder:text-(--text-3) focus:border-(--brand) focus:ring-1 focus:ring-(--brand) disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-(--danger)';

const Input = forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, InputComponentProps>(function Input(
  { as = 'input', icon, className = '', invalid = false, ...props },
  ref,
) {
  const fieldClassName = icon ? `${baseClasses} min-w-0 border-0 bg-transparent px-0 py-0 focus:border-0 focus:ring-0` : `${baseClasses} ${className}`;
  let field: React.ReactNode;

  if (as === 'select') {
    field = <select ref={ref as React.Ref<HTMLSelectElement>} className={fieldClassName} aria-invalid={invalid || undefined} {...props as React.SelectHTMLAttributes<HTMLSelectElement>} />;
  } else if (as === 'textarea') {
    field = <textarea ref={ref as React.Ref<HTMLTextAreaElement>} className={fieldClassName} aria-invalid={invalid || undefined} {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />;
  } else {
    field = <input ref={ref as React.Ref<HTMLInputElement>} className={fieldClassName} aria-invalid={invalid || undefined} {...props as React.InputHTMLAttributes<HTMLInputElement>} />;
  }

  if (!icon) return field;

  return (
    <div className={`inline-flex min-h-9.5 w-full items-center gap-2 rounded-lg border border-(--line-1) bg-(--bg-2) px-3 text-(--text-3) ${className}`}>
      {icon}
      {field}
    </div>
  );
});

export default Input;
