import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PointerFollower from "@/components/PointerFollower";

let media: MediaQueryList;

beforeEach(() => {
  media = Object.assign(new EventTarget(), { matches: true, media: "", onchange: null, addListener: vi.fn(), removeListener: vi.fn() }) as MediaQueryList;
  vi.spyOn(window, "matchMedia").mockReturnValue(media);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const pointer = (type: string, target: Element | Window, pointerType = "mouse") => {
  const event = new MouseEvent(type, { bubbles: true, clientX: 120, clientY: 90 });
  Object.defineProperty(event, "pointerType", { value: pointerType });
  fireEvent(target, event);
};

describe("pointer animation", () => {
  it("reacts to links and clicks, then hides and removes its listeners", () => {
    const { container, unmount } = render(<><PointerFollower /><a href="/connect"><span>Contact</span></a></>);
    const follower = container.querySelector(".pointer-follower");
    const linkText = screen.getByText("Contact");

    expect(follower).toHaveAttribute("aria-hidden", "true");
    expect(follower).toHaveAttribute("data-visible", "false");
    pointer("pointermove", linkText);
    expect(follower).toHaveAttribute("data-visible", "true");
    expect(follower).toHaveAttribute("data-interactive", "true");
    pointer("pointerdown", linkText);
    expect(follower).toHaveAttribute("data-pressed", "true");
    pointer("pointerup", linkText);
    expect(follower).toHaveAttribute("data-pressed", "false");
    fireEvent.blur(window);
    expect(follower).toHaveAttribute("data-visible", "false");

    unmount();
    pointer("pointermove", window);
    expect(follower).toHaveAttribute("data-visible", "false");
  });

  it.each(["touch", "pen"])("ignores %s input", (pointerType) => {
    const { container } = render(<PointerFollower />);
    pointer("pointermove", window, pointerType);
    expect(container.firstChild).toHaveAttribute("data-visible", "false");
  });

  it("stops when motion or pointer preferences disable it", () => {
    const { container } = render(<PointerFollower />);
    pointer("pointermove", window);
    expect(container.firstChild).toHaveAttribute("data-visible", "true");

    Object.defineProperty(media, "matches", { value: false });
    media.dispatchEvent(new Event("change"));
    expect(container.firstChild).toHaveAttribute("data-visible", "false");
    pointer("pointermove", window);
    expect(container.firstChild).toHaveAttribute("data-visible", "false");
    expect(window.matchMedia).toHaveBeenCalledWith(expect.stringContaining("prefers-reduced-motion: no-preference"));
  });
});
