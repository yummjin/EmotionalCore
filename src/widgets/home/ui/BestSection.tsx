'use client';

import Image from 'next/image';
import { useFetchBestWork } from '../api';
import type { Work } from '../types';

export default function BestSection() {
  const { data } = useFetchBestWork();

  return (
    <div className="bg-m-50 px-normal flex w-screen justify-center py-8 md:py-20">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <p className="text-h4 md:text-h1 font-medium">
          감성코어 인기 best 작품 순위
        </p>
        {data && (
          <div className="scrollbar-hide flex gap-5 overflow-x-auto md:gap-1.5 lg:gap-[46px]">
            {data.map(work => (
              <BestItem key={work.id} {...work} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const BestItem = ({ title, authorName, coverImageUrl }: Work) => (
  <div className="flex flex-shrink-0 flex-col gap-4">
    <div className="relative h-[200px] w-[132px] md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]">
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
