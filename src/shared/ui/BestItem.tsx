import type { Work } from '@/shared/types';
import { ImageItem } from '.';
import Link from 'next/link';

export default function BestItem({
  id,
  title,
  authorName,
  coverImageUrl,
  rank,
}: Work & { rank: number }) {
  return (
    <Link href={`/work/${id}`} className="flex flex-shrink-0 flex-col gap-4">
      <div className="relative h-[200px] w-[132px] md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]">
        <ImageItem
          src={coverImageUrl}
          alt={title}
          fill
          className="rounded-[10px] object-fill"
        />
        <div className="bg-m-500/80 absolute rounded-tl-[10px] rounded-br-[10px] px-3 py-1 text-white">
          {rank}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-b1 font-medium">{title}</p>
        <p className="text-b3 text-gray-500">{authorName}</p>
      </div>
    </Link>
  );
}
