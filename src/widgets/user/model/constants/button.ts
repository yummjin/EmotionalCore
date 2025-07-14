import { logout } from '@/shared/utils';

export const buttons = [
  {
    image: '/icons/icon-mypage.svg',
    label: '내 정보 관리',
    href: '/user',
  },
  {
    image: '/icons/icon-logout.svg',
    label: '로그아웃',
    onClick: logout,
  },
  {
    image: '/icons/icon-leave.svg',
    label: '탈퇴하기',
    href: '/user/leave',
  },
];
