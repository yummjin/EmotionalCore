import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Novel } from '../types';

export const fetchRecommend = async (type: 'poem' | 'novel') => {
  const request =
    type === 'poem' ? REQUEST.RECOMMEND_POEM : REQUEST.RECOMMEND_NOVEL;
  const response = await get<Novel[]>({
    request: request,
  });
  return response.data;
};

export const useFetchRecommend = (type: 'poem' | 'novel') => {
  return useQuery({
    queryKey: ['recommend', type],
    queryFn: () => fetchRecommend(type),
  });
};
