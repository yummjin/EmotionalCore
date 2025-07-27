'use client';

import { PG_SHOW_ITEM, PG_SHOW_PAGE } from '@/shared/constants';
import type { Episode } from '@/shared/types';
import { Pagination } from '@/shared/ui';
import { getDate } from '@/shared/utils';
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
  const { title, coverImageUrl, viewCount, createdAt, number } = episode;
  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  return (
    <div className="flex w-full gap-4">
      <div className="relative h-[200px] w-[150px] overflow-hidden rounded-[10px] border">
        <Image
          className="object-cover object-center"
          src={imgSrc}
          onError={() => setImgSrc('/images/image-cover.png')}
          alt={title}
          fill
        />
      </div>
      <div className="flex h-full flex-col justify-center gap-1">
        <span className="text-h3">{`${number}화 ${title}`}</span>
        <p className="text-b2 font-medium text-gray-700">
          작가명 <span className="text-gray-500">{viewCount}</span>
        </p>
        <p className="text-b2 font-medium text-gray-700">
          조회수 <span className="text-gray-500">{viewCount}</span>
        </p>
        <span className="text-b2 mt-1">{getDate(createdAt, 'YYYY.MM.DD')}</span>
      </div>
    </div>
  );
};
