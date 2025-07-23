import { PATH } from '@/shared/constants';
import { fetchLoginStatus } from '@/shared/utils';

export const NAVBAR_ITEMS = [
  {
    label: '홈',
    href: PATH.HOME,
  },
  {
    label: '게시판',
    href: PATH.BOARD,
  },
  {
    label: '검색',
    href: PATH.SEARCH,
  },
  {
    label: '서재',
    href: fetchLoginStatus() ? PATH.LIBRARY : PATH.LOGIN,
  },
];
