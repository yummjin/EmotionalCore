import { get, REQUEST } from '@/shared/api';
import { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

const fetchWorkByTag = async (tags: string[], type: string) => {
  const response = await get<Work[]>({
    request: REQUEST.WORK_BY_TAG,
    params: { tags: tags.join(','), index: 1, num: 10, type: type },
  });
  return response.data;
};

export const useFetchWorkByTag = (tags: string[], type: string) => {
  return useQuery({
    queryKey: ['workByTag', tags, type],
    queryFn: () => fetchWorkByTag(tags, type),
    enabled: tags.length > 0,
    retry: false,
  });
};
