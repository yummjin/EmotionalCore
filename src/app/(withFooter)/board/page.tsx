'use client';

import { SelectorSection, WorkSection } from '@/widgets/board/ui';
import { useState } from 'react';

export default function Page() {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('전체');

  return (
    <div className="px-normal flex w-screen justify-center py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[76px]">
        <SelectorSection
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <WorkSection selectedTag={selectedTag} selectedType={selectedType} />
      </div>
    </div>
  );
}
