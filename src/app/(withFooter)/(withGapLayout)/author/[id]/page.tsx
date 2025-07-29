import { Suspense } from 'react';
import { fetchAuthorDetail } from '@/widgets/author/api';
import { AuthorInfoSection, AuthorWorkSection } from '@/widgets/author/ui';

export default async function AuthorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const authorData = await fetchAuthorDetail(Number(id));

  if (!authorData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-h3">작가 정보를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 md:gap-8">
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-h3"></div>
          </div>
        }
      >
        <AuthorInfoSection data={authorData} />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-h3"></div>
          </div>
        }
      >
        <AuthorWorkSection />
      </Suspense>
    </div>
  );
}
