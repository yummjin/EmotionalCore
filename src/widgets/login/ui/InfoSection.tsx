import { PATH } from '@/shared/constants';
import Link from 'next/link';

export default function InfoSection() {
  return (
    <div className="mt-9 flex flex-col items-center justify-between gap-3">
      <p className="flex gap-2">
        <span className="text-gray-500">아직 감성코어 회원이 아니신가요?</span>
        <Link href={PATH.SIGNUP} className="text-m-500 font-medium underline">
          회원가입
        </Link>
      </p>
      <p className="flex gap-2">
        SNS로 로그인 및 회원가입 시 감성코어의 이용약관과
        <br /> 개인정보 수집 및 이용에 동의한 것으로 간주합니다.
      </p>
    </div>
  );
}
