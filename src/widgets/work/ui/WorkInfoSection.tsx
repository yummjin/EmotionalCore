import { ImageItem } from '@/shared/ui';
import type { WorkDetail } from '@/shared/types';

export default function WorkInfoSection({
  coverImageUrl,
  title,
  authorName,
  viewCount,
  likeCount,
  bookmarkCount,
  description,
}: WorkDetail) {
  return (
    <section className="flex w-full flex-col gap-10 md:flex-row">
      <div className="relative h-[290px] w-full rounded-[10px] md:h-[300px] md:w-[200px] lg:h-[400px] lg:w-[300px]">
        <ImageItem
          src={coverImageUrl}
          alt="cover"
          fill
          className="absolute top-0 left-0 rounded-[10px] object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-h3 font-medium">{title}</p>
        <div className="text-b1 text-gray-500">
          작가명&nbsp;
          <span className="text-m-500">{authorName}</span>
        </div>
        <div className="text-b1 flex gap-2">
          <div className="text-gray-500">
            조회수&nbsp;
            <span className="text-m-500">{viewCount}</span>
          </div>
          <div className="text-gray-500">
            좋아요&nbsp;
            <span className="text-m-500">{likeCount}</span>
          </div>
          <div className="text-gray-500">
            북마크&nbsp;
            <span className="text-m-500">{bookmarkCount}</span>
          </div>
        </div>
        <div className="text-b1">{description}</div>
      </div>
    </section>
  );
}
