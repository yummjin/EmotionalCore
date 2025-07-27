'use client';

import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Work } from '@/shared/types';
import type { Author } from '@/widgets/home/types';
import { ImageItem } from '@/shared/ui';

export default function SwiperSection({
  label,
  data,
}: {
  label: string;
  data: Work[] | Author[];
}) {
  const isWorkType = label === '이달의 인기 작품';

  return (
    <section className="px-normal flex w-screen justify-center">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col gap-[20px] lg:gap-[30px]">
        <p className="text-h4 md:text-h1 font-medium">{label}</p>
        {data && (
          <Swiper
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
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
    </section>
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

  return (
    <div className="relative flex h-[300px] w-full flex-col gap-2 rounded-[8px]">
      <ImageItem
        src={coverImageUrl}
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
