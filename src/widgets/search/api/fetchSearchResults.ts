import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { SearchResultResponse } from '../types';

export const fetchSearchResults = async (query: string) => {
  const response = await get<SearchResultResponse>({
    request: REQUEST.SEARCH,
    params: { keyword: query },
  });
  return response.data;
};

export const useFetchSearchResults = (query: string) => {
  return useQuery({
    queryKey: ['searchResults', query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query,
  });
};
