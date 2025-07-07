import { post, REQUEST } from '@/shared/api';
import type { Login } from '../types';
import { useMutation } from '@tanstack/react-query';
import { useFetchUserInfo } from '@/shared/hooks';

const fetchLogin = async (data: Login) => {
  const response = await post<Login>({
    request: REQUEST.LOGIN,
    data: data,
  });
  return response.data;
};

export const useFetchLogin = () => {
  const { refetch: refetchUserInfo } = useFetchUserInfo();

  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: data => {
      sessionStorage.setItem('userToken', data as string);
      refetchUserInfo();
    },
  });
};
