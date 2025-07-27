import { cn } from '@/shared/utils';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from '../../../public/icons';

export interface PaginationProps {
  current: number;
  total: number;
  showPage: number;
  showItem: number;
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
  const totalPage = Math.max(1, Math.ceil(total / showItem)); // 최소 1페이지는 보장
  const displayCurrent = current + 1; // UI에 표시할 현재 페이지 (1부터 시작)

  const start = Math.max(
    1,
    Math.min(
      displayCurrent - Math.floor(showPage / 2),
      totalPage - showPage + 1,
    ), // totalPage에서 마지막 showPage는 start값 변경되지 않도록 해서 showPage 수 유지
  );

  const pages = [];
  for (let i = start; i < start + showPage; i++) {
    if (i <= totalPage) pages.push(i);
  }

  const handlePageChange = (displayPage: number) => {
    const actualPage = displayPage - 1; // 1부터 시작하는 페이지를 0부터 시작하는 페이지로 변환
    if (actualPage >= 0 && actualPage < totalPage) {
      onChange(actualPage);
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
          onClick={() => handlePageChange(Math.max(displayCurrent - 1, 1))}
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
              displayCurrent === page && 'bg-m-400 rounded-[10px] text-white',
            )}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="flex gap-[8px]">
        <button
          className="size-[24px] cursor-pointer outline-none"
          onClick={() =>
            handlePageChange(Math.min(totalPage, displayCurrent + 1))
          }
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
