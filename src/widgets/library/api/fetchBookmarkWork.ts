import { REQUEST, userGet } from '@/shared/api';
import { PG_SHOW_ITEM } from '@/shared/constants';
import { Work } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

interface BookmarkWorkResponse {
  content: Work[];
  totalCount: number;
}

const fetchBookmarkWork = async (index: number) => {
  const response = await userGet<BookmarkWorkResponse>({
    request: REQUEST.BOOKMARK_WORK,
    params: { index, num: PG_SHOW_ITEM },
  });
  return response.data;
};

export const useFetchBookmarkWork = (index: number) => {
  return useQuery({
    queryKey: ['bookmarkWork', index],
    queryFn: () => fetchBookmarkWork(index),
    retry: false,
  });
};
