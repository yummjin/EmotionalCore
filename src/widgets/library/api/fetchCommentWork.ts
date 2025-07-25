import { REQUEST, userGet } from '@/shared/api';
import { PG_SHOW_ITEM } from '@/shared/constants';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface CommentWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchCommentWork = async (index: number) => {
  const response = await userGet<CommentWorkResponse>({
    request: REQUEST.COMMENT_WORK,
    params: { index, num: PG_SHOW_ITEM },
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
