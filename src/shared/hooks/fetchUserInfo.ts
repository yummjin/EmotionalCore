import { userGet, REQUEST } from '@/shared/api';
import type { User } from '../types';
import { useQuery } from '@tanstack/react-query';
import { setSession } from '../utils';

const fetchUserInfo = async () => {
  const response = await userGet<User>({
    request: REQUEST.USER_INFO,
  });
  setSession('userInfo', JSON.stringify(response.data));
  return response.data;
};

export const useFetchUserInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    enabled:
      typeof window !== 'undefined' && !!sessionStorage.getItem('userToken'),
  });
};
