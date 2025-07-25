import { WorkItem } from '@/shared/ui';
import { fetchWebtoon } from '../api';

export default async function WebtoonSection() {
  const webtoon = await fetchWebtoon();

  return (
    <section className="px-normal flex w-screen justify-center">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <div className="flex justify-between">
          <span className="text-h4 md:text-h1 font-medium">추천 웹툰</span>
          <button className="text-b2 cursor-pointer text-gray-500 outline-none">
            더보기
          </button>
        </div>
        {webtoon && (
          <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto">
            {webtoon.slice(0, 6).map(webtoon => (
              <WorkItem key={webtoon.id} {...webtoon} size="webtoon" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
