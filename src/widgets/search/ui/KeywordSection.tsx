'use client';

import { useFetchKeywords } from '../api';

export default function KeywordSection() {
  const { data } = useFetchKeywords();

  return (
    <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
      <p className="text-h4 md:text-h1 font-medium">인기 검색어</p>
      {data && (
        <div className="scrollbar-hide flex flex-wrap gap-4 overflow-x-auto">
          {data.map(keyword => (
            <KeywordItem key={keyword.searchId} keyword={keyword.searchWord} />
          ))}
        </div>
      )}
    </div>
  );
}

const KeywordItem = ({ keyword }: { keyword: string }) => {
  return (
    <button className="cursor-pointer rounded-[15px] border-[1px] border-gray-400 bg-gray-100 px-5 py-6 outline-none">
      {keyword}
    </button>
  );
};
