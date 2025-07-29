'use client';

import type { AuthorDto, SearchResultResponse, WorkDto } from '../types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ImageItem, TagItem } from '@/shared/ui';

export default function ResultSection({
  data,
}: {
  data: SearchResultResponse | undefined;
}) {
  const [numberOfWork, setNumberOfWork] = useState(4);
  const [numberOfAuthor, setNumberOfAuthor] = useState(4);

  useEffect(() => {
    if (data) {
      setNumberOfWork(4);
      setNumberOfAuthor(4);
    }
  }, [data]);

  const renderWorkResult = () => {
    if (!data) return <div className="text-h3">로딩 중...</div>;
    if (data.seriesDetailDTOList.length === 0)
      return <div className="text-h3">작품 검색 결과가 없습니다.</div>;
    return (
      <section className="flex w-full flex-col">
        <p className="text-h3">작품 {data.seriesDetailDTOList.length}개</p>
        <div className="flex flex-col divide-y divide-gray-300">
          {data.seriesDetailDTOList.slice(0, numberOfWork).map(work => (
            <WorkItem key={work.id} {...work} />
          ))}
          {numberOfWork < data.seriesDetailDTOList.length && (
            <div className="mt-10 flex justify-center">
              <button
                className="text-h3 bg-m-400 cursor-pointer rounded-[10px] px-20 py-4 text-white"
                onClick={() => setNumberOfWork(numberOfWork + 4)}
              >
                더 보기
              </button>
            </div>
          )}
        </div>
      </section>
    );
  };

  const renderAuthorResult = () => {
    if (!data) return <div className="text-h3">로딩 중...</div>;
    if (data.authorDTOList.length === 0)
      return <div className="text-h3">작가 검색 결과가 없습니다.</div>;
    return (
      <div className="flex w-full flex-col">
        <p className="text-h3">작가 {data.authorDTOList.length}명</p>
        <div className="flex flex-col divide-y divide-gray-300">
          {data.authorDTOList.slice(0, numberOfAuthor).map(author => (
            <AuthorItem key={author.id} {...author} />
          ))}
          {numberOfAuthor < data.authorDTOList.length && (
            <div className="mt-10 flex justify-center">
              <button
                className="text-h3 bg-m-400 cursor-pointer rounded-[10px] px-20 py-4 text-white"
                onClick={() => setNumberOfAuthor(numberOfAuthor + 4)}
              >
                더 보기
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderWorkResult()}
      {renderAuthorResult()}
    </>
  );
}

const WorkItem = ({
  id,
  coverImageUrl,
  title,
  authorName,
  type,
  viewCount,
  likeCount,
  bookmarkCount,
  tags,
}: WorkDto) => (
  <Link
    href={`/work/${id}`}
    className="flex cursor-pointer gap-[30px] overflow-hidden py-6"
  >
    <ImageItem
      src={coverImageUrl}
      alt={title}
      width={154}
      height={227}
      className="rounded-[10px] object-fill object-center"
    />
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-h4 mb-1 font-medium">{authorName}</p>
        <p>
          <span className="text-gray-700">작가명</span>{' '}
          <span className="text-gray-500">{authorName}</span>
        </p>
        <div className="flex flex-nowrap gap-3">
          <p className="text-nowrap">
            <span className="text-gray-700">분야</span>{' '}
            <span className="text-gray-500">{type}</span>
          </p>
          <p className="text-nowrap">
            <span className="text-gray-700">조회</span>{' '}
            <span className="text-gray-500">{viewCount}</span>
          </p>
          <p className="text-nowrap">
            <span className="text-gray-700">좋아요</span>{' '}
            <span className="text-gray-500">{likeCount}</span>
          </p>
          <p className="text-nowrap">
            <span className="text-gray-700">북마크</span>{' '}
            <span className="text-gray-500">{bookmarkCount}</span>
          </p>
        </div>
      </div>
      <div className="scrollbar-hide flex flex-nowrap gap-2 overflow-x-auto">
        {tags.map(tag => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
    </div>
  </Link>
);

const AuthorItem = ({
  id,
  authorName,
  profileImageUrl,
  seriesCount,
  tags,
}: AuthorDto) => (
  <Link href={`/author/${id}`} className="flex cursor-pointer gap-[30px] py-6">
    <div className="relative size-[134px] rounded-full">
      <ImageItem
        src={profileImageUrl}
        alt={authorName}
        fill
        className="rounded-full object-fill object-center"
      />
    </div>

    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-h4 mb-1 font-medium">{authorName}</p>
        <div className="flex gap-3">
          <p>
            <span className="text-gray-700">작품</span>{' '}
            <span className="text-gray-500">{seriesCount}</span>
          </p>
          <p>
            <span className="text-gray-700">조회</span>{' '}
            <span className="text-gray-500">0</span>
          </p>
        </div>
      </div>

      <div className="scrollbar-hide flex flex-nowrap gap-2 overflow-x-auto">
        {tags.map((tag: string) => (
          <TagItem key={tag} tag={tag} />
        ))}
      </div>
    </div>
  </Link>
);
