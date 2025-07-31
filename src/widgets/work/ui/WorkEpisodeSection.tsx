import React from 'react';

import WorkEpisodeView from './WorkEpisodeView';
import type { Episode } from '@/shared/types';

export default function WorkEpisodeSection({
  id,
  index,
  episodes,
  totalCount,
}: {
  id: string;
  index: number;
  episodes: Episode[];
  totalCount: number;
}) {
  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-between">
        <span>작품 회차 {totalCount}개</span>
      </div>
      <WorkEpisodeView
        content={episodes}
        index={index}
        totalCount={totalCount}
        id={id}
      />
    </section>
  );
}
