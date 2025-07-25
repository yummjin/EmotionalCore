'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function SearchBar({ query }: { query?: string }) {
  const { register, handleSubmit } = useForm<{ query: string }>({
    defaultValues: {
      query: query || '',
    },
  });

  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(({ query }) => {
        if (!query.trim()) return;
        router.push(`/search/result?query=${query.trim()}`);
      })}
      className="relative w-full"
    >
      <input
        className="md:text-h4 w-full rounded-[10px] border-[1px] border-gray-900 p-5 outline-none"
        type="text"
        placeholder="검색어를 입력해주세요."
        {...register('query')}
      />
      <button
        type="submit"
        className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer outline-none"
      >
        <Image
          src="/icons/icon-search.svg"
          width={24}
          height={24}
          alt="search"
        />
      </button>
    </form>
  );
}
