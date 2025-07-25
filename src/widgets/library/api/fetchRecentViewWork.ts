import { REQUEST, userGet } from '@/shared/api';
import { PG_SHOW_ITEM } from '@/shared/constants';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface RecentViewWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchRecentViewWork = async (index: number) => {
  const response = await userGet<RecentViewWorkResponse>({
    request: REQUEST.RECENT_VIEW_WORK,
    params: { index, num: PG_SHOW_ITEM },
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
