import { get, REQUEST } from '@/shared/api';
import type { User } from '@/shared/types';
import { useQuery } from '@tanstack/react-query';

export const fetchAuthorDetail = async (memberId: number) => {
  const response = await get<User>({
    request: REQUEST.GET_AUTHOR_DETAIL,
    params: {
      memberId,
    },
  });
  return response.data;
};

export const useFetchAuthorDetail = (memberId: number) => {
  return useQuery({
    queryKey: ['authorDetail', memberId],
    queryFn: () => fetchAuthorDetail(memberId),
  });
};
