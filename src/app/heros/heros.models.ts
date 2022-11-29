export type HeroType = {
  userId: number;
  id: number;
  name: string;
  powers: string;
  description?: string;
  rating: number;
}

export type HeroListType = HeroType[];

export type HeroListPaginationType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: HeroListType;
}
