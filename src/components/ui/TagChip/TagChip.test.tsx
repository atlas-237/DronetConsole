import { describe, expect, it, vi } from "vitest";
import { createRoot } from "react-dom/client";
import TagChip from "./TagChip";
describe("TagChip", () => {
  it("affiche et retire un tag", async () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    const root = createRoot(el);
    const remove = vi.fn();
    root.render(<TagChip label="Drone" removable onRemove={remove} />);
    await new Promise((r) => setTimeout(r, 0));
    expect(el.querySelector(".tchip")?.textContent).toContain("Drone");
    (el.querySelector("button") as HTMLButtonElement).click();
    expect(remove).toHaveBeenCalledOnce();
    root.unmount();
    el.remove();
  });
});
