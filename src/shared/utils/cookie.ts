export const setCookie = (
  key: string,
  value: string,
  options?: {
    path?: string;
    expires?: Date;
    sameSite?: 'Strict' | 'Lax' | 'None';
    secure?: boolean;
  },
) => {
  if (typeof window === 'undefined') return;

  const {
    path = '/',
    expires,
    sameSite = 'Strict',
    secure = false,
  } = options || {};

  let cookieString = `${key}=${encodeURIComponent(value)}; path=${path}; SameSite=${sameSite}`;

  if (expires) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }

  if (secure) {
    cookieString += '; secure';
  }

  document.cookie = cookieString;
};

export const getCookie = (key: string): string | null => {
  if (typeof window === 'undefined') return null;

  const cookies = document.cookie.split(';');
  const cookie = cookies.find(c => c.trim().startsWith(`${key}=`));

  if (cookie) {
    return decodeURIComponent(cookie.split('=')[1]);
  }

  return null;
};

export const removeCookie = (key: string, path: string = '/') => {
  if (typeof window === 'undefined') return;

  document.cookie = `${key}=; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const hasCookie = (key: string): boolean => {
  return getCookie(key) !== null;
};

// 디버깅용: 모든 쿠키 확인
export const getAllCookies = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};

  const cookies: Record<string, string> = {};
  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.trim().split('=');
    if (key && value) {
      cookies[key] = decodeURIComponent(value);
    }
  });

  return cookies;
};
