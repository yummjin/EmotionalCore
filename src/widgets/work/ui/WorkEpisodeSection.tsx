import React from 'react';
import { fetchWorkEpisode } from '../api';

import WorkEpisodeView from './WorkEpisodeView';

export default async function WorkEpisodeSection({
  id,
  index,
}: {
  id: string;
  index: number;
}) {
  const { content, totalCount } = await fetchWorkEpisode(id, index);
  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full justify-between">
        <span>작품 회차 {totalCount}개</span>
      </div>
      <WorkEpisodeView
        content={content}
        index={index}
        totalCount={totalCount}
        id={id}
      />
    </section>
  );
}
