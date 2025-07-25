export type Work = {
  id: number;
  authorId: number;
  authorName: string;
  title: string;
  coverImageUrl: string;
};

export type WorkDetail = Work & {
  description: string;
  type: string;
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  tags: string[];
};
