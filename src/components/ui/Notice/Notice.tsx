import type { NoticeProps } from "./Notice.types";
export default function Notice({
  tone = "info",
  title,
  children,
  onClose,
  className = "",
}: NoticeProps) {
  return (
    <div className={`notice ${tone} ${className}`} role="status">
      {title && <strong>{title}</strong>}
      <span>{children}</span>
      {onClose && (
        <button type="button" aria-label="Fermer" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
}
