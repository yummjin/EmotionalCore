'use client';

import { SelectorSection, WorkSection } from '@/widgets/board/ui';
import { useState } from 'react';

export default function Page() {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);

  return (
    <div className="px-normal flex w-screen justify-center py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[76px]">
        <SelectorSection
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <WorkSection selectedTag={selectedTag} />
      </div>
    </div>
  );
}
