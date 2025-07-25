import { REQUEST, userGet } from '@/shared/api';
import { PG_SHOW_ITEM } from '@/shared/constants';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface LikedWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchLikedWork = async (index: number) => {
  const response = await userGet<LikedWorkResponse>({
    request: REQUEST.LIKED_WORK,
    params: { index, num: PG_SHOW_ITEM },
  });
  return response.data;
};

export const useFetchLikedWork = (index: number) => {
  return useQuery({
    queryKey: ['likedWork', index],
    queryFn: () => fetchLikedWork(index),
    retry: false,
  });
};
