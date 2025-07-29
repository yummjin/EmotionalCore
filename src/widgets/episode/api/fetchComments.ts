import { get, REQUEST } from '@/shared/api';
import { CommentResponse } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

const fetchComments = async (seriesId: string, number: string) => {
  const response = await get<CommentResponse>({
    request: `${REQUEST.COMMENTS}${seriesId}/${number}`,
  });
  return response.data;
};

export const useFetchComments = (seriesId: string, number: string) => {
  return useQuery({
    queryKey: ['comments', seriesId, number],
    queryFn: () => fetchComments(seriesId, number),
    retry: false,
  });
};
