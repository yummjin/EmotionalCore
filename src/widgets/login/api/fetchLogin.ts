import { post, REQUEST } from '@/shared/api';
import type { Login } from '../types';
import { useMutation } from '@tanstack/react-query';
import { useFetchUserInfo } from '@/shared/hooks';
import { setCookie } from '@/shared/utils/cookie';

const fetchLogin = async (data: Login) => {
  const response = await post<Login>({
    request: REQUEST.LOGIN,
    data: data,
  });
  return response.data;
};

export const useFetchLogin = () => {
  const { refetch: fetchUserInfo } = useFetchUserInfo();

  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: data => {
      setCookie('userToken', data as string, {
        path: '/',
        sameSite: 'Strict',
      });
      fetchUserInfo();
    },
  });
};
