import type { EpisodeDetail } from './episode';
import type { User } from './user';

export type Comment = {
  id: number;
  commentId: number;
  seriesId: number;
  number: number;
  episode: EpisodeDetail;
  commentContents: string;
  commentDate: string;
  commentLike: number;
  member: Omit<User, 'tags'>;
};

export type CommentResponse = Comment[];

export type CreateCommentRequest = {
  content: string;
  episodeId: string;
  workId: string;
};

export type LikeCommentRequest = {
  commentId: string;
};
