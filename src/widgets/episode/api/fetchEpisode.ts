import { get, REQUEST } from '@/shared/api';
import { EpisodeDetail } from '@/shared/types';

export async function fetchEpisode(id: string, episodeId: string) {
  const response = await get<EpisodeDetail>({
    request: REQUEST.EPISODE,
    params: {
      seriesId: id,
      number: episodeId,
    },
  });
  return response.data;
}
