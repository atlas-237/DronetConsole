import { describe, expect, it, vi } from "vitest";
import { createRoot } from "react-dom/client";
import Notice from "./Notice";
describe("Notice", () => {
  it("rend et ferme", async () => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    const root = createRoot(el);
    const close = vi.fn();
    root.render(<Notice onClose={close}>Message</Notice>);
    await new Promise((r) => setTimeout(r, 0));
    expect(el.querySelector('[role="status"]')?.textContent).toContain(
      "Message",
    );
    (el.querySelector("button") as HTMLButtonElement).click();
    expect(close).toHaveBeenCalledOnce();
    root.unmount();
    el.remove();
  });
});
