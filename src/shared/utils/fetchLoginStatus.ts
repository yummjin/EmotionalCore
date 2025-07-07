export const fetchLoginStatus = () => {
  const stored = sessionStorage.getItem('userToken');
  return stored;
};
