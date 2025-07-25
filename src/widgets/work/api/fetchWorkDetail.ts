import { get, REQUEST } from '@/shared/api';
import type { WorkDetail } from '@/shared/types';

export const fetchWorkDetail = async (id: string) => {
  const response = await get<WorkDetail>({
    request: REQUEST.WORK_DETAIL,
    params: {
      seriesId: id,
    },
  });
  return response.data;
};
