import { WorkEpisodeSection, WorkInfoSection } from '@/widgets/work/ui';
import React, { Suspense } from 'react';

export default async function WorkPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ index: string }>;
}) {
  const { id } = await params;
  const { index } = await searchParams;
  return (
    <>
      <Suspense
        fallback={
          <div className="grid h-[calc(100vh-400px)] w-full place-items-center" />
        }
      >
        <WorkInfoSection id={id} />
        <WorkEpisodeSection id={id} index={Number(index) || 0} />
      </Suspense>
    </>
  );
}
