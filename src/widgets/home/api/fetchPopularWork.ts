import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Work } from '@/shared/types';

export const fetchPopularWork = async () => {
  const response = await get<Work[]>({
    request: REQUEST.MONTHLY_POPULAR_WORK,
  });
  return response.data;
};

export const useFetchPopularWork = () => {
  return useQuery({
    queryKey: ['popular-work'],
    queryFn: fetchPopularWork,
  });
};
