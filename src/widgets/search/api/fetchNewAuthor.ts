import { get, REQUEST } from '@/shared/api';
import type { Author } from '../types';
import { useQuery } from '@tanstack/react-query';

export const fetchNewAuthor = async () => {
  const response = await get<Author[]>({
    request: REQUEST.NEW_AUTHOR,
  });

  return response.data;
};

export const useFetchNewAuthor = () => {
  return useQuery({
    queryKey: ['newWork'],
    queryFn: fetchNewAuthor,
  });
};
