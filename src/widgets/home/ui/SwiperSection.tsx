'use client';

import Image from 'next/image';
import { useFetchBestAuthor, useFetchPopularWork } from '../api';
import { Work, Author } from '../types';

export default function SwiperSection({ label }: { label: string }) {
  const { data: popularWork } = useFetchPopularWork();
  const { data: bestAuthor } = useFetchBestAuthor();

  const data = label === '이달의 인기 작품' ? popularWork : bestAuthor;
  const isWorkType = label === '이달의 인기 작품';

  return (
    <div className="px-normal flex w-screen justify-center">
      <div className="flex w-full max-w-[1078px] flex-col gap-[30px]">
        <p className="text-h2 sm:text-h1 font-medium">{label}</p>
        {data && (
          <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
            {data.map(item => (
              <SwiperItem key={item.id} {...item} isWorkType={isWorkType} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const SwiperItem = ({
  authorName,
  coverImageUrl,
  isWorkType,
  ...rest
}: (Work | Author) & { isWorkType: boolean }) => {
  const displayTitle = isWorkType ? (rest as Work).title : authorName;

  return (
    <div className="relative flex h-[300px] w-[300px] flex-shrink-0 flex-col gap-2">
      <Image
        src={`https://emotioncores.com${coverImageUrl}`}
        alt={displayTitle}
        fill
        className="rounded-[8px] object-fill object-center"
      />
    </div>
  );
};
