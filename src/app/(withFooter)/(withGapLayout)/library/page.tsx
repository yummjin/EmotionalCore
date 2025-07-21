'use client';

import { useState } from 'react';
import { SelectorHeader } from '@/shared/ui';
import { WorkSection } from '@/widgets/library/ui';
import { LibraryType } from '@/widgets/library/types';

export default function LibraryPage() {
  const buttons = ['이어보기', '북마크', '좋아요', '댓글', '내 작품'];
  const [selectedType, setSelectedType] = useState<LibraryType>('이어보기');
  return (
    <>
      <SelectorHeader
        buttons={buttons}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <WorkSection selectedType={selectedType} />
    </>
  );
}
