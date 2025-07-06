import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Tag } from '../types';

const fetchAllTag = async () => {
  const response = await get<Tag[]>({
    request: REQUEST.ALL_TAG,
  });
  return response.data;
};

export const useFetchAllTag = () => {
  return useQuery({
    queryKey: ['allTag'],
    queryFn: fetchAllTag,
  });
};
