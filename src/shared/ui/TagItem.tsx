import React from 'react';

export default function TagItem({ tag }: { tag: string }) {
  return (
    <span className="text-d1 flex-shrink-0 rounded-[10px] border-[1px] border-gray-400 bg-gray-50 px-3 py-2">
      {tag}
    </span>
  );
}
