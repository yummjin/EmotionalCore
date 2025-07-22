'use client';

import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useFetchBestAuthor, useFetchPopularWork } from '../api';
import type { Work, Author } from '../types';
import { useState } from 'react';

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
  const displayDescription = isWorkType
    ? authorName
    : (rest as Author).description;
  const [imgSrc, setImgSrc] = useState(coverImageUrl);

  return (
    <div className="relative flex h-[300px] w-full flex-col gap-2 rounded-[8px]">
      <Image
        sizes="auto"
        src={imgSrc}
        onError={() => setImgSrc('/images/image-cover.png')}
        alt={displayTitle}
        fill
        className="rounded-[8px] object-fill object-center"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[8px] bg-black/18" />
      <div className="absolute bottom-[14px] left-[14px] flex flex-col text-white lg:bottom-[18px] lg:left-[18px]">
        {isWorkType ? (
          <span className="text-b1 font-medium">{displayTitle}</span>
        ) : (
          <span className="text-b1 font-medium">{authorName}</span>
        )}
        <span className="text-b3">{displayDescription}</span>
      </div>
    </div>
  );
};
