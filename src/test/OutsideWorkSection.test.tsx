import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import OutsideWorkSection from "@/components/OutsideWorkSection";
import { sportsFavorites } from "@/data/interests";

vi.mock("@/data/interests", () => ({
  valorantStats: [
    { label: "Current rank", value: null },
    { label: "Hours played", value: "0" },
    { label: "Clutches in my head", value: "All of them" },
  ],
  gymStats: [
    { label: "Gym stat one", value: null },
    { label: "Gym stat two", value: null },
    { label: "Gym stat three", value: null },
  ],
  sportsFavorites: { teams: [], players: [], idol: null },
}));

afterEach(() => {
  cleanup();
  sportsFavorites.teams.length = 0;
  sportsFavorites.players.length = 0;
  sportsFavorites.idol = null;
});

describe("personal interest sections", () => {
  it("handles missing stats, zero hours, and funny labels in their own sections", () => {
    render(<OutsideWorkSection />);
    const valorant = within(screen.getByRole("region", { name: "VALORANT" }));
    const gym = within(screen.getByRole("region", { name: "Gym & fitness" }));
    const sports = within(screen.getByRole("region", { name: "Sports" }));

    expect(valorant.getByText("Coming soon")).toBeInTheDocument();
    expect(valorant.getByText("0")).toBeInTheDocument();
    expect(valorant.getByText("Clutches in my head")).toBeInTheDocument();
    expect(valorant.getByText("All of them")).toBeInTheDocument();
    expect(gym.getAllByText("Coming soon")).toHaveLength(3);
    expect(sports.getByText("To be revealed")).toBeInTheDocument();
    expect(valorant.getByRole("link", { name: "Wanna play together?" })).toHaveAttribute("href", "mailto:tiwarisanskar123@gmail.com?subject=VALORANT%20game");
    expect(gym.getByRole("link", { name: "Hit the gym together" })).toHaveAttribute("href", "mailto:tiwarisanskar123@gmail.com?subject=Gym%20session");
    expect(sports.getByRole("link", { name: "Watch a game together" })).toHaveAttribute("href", "mailto:tiwarisanskar123@gmail.com?subject=Watch%20a%20game%20together");
  });

  it("shows supplied sports favorites in place of placeholders", () => {
    sportsFavorites.teams.push("Example FC", "Example Racing");
    sportsFavorites.players.push("Favorite player");
    sportsFavorites.idol = "All-time favorite";
    render(<OutsideWorkSection />);

    const sports = within(screen.getByRole("region", { name: "Sports" }));
    expect(sports.getByText("Example FC · Example Racing")).toBeInTheDocument();
    expect(sports.getByText("Favorite player")).toBeInTheDocument();
    expect(sports.getByText("All-time favorite")).toBeInTheDocument();
    expect(sports.queryByText("Favorites coming soon")).not.toBeInTheDocument();
  });
});
