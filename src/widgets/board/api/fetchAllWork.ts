import { get, REQUEST } from '@/shared/api';
import { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

const fetchAllWork = async () => {
  const response = await get<Work[]>({
    request: REQUEST.ALL_WORK,
    params: { index: 1, num: 12 },
  });
  return response.data;
};

export const useFetchAllWork = () => {
  return useQuery({
    queryKey: ['allWork'],
    queryFn: fetchAllWork,
    retry: false,
  });
};
