'use client';

import type { Work } from '@/widgets/home/types';
import Image from 'next/image';
import { useFetchAllWork, useFetchWorkByTag } from '../api';
import { Pagination } from '@/shared/ui';

export default function WorkSection({
  selectedTag,
  selectedType,
}: {
  selectedTag: string[];
  selectedType: string;
}) {
  const { data: allWorks } = useFetchAllWork();
  const { data: works } = useFetchWorkByTag(selectedTag, selectedType);

  const total =
    selectedType === '전체' && selectedTag.length === 0
      ? allWorks?.length
      : works?.length;

  const renderWorks = () => {
    if (selectedType === '전체' && selectedTag.length === 0 && allWorks) {
      return allWorks.map(work => <WorkItem key={work.id} {...work} />);
    }

    if (works && (selectedType !== '전체' || selectedTag.length > 0)) {
      return works.map(work => <WorkItem key={work.id} {...work} />);
    }

    return <div className="h-100vh w-full" />;
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full justify-between">
        <span>총 {total || 0}개</span>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 xl:gap-10">
        {renderWorks()}
      </div>
      <div className="mt-20 flex w-full justify-center">
        <Pagination
          current={1}
          total={total || 0}
          showPage={5}
          showItem={12}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

const WorkItem = ({ title, authorName, coverImageUrl }: Work) => (
  <div className="flex cursor-pointer flex-col gap-4">
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
