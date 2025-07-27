import { Author } from '../types';
import { ImageItem } from '@/shared/ui';

export default function NewAuthorItem({
  description,
  authorName,
  coverImageUrl,
}: Author) {
  return (
    <div className="flex h-[200px] w-[132px] flex-1 flex-shrink-0 flex-col items-center justify-center gap-4 rounded-[10px] border-[1px] border-gray-900 md:h-[220px] md:w-[140px] lg:h-[285px] lg:w-[203px]">
      <div className="relative size-[100px] rounded-full bg-gray-200">
        <ImageItem
          src={coverImageUrl}
          alt={authorName}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-b1 font-medium">{authorName}</p>
        <p className="text-b3 text-gray-500">{description}</p>
      </div>
    </div>
  );
}
