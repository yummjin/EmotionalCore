import { fetchEpisode } from '@/widgets/episode/api';
import { EpisodeContent, EpisodeHeader } from '@/widgets/episode/ui';
import React from 'react';

export default async function WorkEpisodePage({
  params,
}: {
  params: Promise<{ id: string; episodeId: string }>;
}) {
  const { id, episodeId } = await params;
  const { title, createdAt, viewCount, contents } = await fetchEpisode(
    id,
    episodeId,
  );

  return (
    <div className="flex w-full flex-col gap-10">
      <EpisodeHeader
        title={title}
        createdAt={createdAt}
        viewCount={viewCount}
        number={Number(episodeId)}
      />
      <EpisodeContent contents={contents} />
    </div>
  );
}
