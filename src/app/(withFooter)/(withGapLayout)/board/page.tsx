'use client';

import { SelectorSection, WorkSection } from '@/widgets/board/ui';
import { useState } from 'react';

export default function Page() {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('전체');

  return (
    <>
      <SelectorSection
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <WorkSection selectedTag={selectedTag} selectedType={selectedType} />
    </>
  );
}
