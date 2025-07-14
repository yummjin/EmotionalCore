import { REQUEST, userDel } from '@/shared/api';
import { PATH } from '@/shared/constants';
import { logout } from '@/shared/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const submitUserLeave = async () => {
  const response = await userDel({
    request: REQUEST.USER_LEAVE,
  });
  return response.data;
};

export const useSubmitUserLeave = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: submitUserLeave,
    onSuccess: () => {
      logout();
      router.push(PATH.HOME);
    },
  });
};
