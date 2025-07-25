import { userGet, REQUEST, get } from '@/shared/api';
import type { User } from '../types';
import { useQuery } from '@tanstack/react-query';
import { setCookie } from '../utils/cookie';

const fetchUserInfo = async () => {
  const response = await userGet<User>({
    request: REQUEST.USER_INFO,
  });
  setCookie('userInfo', JSON.stringify(response.data));
  return response.data;
};

export const fetchUser = async (token: string) => {
  const response = await get<User>({
    request: REQUEST.USER_INFO,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useFetchUserInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    enabled: false,
    select: data => {
      if (data) {
        setCookie('userInfo', JSON.stringify(data));
      }
      return data;
    },
  });
};
