'use client';

import { useEffect, useState } from 'react';
import { useFetchAllWork, useFetchWorkByTag } from '../api';
import WorkView from '@/shared/ui/WorkView';

export default function WorkSection({
  selectedTag,
  selectedType,
}: {
  selectedTag: string[];
  selectedType: string;
}) {
  const [index, setIndex] = useState(1); // setIndex는 페이지네이션 등에서 사용될 예정
  const { data: allWorks, isFetching: isAllWorksFetching } =
    useFetchAllWork(index);

  const { data: works, isFetching: isWorksFetching } = useFetchWorkByTag(
    selectedTag,
    selectedType,
    index,
  );

  useEffect(() => {
    setIndex(1);
  }, [selectedTag, selectedType]);

  const renderWorks = () => {
    if (selectedType === '전체' && selectedTag.length === 0) {
      return (
        <WorkView
          totalCount={allWorks?.totalCount || 0}
          data={allWorks?.content}
          isFetching={isAllWorksFetching}
          index={index}
          setIndex={setIndex}
        />
      );
    }
    return (
      <WorkView
        totalCount={works?.totalCount || 0}
        data={works?.content}
        isFetching={isWorksFetching}
        index={index}
        setIndex={setIndex}
      />
    );
  };

  return renderWorks();
}
