import { get, REQUEST } from '@/shared/api';
import type { Work } from '../types';
import { useQuery } from '@tanstack/react-query';

export const fetchWebtoon = async () => {
  const response = await get<Work[]>({
    request: REQUEST.RECOMMEND_WEBTOON,
  });
  return response.data;
};

export const useFetchWebtoon = () => {
  return useQuery({
    queryKey: ['webtoon'],
    queryFn: fetchWebtoon,
  });
};
