'use client';

import { PATH } from '@/shared/constants';
import { useFetchUserInfo } from '@/shared/hooks';
import { getSession, removeCookie, setCookie } from '@/shared/utils';
import { useSubmitGoogleLogin, useSubmitKakaoLogin } from '@/widgets/oauth/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function OAuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { mutate: submitGoogleLogin } = useSubmitGoogleLogin();
  const { mutate: submitKakaoLogin } = useSubmitKakaoLogin();
  const { refetch: refetchUserInfo } = useFetchUserInfo();

  const onSuccess = (data: { access_token: string }) => {
    removeCookie('socialMode');
    setCookie('userToken', data.access_token);
    refetchUserInfo();
    const returnUrl = searchParams.get('returnUrl');
    router.push(returnUrl || PATH.HOME);
  };

  const onError = () => {
    alert('로그인 실패');
    router.push(PATH.LOGIN);
  };

  useEffect(() => {
    if (code) {
      console.log(code);
      const socialMode = getSession('socialMode');

      if (socialMode === 'kakao') {
        console.log('kakao');
        submitKakaoLogin(code, {
          onSuccess: onSuccess,
          onError: onError,
        });
      } else if (socialMode === 'naver') {
        console.log('naver');
      } else if (socialMode === 'google') {
        console.log('google');
        submitGoogleLogin(code, {
          onSuccess: onSuccess,
          onError: onError,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <div className="flex w-full justify-center">
      <div className="flex h-70 w-full max-w-[400px] flex-col items-center justify-center gap-3">
        <p className="text-h3 text-center font-medium">로그인 중..</p>
      </div>
    </div>
  );
}

export default function OAuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full justify-center">
          <div className="flex h-70 w-full max-w-[400px] flex-col items-center justify-center gap-3">
            <p className="text-h3 text-center font-medium">로그인 중..</p>
          </div>
        </div>
      }
    >
      <OAuthCallbackContent />
    </Suspense>
  );
}
