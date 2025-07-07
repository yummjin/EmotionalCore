import { post, REQUEST } from '@/shared/api';
import type { Login } from '../types';
import { useMutation } from '@tanstack/react-query';

const fetchLogin = async (data: Login) => {
  const response = await post<Login>({
    request: REQUEST.LOGIN,
    data: data,
  });
  return response.data;
};

export const useFetchLogin = () => {
  return useMutation({
    mutationFn: fetchLogin,
  });
};
