import { useEffect, useRef } from "react";
import type React from "react";
import { Button } from "@components/ui";
import Icon from "@icons";
import type { ModalProps } from "./Modal.types";

export default function Modal({
  open,
  onClose,
  title,
  children,
  confirmLabel = "Confirmer",
  cancelLabel = "Annuler",
  danger = false,
  onConfirm,
  hideFooter = false,
  footer,
  size = "md",
  hideCloseButton = false,
  closeLabel = "Fermer",
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const sizeWidth = (
    {
      sm: "min(420px, 100%)",
      md: "min(560px, 100%)",
      lg: "min(760px, 100%)",
      xl: "min(960px, 100%)",
      full: "calc(100% - 32px)",
    } as Record<NonNullable<ModalProps["size"]>, string>
  )[size ?? "md"];
  useEffect(() => {
    if (!open) return undefined;
    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
        return;
      }
      if (event.key === "Tab" && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    const focusable = modalRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    (focusable || modalRef.current)?.focus();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus();
    };
  }, [open, onClose]);
  if (!open) return null;
  const handleScrimClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose?.();
  };
  const footerContent =
    footer !== undefined ? (
      footer
    ) : !hideFooter ? (
      <>
        <Button variant="default" onClick={onClose}>
          {cancelLabel}
        </Button>
        <Button variant={danger ? "danger" : "primary"} onClick={onConfirm}>
          {confirmLabel}
        </Button>
      </>
    ) : null;
  return (
    <div className="scrim fixed inset-0 z-60 grid place-items-center bg-black/65 p-4.5" onClick={handleScrimClick} data-open="true">
      <div
        ref={modalRef}
        className="modal flex max-h-[88vh] flex-col rounded-(--r-lg) border border-(--line) bg-(--surface) shadow-[0_28px_70px_rgba(0,0,0,.68)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        tabIndex={-1}
        style={{ width: sizeWidth, maxWidth: sizeWidth }}
      >
        <div className="modal-head flex items-center gap-2.5 border-b border-(--line-soft) px-4.5 py-4">
          {title && <h2 id="modal-title">{title}</h2>}
          {!hideCloseButton && (
            <button
              type="button"
              aria-label={closeLabel}
              onClick={onClose}
              className="btn btn-icon btn-quiet ml-auto inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-(--line) bg-transparent p-0 text-(--text-3)"
            >
              <Icon name="close" size={14} />
            </button>
          )}
        </div>
        <div className="modal-body overflow-y-auto p-4.5">{children}</div>
        {footerContent && <div className="modal-foot flex justify-end gap-2.25 border-t border-(--line-soft) px-4.5 py-3.5">{footerContent}</div>}
      </div>
    </div>
  );
}
