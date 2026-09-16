import { useState } from "react";
import Icon from "@icons";
import type { PanelProps } from "./Panel.types";

export default function Panel({
  title,
  icon,
  right,
  children,
  tightBody = false,
  collapsible = false,
  defaultOpen = true,
  className = "",
}: PanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelClasses = [
    "panel",
    "mb-[18px] rounded-[var(--r-lg)] border border-(--line) bg-(--surface)",
  ];
  if (className) panelClasses.push(className);
  const bodyClasses = ["panel-body", tightBody ? "p-0" : "p-4"];
  const handleToggle = () => {
    if (collapsible) setIsOpen((value) => !value);
  };
  return (
    <section className={panelClasses.join(" ")}>
      {collapsible ? (
        <button
          type="button"
          className="ph-btn flex w-full items-center gap-2.5 border-0 px-4 py-3 text-left"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          {icon}
          <h2>{title}</h2>
          {right && <div className="ph-sum">{right}</div>}
          <Icon name="chev" size={15} className="ph-chev" />
        </button>
      ) : (
        <div className="panel-head flex items-center gap-2.5 border-b border-(--line-soft) px-4 py-3">
          {icon}
          <h2 className="text-sm">{title}</h2>
          {right && (
            <div className="right ml-auto flex items-center gap-2">{right}</div>
          )}
        </div>
      )}
      {collapsible ? (
        <div className="ph-body" hidden={!isOpen}>
          <div className={bodyClasses.join(" ")}>{children}</div>
        </div>
      ) : (
        <div className={bodyClasses.join(" ")}>{children}</div>
      )}
    </section>
  );
}
