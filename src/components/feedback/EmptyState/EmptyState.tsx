import Icon from "@icons";
import { Button } from "@components/ui";
import type { EmptyStateProps } from "./EmptyState.types";

export default function EmptyState({
  title,
  text,
  iconName = "inbox",
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="state mx-auto max-w-110 px-6.5 py-11 text-center">
      <div className="ico mx-auto mb-3.5 grid size-10 place-items-center rounded-[10px] bg-(--surface-3) text-(--text-2)">
        <Icon name={iconName} size={22} />
      </div>
      {title && <h3 className="mb-1.5">{title}</h3>}
      {text && <p className="mb-4 text-[13.5px] text-(--text-2)">{text}</p>}
      {actionLabel && onAction && (
        <div className="actions flex flex-wrap justify-center gap-2.25">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
