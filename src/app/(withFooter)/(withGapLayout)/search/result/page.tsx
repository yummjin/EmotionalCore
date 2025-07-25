import { fetchSearchResults } from '@/widgets/search/api';
import { ResultSection, SearchBar } from '@/widgets/search/ui';
import React, { Suspense } from 'react';

interface ResultPageProps {
  searchParams: { query?: string };
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const query = searchParams.query || '';
  const data = await fetchSearchResults(query);

  return (
    <>
      <SearchBar query={query} />
      <Suspense fallback={<div></div>}>
        <ResultSection data={data} />
      </Suspense>
    </>
  );
}
