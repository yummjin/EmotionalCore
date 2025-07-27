'use client';

import React from 'react';
import { getDate } from '@/shared/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface EpisodeHeaderProps {
  title: string;
  createdAt: string;
  viewCount: number;
  number: number;
}

export default function EpisodeHeader({
  title,
  createdAt,
  number,
}: EpisodeHeaderProps) {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="text-h1 flex items-center gap-x-4 font-medium">
        <button
          className="size-fit cursor-pointer outline-none"
          onClick={() => {
            router.back();
          }}
        >
          <Image
            src="/icons/icon-chevron-left.svg"
            alt="chevron-left"
            width={32}
            height={32}
          />
        </button>
        <span>{`${number}화`}</span>
        <div className="h-[65%] w-[1px] bg-black" />
        <span>{title}</span>
      </div>
      <div className="flex flex-col gap-10">
        <hr className="text-gray-500" />
        <p className="text-b2 text-end">{getDate(createdAt, 'YYYY.MM.DD')}</p>
      </div>
    </div>
  );
}
