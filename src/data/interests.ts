interface PersonalStat {
  label: string;
  value: string | null;
}

export const valorantStats: PersonalStat[] = [
  { label: "Current rank", value: null },
  { label: "Peak rank", value: null },
  { label: "Favorite agent", value: null },
  { label: "Hours played", value: null },
  { label: "Usual queue time", value: null },
  { label: "Wildcard stat", value: null },
];

export const gymStats: PersonalStat[] = [
  { label: "Sessions / week", value: null },
  { label: "Favorite lift", value: null },
  { label: "Wildcard stat", value: null },
];

export const sportsFavorites: {
  teams: string[];
  players: string[];
  idol: string | null;
} = {
  teams: [],
  players: [],
  idol: null,
};
