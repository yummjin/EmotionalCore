'use client';

import React from 'react';
import type { Work } from '../types';
import Image from 'next/image';
import { useFetchWebtoon } from '../api';

export default function WebtoonSection() {
  const { data } = useFetchWebtoon();

  return (
    <div className="px-normal flex w-screen justify-center">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <p className="text-h4 md:text-h1 font-medium">추천 웹툰</p>
        {data && (
          <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
            {data.slice(0, 6).map(webtoon => (
              <WebtoonItem key={webtoon.id} {...webtoon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const WebtoonItem = ({ title, authorName, coverImageUrl }: Work) => (
  <div className="flex flex-1 flex-col gap-4">
    <div className="relative h-[256px]">
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
