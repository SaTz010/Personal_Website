import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import App from "@/App";

beforeAll(() => {
  vi.stubGlobal("IntersectionObserver", class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
  Object.defineProperty(Element.prototype, "scrollIntoView", { configurable: true, value: vi.fn() });
});

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

afterAll(() => vi.unstubAllGlobals());

describe("portfolio navigation", () => {
  it("introduces the work with one main heading and a project shortcut", () => {
    render(<App />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("link", { name: "View projects" })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("heading", { name: "professional experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "education" })).toBeInTheDocument();
  });

  it("switches between professional and casual landing views", () => {
    const { container } = render(<App />);
    const work = screen.getByRole("button", { name: "Here for work" });
    const casual = screen.getByRole("button", { name: "Just exploring" });

    expect(work).toHaveAttribute("aria-pressed", "true");
    expect(container.querySelector(".landing-page")).toHaveAttribute("data-audience", "work");
    expect(screen.queryByRole("heading", { name: "Alright, back to work." })).not.toBeInTheDocument();
    fireEvent.click(casual);

    expect(casual).toHaveAttribute("aria-pressed", "true");
    expect(work).toHaveAttribute("aria-pressed", "false");
    expect(container.querySelector(".landing-page")).toHaveAttribute("data-audience", "casual");
    expect(screen.getByRole("heading", { level: 1, name: /A few rounds/ })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Away from work, you'll find me…" })).toHaveAttribute("id", "outside-work");
    expect(screen.getByRole("link", { name: "Pick a plan" })).toHaveAttribute("href", "#outside-work");
    expect(screen.getByRole("link", { name: /Hamro Bhasha/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Alright, back to work." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See my projects" })).toHaveAttribute("href", "#projects");
    expect(screen.queryByRole("heading", { name: "professional experience" })).not.toBeInTheDocument();

    fireEvent.click(work);
    expect(work).toHaveAttribute("aria-pressed", "true");
    expect(container.querySelector(".landing-page")).toHaveAttribute("data-audience", "work");
    expect(screen.queryByRole("region", { name: "Away from work, you'll find me…" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "professional experience" })).toBeInTheDocument();
  });

  it("switches views from the icon controls beside the logo", () => {
    const { container } = render(<App />);
    const controls = within(screen.getByRole("banner")).getByRole("group", { name: "Choose your view" });
    const work = within(controls).getByRole("button", { name: "Work view" });
    const casual = within(controls).getByRole("button", { name: "Casual view" });

    expect(work).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(casual);
    expect(casual).toHaveAttribute("aria-pressed", "true");
    expect(container.querySelector(".landing-page")).toHaveAttribute("data-audience", "casual");
    expect(screen.getByRole("button", { name: "Just exploring" })).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(work);
    expect(work).toHaveAttribute("aria-pressed", "true");
    expect(container.querySelector(".landing-page")).toHaveAttribute("data-audience", "work");
  });

  it("scrolls the casual invitation shortcut to the hobbies section", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Just exploring" }));
    vi.clearAllMocks();

    window.history.pushState({}, "", "/#outside-work");
    fireEvent.popState(window);

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledOnce();
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it("opens the profile from casual mode without leaking its landing theme", () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Just exploring" }));
    fireEvent.click(screen.getByRole("link", { name: "Get to know me" }));

    expect(window.location.pathname).toBe("/people");
    expect(screen.getByRole("heading", { level: 1, name: "Sanskar Ananta Tiwari" })).toBeInTheDocument();
    expect(container.querySelector(".landing-page")).not.toBeInTheDocument();
  });

  it.each([
    ["Hamro Bhasha", "/hamro-bhasa", "Google Play", "https://play.google.com/store/apps/details?id=com.gyawalitechnologies.pathshala"],
    ["Meltdown Nepal", "/meltdown-nepal", "Visit website", "https://meltdownnepal.com/"],
    ["Nepali–English Speech Recognition", "/speech-research", "View repository", "https://github.com/SaTz010/Research-asr"],
    ["AURA", "/aura", "View repository", "https://github.com/SaTz010/AURA"],
    ["CloudSnap", "/cloudsnap", "View repository", "https://github.com/SaTz010/CloudSnap"],
    ["Code vs Goal", "/code-vs-goal", "View repository", "https://github.com/SaTz010/Coad-VS-Goal"],
  ])("opens %s from selected work", (title, path, linkName, destination) => {
    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: new RegExp(title) }));

    expect(window.location.pathname).toBe(path);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "My contributions" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Result & current status" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: linkName })).toHaveAttribute("href", destination);
    expect(window.scrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: "instant" });
  });

  it("links the Meltdown app to its official Android and iOS listings", () => {
    window.history.replaceState({}, "", "/meltdown-nepal");
    render(<App />);

    expect(screen.getByRole("link", { name: "Google Play" })).toHaveAttribute("href", "https://play.google.com/store/apps/details?id=com.corewalkers.meltdown");
    expect(screen.getByRole("link", { name: "App Store" })).toHaveAttribute("href", "https://apps.apple.com/np/app/meltdown-employee-wellbeing/id6445954625");
    expect(screen.getByRole("link", { name: "Visit website" })).toHaveAttribute("href", "https://meltdownnepal.com/");
  });

  it("returns from a project to the selected work section", () => {
    window.history.replaceState({}, "", "/aura");
    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: "All projects" }));

    expect(window.location.pathname).toBe("/");
    expect(window.location.hash).toBe("#projects");
    expect(screen.getByRole("link", { name: /AURA/ })).toBeInTheDocument();
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledOnce();
  });

  it("opens the expanded profile and follows its research and contact links", () => {
    render(<App />);
    fireEvent.click(within(screen.getByRole("navigation", { name: "Main navigation" })).getByRole("link", { name: "profile" }));

    expect(screen.getByRole("heading", { level: 1, name: "Sanskar Ananta Tiwari" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Portrait placeholder for Sanskar Ananta Tiwari" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: /Nepali–English speech recognition/ }));
    expect(window.location.pathname).toBe("/speech-research");

    fireEvent.click(within(screen.getByRole("navigation", { name: "Main navigation" })).getByRole("link", { name: "profile" }));
    fireEvent.click(screen.getByRole("link", { name: "Start a conversation" }));
    expect(screen.getByRole("heading", { level: 1, name: "Let's Connect" })).toBeInTheDocument();
  });

  it("opens contact details and marks the current navigation page", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("link", { name: "Contact me" }));

    expect(screen.getByRole("heading", { level: 1, name: "Let's Connect" })).toBeInTheDocument();
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    expect(within(navigation).getByRole("link", { name: "connect" })).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByRole("link", { name: "tiwarisanskar123@gmail.com" })[0]).toHaveAttribute("href", "mailto:tiwarisanskar123@gmail.com");
  });
});
