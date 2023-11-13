import { CHILDREN_PATH } from '@/constants/path';

const Redirect = () => {
  const params = new URLSearchParams(location.search);

  const authToken = params.get('authToken');
  const installedAppId = params.get('installedAppId');

  localStorage.setItem('authToken', authToken ?? '');
  localStorage.setItem('installedAppId', installedAppId ?? '');

  window.location.replace(
    `${process.env.REACT_APP_BASE_URL}/${CHILDREN_PATH.BOTTOM_NAV_PATH.THINGS}`
  );
  return <></>;
};

export default Redirect;
