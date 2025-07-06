import { LoginForm, SocialLoginSection } from '@/widgets/login/ui';

export default function LoginPage() {
  return (
    <div className="px-normal flex w-screen justify-center py-12">
      <div className="md:max-w-medium lg:max-w-large flex w-full flex-col items-center justify-center gap-[76px]">
        <p className="text-h3 font-medium">로그인</p>
        <LoginForm />
        <SocialLoginSection />
      </div>
    </div>
  );
}
