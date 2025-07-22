import { Work } from '@/widgets/home/types';
import React from 'react';
import Pagination from './Pagination';
import WorkItem from './WorkItem';

interface WorkViewProps {
  totalCount: number;
  data: Work[] | undefined;
  isFetching: boolean;
  index?: number;
  setIndex?: (index: number) => void;
}

export default function WorkView({
  totalCount,
  data,
  isFetching,
  index = 1,
  setIndex = () => {},
}: WorkViewProps) {
  const renderWorks = () => {
    if (isFetching)
      return (
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 xl:gap-10">
          <WorkItem.Skeleton />
          <WorkItem.Skeleton />
          <WorkItem.Skeleton />
          <WorkItem.Skeleton />
          <WorkItem.Skeleton />
        </div>
      );

    if (!data)
      return (
        <div className="text-b1 flex h-[calc(100vh-685px)] w-full items-center justify-center">
          데이터가 없습니다.
        </div>
      );

    return (
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 xl:gap-10">
        {data.map(work => (
          <WorkItem key={work.id} {...work} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-full justify-between">
        <span>총 {totalCount}개</span>
      </div>
      {renderWorks()}
      <div className="mt-20 flex w-full justify-center">
        <Pagination
          current={index}
          total={totalCount}
          showPage={5}
          showItem={12}
          onChange={setIndex}
        />
      </div>
    </div>
  );
}
