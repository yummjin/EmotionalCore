import { cn } from '@/shared/utils';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from '../../../public/icons';

export interface PaginationProps {
  current: number; // 현재 페이지
  total: number; // 아이템 총 개수
  showPage: number; // 보여줄 페이지 수
  showItem: number; // 보여줄 데이터 수
  onChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  current,
  total,
  showPage,
  showItem,
  onChange,
  className,
  ...rest
}: PaginationProps) => {
  const totalPage = Math.ceil(total / showItem);
  const start = Math.max(
    1,
    Math.min(current - Math.floor(showPage / 2), totalPage - showPage + 1), // totalPage에서 마지막 showPage는 start값 변경되지 않도록 해서 shoePage 수 유지
  );

  const pages = [];
  for (let i = start; i < start + showPage; i++) {
    if (i <= totalPage) pages.push(i);
  }

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPage) {
      onChange(page);
    }
  };

  return (
    <div
      className={cn('flex h-[42px] w-fit items-center gap-[42px]', className)}
      {...rest}
    >
      <div className="flex gap-[8px]">
        <button
          onClick={() => handlePageChange(1)}
          className="size-[24px] cursor-pointer outline-none"
        >
          <ChevronsLeft />
        </button>
        <button
          className="size-[24px] cursor-pointer outline-none"
          onClick={() => handlePageChange(Math.max(current - 1, 1))}
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="flex gap-[8px]">
        {pages.map(page => (
          <button
            key={page}
            className={cn(
              'size-[42px] cursor-pointer gap-[10px] leading-6 font-normal tracking-[-0.5%] text-gray-500 outline-none',
              current === page && 'bg-m-400 rounded-[10px] text-white',
            )}
            onClick={() => onChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex gap-[8px]">
        <button
          className="size-[24px] cursor-pointer outline-none"
          onClick={() => handlePageChange(Math.min(totalPage, current + 1))}
        >
          <ChevronRight />
        </button>
        <button
          className="size-[24px] cursor-pointer outline-none"
          onClick={() => handlePageChange(totalPage)}
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
