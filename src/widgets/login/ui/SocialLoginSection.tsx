'use client';

import Image from 'next/image';
import LoginButton from './LoginButton';
import InfoSection from './InfoSection';
import { setSession } from '@/shared/utils';
import { GoogleIcon, KakaoIcon, NaverIcon } from '../../../../public/icons';
import { useSearchParams } from 'next/navigation';

export default function SocialLoginSection() {
  const searchParams = useSearchParams();
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const kakaoClientId = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const naverClientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

  const handleKakaoLogin = () => {
    setSession('socialMode', 'kakao');
    const returnUrl = searchParams.get('returnUrl');
    const redirectUri = returnUrl
      ? `${redirectUrl}?returnUrl=${encodeURIComponent(returnUrl)}`
      : redirectUrl;
    window.location.replace(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`,
    );
  };

  const handleNaverLogin = () => {
    setSession('socialMode', 'naver');
    const returnUrl = searchParams.get('returnUrl');
    const redirectUri = returnUrl
      ? `${redirectUrl}?returnUrl=${encodeURIComponent(returnUrl)}`
      : redirectUrl;
    window.location.replace(
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${redirectUri}`,
    );
  };

  const handleGoogleLogin = () => {
    setSession('socialMode', 'google');
    const returnUrl = searchParams.get('returnUrl');
    const redirectUri = returnUrl
      ? `${redirectUrl}?returnUrl=${encodeURIComponent(returnUrl)}`
      : redirectUrl;
    window.location.replace(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`,
    );
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-h3 text-center font-medium">간편 로그인</p>
      <LoginButton
        className="relative bg-[#F4F4F4]"
        onClick={handleGoogleLogin}
      >
        <Image
          src={GoogleIcon}
          alt="google"
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        구글 로그인
      </LoginButton>
      <LoginButton
        className="relative bg-[#04C73C] text-white"
        onClick={handleNaverLogin}
      >
        <Image
          src={NaverIcon}
          alt="naver"
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        네이버 로그인
      </LoginButton>
      <LoginButton className="relative bg-[#FFE711]" onClick={handleKakaoLogin}>
        <Image
          src={KakaoIcon}
          alt="kakao"
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        카카오 로그인
      </LoginButton>
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="size-[18px]" />
        <p className="text-s-100">로그인 상태 유지</p>
      </div>
      <InfoSection />
    </div>
  );
}
