export type Episode = {
  seriesId: number;
  number: number;
  title: string;
  coverImageUrl: string;
  viewCount: number;
  createdAt: string;
};

export type EpisodeDetail = Episode & { description: string; contents: string };
