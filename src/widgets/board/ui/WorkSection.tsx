'use client';

import { useFetchAllWork, useFetchWorkByTag } from '../api';
import WorkView from '@/shared/ui/WorkView';

export default function WorkSection({
  selectedTag,
  selectedType,
}: {
  selectedTag: string[];
  selectedType: string;
}) {
  const { data: allWorks, isFetching: isAllWorksFetching } = useFetchAllWork();
  const { data: works, isFetching: isWorksFetching } = useFetchWorkByTag(
    selectedTag,
    selectedType,
  );

  const renderWorks = () => {
    if (selectedType === '전체' && selectedTag.length === 0) {
      return (
        <WorkView
          totalCount={allWorks?.totalCount || 0}
          data={allWorks?.content}
          isFetching={isAllWorksFetching}
        />
      );
    }
    return (
      <WorkView
        totalCount={works?.totalCount || 0}
        data={works?.content}
        isFetching={isWorksFetching}
      />
    );
  };

  return renderWorks();
}
