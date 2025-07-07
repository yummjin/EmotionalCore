import { post, REQUEST } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

const submitGoogleLogin = async (code: string) => {
  const response = await post<{ code: string }, { access_token: string }>({
    request: REQUEST.OAUTH_GOOGLE,
    data: { code: code },
  });
  return response.data;
};

export const useSubmitGoogleLogin = () => {
  return useMutation({
    mutationFn: submitGoogleLogin,
  });
};
