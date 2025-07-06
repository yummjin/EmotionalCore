'use client';

import type { Work } from '@/widgets/home/types';
import Image from 'next/image';
import { useFetchNewWork } from '../api';

export default function WebtoonSection() {
  const { data } = useFetchNewWork();

  return (
    <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
      <div className="flex justify-between">
        <span className="text-h4 md:text-h1 font-medium">신규 작품</span>
        <button className="text-b2 cursor-pointer text-gray-500 outline-none">
          더보기
        </button>
      </div>
      {data && (
        <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
          {data.slice(0, 6).map(webtoon => (
            <WebtoonItem key={webtoon.id} {...webtoon} />
          ))}
        </div>
      )}
    </div>
  );
}

const WebtoonItem = ({ title, authorName, coverImageUrl }: Work) => (
  <div className="flex flex-1 flex-col gap-4">
    <div className="relative h-[200px] w-[132px] flex-shrink-0 md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]">
      <Image
        src={`https://emotioncores.com${coverImageUrl}`}
        alt={title}
        fill
        className="rounded-[10px] object-fill"
      />
    </div>
    <div className="flex flex-col">
      <p className="text-b1 font-medium">{title}</p>
      <p className="text-b3 text-gray-500">{authorName}</p>
    </div>
  </div>
);
