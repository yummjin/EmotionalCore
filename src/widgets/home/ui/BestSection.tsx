import type { Work } from '@/shared/types';
import { BestItem } from '@/shared/ui';

export default function BestSection({ data }: { data: Work[] }) {
  return (
    <section className="bg-m-50 px-normal flex w-screen justify-center py-8 md:py-20">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <p className="text-h4 md:text-h1 font-medium">
          감성코어 인기 best 작품 순위
        </p>
        {data && (
          <div className="scrollbar-hide flex gap-5 overflow-x-auto md:gap-1.5 lg:gap-[46px]">
            {data.map((work, index) => (
              <BestItem key={work.id} {...work} rank={index + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
