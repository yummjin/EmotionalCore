import { get, REQUEST } from '@/shared/api';
import type { Work } from '../types';
import { useQuery } from '@tanstack/react-query';

const fetchBestWork = async () => {
  const response = await get<Work[]>({
    request: REQUEST.BEST_TODAY,
    params: { limit: 5 },
  });
  return response.data;
};

export const useFetchBestWork = () => {
  return useQuery({
    queryKey: ['best-work'],
    queryFn: fetchBestWork,
  });
};
