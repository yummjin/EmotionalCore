import React from 'react';
import type { Work } from '@/shared/types';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import ImageItem from './ImageItem';

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
  id,
  title,
  authorName,
  coverImageUrl,
  className,
  size,
}: Work & { className?: string } & VariantProps<typeof workItemImageWrapper>) {
  return (
    <Link href={`/work/${id}`} className="flex cursor-pointer flex-col gap-4">
      <div className={workItemImageWrapper({ size, className })}>
        <ImageItem
          src={coverImageUrl}
          alt={title}
          fill
          className="rounded-[10px] object-cover object-center"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-b1 font-medium">{title}</p>
        <p className="text-b3 text-gray-500">{authorName}</p>
      </div>
    </Link>
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
