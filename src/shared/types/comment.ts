export type Comment = {
  id: string;
  content: string;
  authorName: string;
  profileImageUrl: string;
  likeCount: number;
  createdAt: string;
  isLiked: boolean;
};

export type CommentResponse = {
  content: Comment[];
  totalCount: number;
};

export type CreateCommentRequest = {
  content: string;
  episodeId: string;
  workId: string;
};

export type LikeCommentRequest = {
  commentId: string;
};
