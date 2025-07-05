import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Author } from '../types';

const fetchBestAuthor = async () => {
  const response = await get<Author[]>({
    request: REQUEST.MONTHLY_BEST_AUTHOR,
  });
  return response.data;
};

export const useFetchBestAuthor = () => {
  return useQuery({
    queryKey: ['best-author'],
    queryFn: fetchBestAuthor,
  });
};
