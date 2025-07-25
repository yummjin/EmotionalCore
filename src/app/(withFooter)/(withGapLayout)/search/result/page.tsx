import { fetchSearchResults } from '@/widgets/search/api';
import { ResultSection, SearchBar } from '@/widgets/search/ui';
import React, { Suspense } from 'react';

interface ResultPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const { query } = await searchParams;
  const searchQuery = query || '';
  const data = await fetchSearchResults(searchQuery);

  return (
    <>
      <SearchBar query={searchQuery} />
      <Suspense fallback={<div></div>}>
        <ResultSection data={data} />
      </Suspense>
    </>
  );
}
