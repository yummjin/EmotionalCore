'use client';

import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useFetchBestAuthor, useFetchPopularWork } from '../api';
import type { Work, Author } from '../types';

export default function SwiperSection({ label }: { label: string }) {
  const { data: popularWork } = useFetchPopularWork();
  const { data: bestAuthor } = useFetchBestAuthor();

  const data = label === '이달의 인기 작품' ? popularWork : bestAuthor;
  const isWorkType = label === '이달의 인기 작품';

  return (
    <div className="px-normal flex w-screen justify-center">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <p className="text-h4 md:text-h1 font-medium">{label}</p>
        {data && (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
            className="swiper-container"
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <SwiperItem {...item} isWorkType={isWorkType} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

const SwiperItem = ({
  authorName,
  coverImageUrl,
  isWorkType,
  ...rest
}: (Work | Author) & { isWorkType: boolean }) => {
  const displayTitle = isWorkType ? (rest as Work).title : authorName;

  return (
    <div className="relative flex h-[300px] w-full flex-col gap-2">
      <Image
        sizes="auto"
        src={`https://emotioncores.com${coverImageUrl}`}
        alt={displayTitle}
        fill
        className="rounded-[8px] object-fill object-center"
      />
    </div>
  );
};
