'use client';

import { useRouter } from 'next/navigation';

export default function KeywordItem({ keyword }: { keyword: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/search/result?query=${keyword}`);
      }}
      className="cursor-pointer rounded-[15px] border-[1px] border-gray-400 bg-gray-100 px-5 py-6 outline-none"
    >
      {keyword}
    </button>
  );
}
