export const setSession = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const getSession = (key: string) => {
  return sessionStorage.getItem(key);
};

export const removeSession = (key: string) => {
  sessionStorage.removeItem(key);
};
