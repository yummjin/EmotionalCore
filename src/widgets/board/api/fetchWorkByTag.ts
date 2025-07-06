import { get, REQUEST } from '@/shared/api';
import { Work } from '@/widgets/home/types';
import { useQuery } from '@tanstack/react-query';

const fetchWorkByTag = async (tags: string[]) => {
  const response = await get<Work[]>({
    request: REQUEST.WORK_TAG,
    params: { tags: tags.join(',') },
  });
  return response.data;
};

export const useFetchWorkByTag = (tags: string[]) => {
  return useQuery({
    queryKey: ['workByTag', tags],
    queryFn: () => fetchWorkByTag(tags),
    enabled: tags.length > 0,
    retry: false,
  });
};
