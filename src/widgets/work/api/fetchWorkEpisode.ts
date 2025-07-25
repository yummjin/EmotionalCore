import { get, REQUEST } from '@/shared/api';
import { PG_SHOW_ITEM } from '@/shared/constants';
import type { Episode } from '@/shared/types';

interface WorkEpisodeResponse {
  content: Episode[];
  totalCount: number;
}

export const fetchWorkEpisode = async (id: string, index: number) => {
  const response = await get<WorkEpisodeResponse>({
    request: REQUEST.WORK_EPISODE,
    params: { index: index, size: PG_SHOW_ITEM, seriesId: id },
  });
  return response.data;
};
