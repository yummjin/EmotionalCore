import { setCookie, getCookie, removeCookie } from './cookie';

export const setSession = (key: string, value: string) => {
  setCookie(key, value);
};

export const getSession = (key: string) => {
  return getCookie(key);
};

export const removeSession = (key: string) => {
  removeCookie(key);
};
