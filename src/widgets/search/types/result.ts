export type SearchResultResponse = {
  seriesDetailDTOList: WorkDto[];
  authorDTOList: AuthorDto[];
};

export type WorkDto = {
  id: number;
  authorId: number;
  authorName: string;
  title: string;
  coverImageUrl: string;
  description: string;
  type: string;
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  tags: string[];
};

export type AuthorDto = {
  id: number;
  authorName: string;
  seriesCount: number;
  description: string;
  links: string;
  tags: string[];
  profileImageUrl: string;
};
