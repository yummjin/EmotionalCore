import { LoginForm, SocialLoginSection } from '@/widgets/login/ui';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="px-normal flex w-screen justify-center py-12">
      <div className="flex w-full flex-col items-center justify-center gap-10 md:w-[50%] md:gap-[76px] lg:w-[40%]">
        <Suspense fallback={<div>로딩 중...</div>}>
          <LoginForm />
        </Suspense>
        <Suspense fallback={<div>로딩 중...</div>}>
          <SocialLoginSection />
        </Suspense>
      </div>
    </div>
  );
}
