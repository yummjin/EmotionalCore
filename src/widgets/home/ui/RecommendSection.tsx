'use client';

import Image from 'next/image';
import { useFetchRecommend } from '../api';
import type { Novel } from '../types';

export default function RecommendSection({ type }: { type: 'poem' | 'novel' }) {
  const label = type === 'poem' ? '시' : '소설';
  const { data } = useFetchRecommend(type);

  return (
    <div className="px-normal flex w-screen justify-center">
      <div className="md:max-w-medium lg:max-w-large sm flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <div className="flex justify-between">
          <span className="text-h4 md:text-h1 font-medium">추천 {label}</span>
          <button className="text-b2 cursor-pointer text-gray-500 outline-none">
            더보기
          </button>
        </div>
        {data && (
          <div className="scrollbar-hide hidden flex-wrap gap-4 overflow-x-auto md:flex">
            {data.slice(0, 3).map(novel => (
              <RecommendItem key={novel.id} {...novel} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const RecommendItem = ({
  title,
  authorName,
  coverImageUrl,
  description,
}: Novel) => (
  <div className="flex min-w-[341px] flex-1 flex-shrink-0 cursor-pointer gap-6 rounded-[5px] border-[1px] border-gray-400 px-6 py-5">
    <Image
      src={`https://emotioncores.com${coverImageUrl}`}
      alt={title}
      height={166}
      width={110}
      className="rounded-[8px] object-fill object-center"
    />
    <div className="flex flex-1 flex-col">
      <p className="text-b1 font-medium">{title}</p>
      <p className="text-b2 mb-6 text-gray-500">{authorName}</p>
      <p className="text-d1 text-gray-900">{description}</p>
    </div>
  </div>
);
