import { REQUEST, userPut } from '@/shared/api';
import type { User } from '@/shared/types';
import { useMutation } from '@tanstack/react-query';

const submitUserUpdate = async (user: User) => {
  const response = await userPut<User>({
    request: REQUEST.USER_UPDATE,
    data: user,
  });
  return response.data;
};

export const useSubmitUserUpdate = () => {
  return useMutation({
    mutationFn: submitUserUpdate,
  });
};
