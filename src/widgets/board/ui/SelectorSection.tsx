'use client';

import { cn } from '@/shared/utils';
import { Dispatch, SetStateAction } from 'react';
import { useFetchAllTag } from '../api';
import { SelectorHeader } from '@/shared/ui';

interface SelectorSectionProps {
  selectedTag: string[];
  setSelectedTag: Dispatch<SetStateAction<string[]>>;
  selectedType: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
}

export default function SelectorSection({
  selectedTag,
  setSelectedTag,
  selectedType,
  setSelectedType,
}: SelectorSectionProps) {
  const { data: tags } = useFetchAllTag();
  const buttons = ['전체', '소설', '시', '웹툰'];

  const onTagClick = (name: string) => {
    setSelectedTag(prev =>
      prev.includes(name) ? prev.filter(tag => tag !== name) : [...prev, name],
    );
  };

  return (
    <div className="flex w-full flex-col gap-[30px]">
      <SelectorHeader
        buttons={buttons}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {tags && (
        <div className="flex flex-wrap gap-4">
          {tags.map(({ id, name }) => (
            <button
              key={id}
              className={cn(
                'text-b2 cursor-pointer rounded-[10px] border-[1.5px] border-gray-400 px-5 py-5.5 font-medium outline-none',
                selectedTag.includes(name) &&
                  'border-m-500 text-m-500 bg-m-100',
              )}
              onClick={() => onTagClick(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
