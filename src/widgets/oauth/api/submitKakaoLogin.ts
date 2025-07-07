import { post, REQUEST } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';

const submitKakaoLogin = async (code: string) => {
  const response = await post<{ code: string }, { access_token: string }>({
    request: REQUEST.OAUTH_KAKAO,
    data: { code: code },
  });
  return response.data;
};

export const useSubmitKakaoLogin = () => {
  return useMutation({
    mutationFn: submitKakaoLogin,
  });
};
