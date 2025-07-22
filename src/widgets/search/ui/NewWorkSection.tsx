import { useFetchNewWork } from '../api';
import { WorkItem } from '@/shared/ui';

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
            <WorkItem key={webtoon.id} {...webtoon} size="webtoon" />
          ))}
        </div>
      )}
    </div>
  );
}
