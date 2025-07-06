'use client';

import type { Work } from '@/widgets/home/types';
import Image from 'next/image';
import { useFetchWorkByTag } from '../api';

export default function WorkSection({
  selectedTag,
}: {
  selectedTag: string[];
}) {
  const { data: works } = useFetchWorkByTag(selectedTag);
  const total = works?.length;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full justify-between">
        <span>총 {total || 0}개</span>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 xl:gap-10">
        {works ? (
          works.map(work => <WorkItem key={work.id} {...work} />)
        ) : (
          <div className="h-[99px] w-full" />
        )}
      </div>
    </div>
  );
}

const WorkItem = ({ title, authorName, coverImageUrl }: Work) => (
  <div className="flex flex-col gap-4">
    <div className="relative h-[200px] md:h-[220px] lg:h-[285px]">
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
