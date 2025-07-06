import { get, REQUEST } from '@/shared/api';
import type { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

const fetchNewWork = async () => {
  const response = await get<Work[]>({
    request: REQUEST.NEW_WORK,
  });

  return response.data;
};

export const useFetchNewWork = () => {
  return useQuery({
    queryKey: ['newWork'],
    queryFn: fetchNewWork,
  });
};
