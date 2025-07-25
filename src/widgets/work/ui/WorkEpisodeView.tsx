'use client';

import { PG_SHOW_ITEM, PG_SHOW_PAGE } from '@/shared/constants';
import type { Episode } from '@/shared/types';
import { Pagination } from '@/shared/ui';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface WorkEpisodeViewProps {
  content: Episode[];
  index: number;
  totalCount: number;
  id: string;
}

interface WorkEpisodeItemProps {
  episode: Episode;
}

export default function WorkEpisodeView({
  content,
  index,
  totalCount,
  id,
}: WorkEpisodeViewProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(index);
  const router = useRouter();
  const setIndex = (page: number) => {
    setCurrentIndex(page);
    router.push(`/work/${id}?index=${page}`);
  };

  return (
    <>
      {content.map(episode => (
        <WorkEpisodeItem key={episode.number} episode={episode} />
      ))}
      <div className="mt-20 flex w-full justify-center">
        <Pagination
          current={index}
          total={totalCount}
          showPage={PG_SHOW_PAGE}
          showItem={PG_SHOW_ITEM}
          onChange={setIndex}
        />
      </div>
    </>
  );
}

const WorkEpisodeItem = ({ episode }: WorkEpisodeItemProps) => {
  const { title, coverImageUrl } = episode;
  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  return (
    <div className="flex w-full">
      <Image
        src={imgSrc}
        onError={() => setImgSrc('/images/image-cover.png')}
        alt={title}
        width={100}
        height={100}
      />
      <span>{title}</span>
    </div>
  );
};
