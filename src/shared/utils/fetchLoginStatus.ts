import { getCookie } from './cookie';

export const fetchLoginStatus = () => {
  return getCookie('userToken');
};
