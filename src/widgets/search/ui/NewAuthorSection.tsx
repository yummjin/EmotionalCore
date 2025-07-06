'use client';

import type { Author } from '../types';
import Image from 'next/image';
import { useFetchNewAuthor } from '../api';

export default function NewAuthorSection() {
  const { data } = useFetchNewAuthor();

  return (
    <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
      <div className="flex justify-between">
        <span className="text-h4 md:text-h1 font-medium">신규 작가</span>
        <button className="text-b2 cursor-pointer text-gray-500 outline-none">
          더보기
        </button>
      </div>
      {data && (
        <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
          {data.slice(0, 6).map(author => (
            <AuthorItem key={author.id} {...author} />
          ))}
        </div>
      )}
    </div>
  );
}

const AuthorItem = ({ description, authorName, coverImageUrl }: Author) => (
  <div className="flex h-[200px] w-[132px] flex-1 flex-shrink-0 flex-col items-center justify-center gap-4 rounded-[10px] border-[1px] border-gray-900 md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]">
    <div className="relative size-[100px] rounded-full bg-gray-200">
      <Image
        src={`https://emotioncores.com${coverImageUrl}`}
        alt={authorName}
        fill
        className="rounded-full object-cover"
      />
    </div>
    <div className="flex flex-col">
      <p className="text-b1 font-medium">{authorName}</p>
      <p className="text-b3 text-gray-500">{description}</p>
    </div>
  </div>
);
