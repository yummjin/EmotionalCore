import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Keyword } from '../types';

export const fetchKeywords = async () => {
  const response = await get<Keyword[]>({
    request: REQUEST.KEYWORDS,
  });

  return response.data;
};

export const useFetchKeywords = () => {
  return useQuery({
    queryKey: ['keywords'],
    queryFn: fetchKeywords,
  });
};
