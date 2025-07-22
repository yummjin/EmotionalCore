import { get, REQUEST } from '@/shared/api';
import { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

interface AllWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchAllWork = async ({ index }: { index: number }) => {
  const response = await get<AllWorkResponse>({
    request: REQUEST.ALL_WORK,
    params: { index: index, num: 12 },
  });
  return response.data;
};

export const useFetchAllWork = (index: number) => {
  return useQuery({
    queryKey: ['allWork', index],
    queryFn: () => fetchAllWork({ index }),
    retry: false,
  });
};
