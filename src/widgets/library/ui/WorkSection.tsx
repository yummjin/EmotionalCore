'use client';

import { WorkView } from '@/shared/ui';
import { LibraryType } from '../types';
import { useFetchBookmarkWork, useFetchLikedWork } from '../api';
import { useEffect, useState } from 'react';

interface WorkSectionProps {
  selectedType: LibraryType;
}

export default function WorkSection({ selectedType }: WorkSectionProps) {
  const [index, setIndex] = useState(1);
  const { data: likedWorks, isFetching } = useFetchLikedWork(index);
  const { data: bookmarkWorks, isFetching: isBookmarkWorksFetching } =
    useFetchBookmarkWork(index);

  useEffect(() => {
    setIndex(1);
  }, [selectedType]);

  const renderWorks = () => {
    if (selectedType === '이어보기') {
      return <></>;
    }
    if (selectedType === '북마크') {
      return (
        <WorkView
          totalCount={bookmarkWorks?.totalCount || 0}
          data={bookmarkWorks?.content}
          isFetching={isBookmarkWorksFetching}
          index={index}
          setIndex={setIndex}
        />
      );
    }
    if (selectedType === '좋아요') {
      return (
        <WorkView
          totalCount={likedWorks?.totalCount || 0}
          data={likedWorks?.content}
          isFetching={isFetching}
          index={index}
          setIndex={setIndex}
        />
      );
    }
    if (selectedType === '댓글') {
      return <></>;
    }
    if (selectedType === '내 작품') {
      return <></>;
    }

    return <></>;
  };

  return renderWorks();
}
