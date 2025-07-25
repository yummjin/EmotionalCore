'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { Work } from '@/shared/types';
import { cva, type VariantProps } from 'class-variance-authority';

const workItemImageWrapper = cva('relative rounded-[10px]', {
  variants: {
    size: {
      sm: 'h-[120px] md:h-[140px] lg:h-[180px]',
      md: 'h-[200px] md:h-[220px] lg:h-[285px]',
      webtoon:
        'h-[200px] w-[132px] flex-shrink-0 md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export default function WorkItem({
  title,
  authorName,
  coverImageUrl,
  className,
  size,
}: Work & { className?: string } & VariantProps<typeof workItemImageWrapper>) {
  const [imgSrc, setImgSrc] = useState(coverImageUrl);
  return (
    <div className="flex cursor-pointer flex-col gap-4">
      <div className={workItemImageWrapper({ size, className })}>
        <Image
          src={imgSrc}
          onError={() => setImgSrc('/images/image-cover.png')}
          alt={title}
          fill
          className="rounded-[10px] object-cover object-center"
          placeholder="blur"
          blurDataURL="/images/image-cover.png"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-b1 font-medium">{title}</p>
        <p className="text-b3 text-gray-500">{authorName}</p>
      </div>
    </div>
  );
}

function WorkItemSkeleton({
  size,
  className,
}: VariantProps<typeof workItemImageWrapper> & { className?: string }) {
  return (
    <div className="flex cursor-pointer flex-col gap-4">
      <div className={workItemImageWrapper({ size, className })}>
        <div className="h-full w-full rounded-[10px] bg-gray-200" />
      </div>
    </div>
  );
}

WorkItem.Skeleton = WorkItemSkeleton;
