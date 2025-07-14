import { removeCookie } from './cookie';

export const logout = () => {
  removeCookie('userInfo');
  removeCookie('userToken');
};
