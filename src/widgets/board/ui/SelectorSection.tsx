'use client';

import { cn } from '@/shared/utils';
import { useState } from 'react';
import { useFetchAllTag } from '../api';

export default function SelectorSection() {
  const { data: tags } = useFetchAllTag();
  const buttons = ['전체', '소설', '시', '웹툰'];

  const [selected, setSelected] = useState<number>(0);
  const [selectedTag, setSelectedTag] = useState<number[]>([]);

  const onTagClick = (id: number) => {
    setSelectedTag(prev =>
      prev.includes(id) ? prev.filter(id => id !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex w-full flex-col gap-[30px]">
      <div className="flex w-[40%] gap-10">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={cn(
              'text-h1 cursor-pointer py-1 font-medium outline-none',
              selected === index && 'border-m-500 border-b-4',
            )}
            onClick={() => setSelected(index)}
          >
            {button}
          </button>
        ))}
      </div>
      {tags && (
        <div className="flex flex-wrap gap-4">
          {tags.map(tag => (
            <button
              key={tag.id}
              className={cn(
                'text-b2 cursor-pointer rounded-[10px] border-[1.5px] border-gray-400 px-5 py-5.5 font-medium outline-none',
                selectedTag.includes(tag.id) &&
                  'border-m-500 text-m-500 bg-m-100',
              )}
              onClick={() => onTagClick(tag.id)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
