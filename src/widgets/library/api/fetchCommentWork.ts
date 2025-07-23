import { REQUEST, userGet } from '@/shared/api';
import { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

interface CommentWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchCommentWork = async (index: number) => {
  const response = await userGet<CommentWorkResponse>({
    request: REQUEST.COMMENT_WORK,
    params: { index, num: 12 },
  });
  return response.data;
};

export const useFetchCommentWork = (index: number) => {
  return useQuery({
    queryKey: ['commentWork', index],
    queryFn: () => fetchCommentWork(index),
    retry: false,
  });
};
