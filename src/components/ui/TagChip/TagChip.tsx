import type { TagChipProps } from "./TagChip.types";
export default function TagChip({
  label,
  tone,
  removable = false,
  onRemove,
  children,
  className = "",
  ...rest
}: TagChipProps) {
  return (
    <span className={`tchip ${tone || ""} ${className}`} {...rest}>
      <span className="g" />
      {children || label}
      {removable && (
        <button
          type="button"
          aria-label={`Retirer ${label || "le tag"}`}
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  );
}
