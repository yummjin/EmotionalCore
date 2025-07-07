export const setSession = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, value);
  }
};

export const getSession = (key: string) => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};

export const removeSession = (key: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(key);
  }
};
