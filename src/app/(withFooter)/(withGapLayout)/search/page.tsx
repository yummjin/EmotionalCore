'use client';

import {
  KeywordSection,
  NewAuthorSection,
  NewWorkSection,
  ResultSection,
} from '@/widgets/search/ui';
import Image from 'next/image';
import { useFetchSearchResults } from '@/widgets/search/api';
import { useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { useDebounce } from '@/shared/hooks';

export default function Page() {
  const { register, watch } = useForm<{ query: string }>({
    defaultValues: {
      query: '',
    },
  });

  const rawQuery = watch('query');
  const debouncedQuery = useDebounce(rawQuery.trim(), 500);
  const { data, refetch } = useFetchSearchResults(debouncedQuery);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const hasQuery = useMemo(() => !!debouncedQuery, [debouncedQuery]);

  return (
    <>
      <form onSubmit={onSubmit} className="relative w-full">
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

      {hasQuery ? (
        <ResultSection data={data ?? undefined} />
      ) : (
        <>
          <KeywordSection />
          <NewWorkSection />
          <NewAuthorSection />
        </>
      )}
    </>
  );
}
