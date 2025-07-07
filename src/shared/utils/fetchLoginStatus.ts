export const fetchLoginStatus = () => {
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('userToken');
    return stored;
  }
  return null;
};
