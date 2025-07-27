import { BestItem, CategoryItem } from '@/shared/ui';
import { fetchBestWork } from '@/widgets/home/api';
import { CATEGORY } from '@/widgets/home/model';
import React from 'react';

export default async function NotFound() {
  const bestWork = await fetchBestWork();

  return (
    <div className="px-normal flex w-screen justify-center py-10 md:py-[76px]">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col items-center gap-10 md:gap-[76px]">
        <div className="flex h-30 w-full flex-col items-center justify-center gap-4">
          <h1 className="text-h3 md:text-h1 m-0 font-medium">
            해당 페이지를 찾을 수 없습니다.
          </h1>
          <h4 className="text-h4">원하시는 결과를 찾을 수 없습니다.</h4>
        </div>
        <div className="hidden w-full max-w-[1078px] flex-wrap justify-center gap-4 md:flex">
          {CATEGORY.map(category => (
            <CategoryItem key={category} category={category} />
          ))}
        </div>
        <div className="scrollbar-hide flex w-full gap-5 overflow-x-auto md:gap-1.5 lg:gap-[46px]">
          {bestWork.map((work, index) => (
            <BestItem key={work.id} {...work} rank={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
