import { get, REQUEST } from '@/shared/api';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface WorkByTagResponse {
  content: Work[];
  totalCount: number;
}

const fetchWorkByTag = async (tags: string[], type: string, index: number) => {
  const response = await get<WorkByTagResponse>({
    request: REQUEST.WORK_BY_TAG,
    params: { tags: tags.join(','), index: index, num: 10, type: type },
  });
  return response.data;
};

export const useFetchWorkByTag = (
  tags: string[],
  type: string,
  index: number,
) => {
  return useQuery({
    queryKey: ['workByTag', tags, type, index],
    queryFn: () => fetchWorkByTag(tags, type, index),
    enabled: tags.length > 0,
    retry: false,
  });
};
