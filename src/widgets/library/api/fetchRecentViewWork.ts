import { REQUEST, userGet } from '@/shared/api';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface RecentViewWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchRecentViewWork = async (index: number) => {
  const response = await userGet<RecentViewWorkResponse>({
    request: REQUEST.RECENT_VIEW_WORK,
    params: { index, num: 12 },
  });
  return response.data;
};

export const useFetchRecentViewWork = (index: number) => {
  return useQuery({
    queryKey: ['recentViewWork', index],
    queryFn: () => fetchRecentViewWork(index),
    retry: false,
  });
};
